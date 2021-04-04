const express = require("express");
const passport = require("passport");
const chalk = require("chalk");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const auth = require("./routes/auth");
const userinfo = require("./routes/userinfo");
const mongoose = require("mongoose");
const morgan = require("morgan"); //HTTP logger
const cookieSession = require("cookie-session");
//!------socket.io------
const cors = require("cors");
const http = require("http");
const socketio = require("socket.io")(3001, {
  cors: {
    origin: "*",
  },
});
//!---------------------
//dotenv configuration
require("dotenv").config();
//database
require("./models/User");
//github authentication
require("./passport/githubConfig");

const PORT = process.env.PORT || 5000;
//MONGOOSE CONNECTION
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  (err) => {
    if (!err) console.log(chalk.hex("#BF68F6").bold("database is connected"));
    else console.log(chalk.red("Error:", err));
  }
);

const app = express();

// HTTP request logger
app.use(morgan("tiny"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static("public"));

//?cookie session
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_SESSION_KEY],
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", auth);
app.use("/userinfo", userinfo);

app.listen(PORT, () => {
  console.log(chalk.hex("#448EF6").bold("Server is running boiss"));
});

//!---socket IO----
app.use(cors());
socketio.on("connection", (socket) => {
  // either with send()
  socket.send("Hello!");

  // or with emit() and custom event names
  socket.emit("greetings", "Hey!", { ms: "jane" }, Buffer.from([4, 3, 3, 1]));

  // handle the event sent with socket.send()
  socket.on("message", (data) => {
    console.log(data);
  });

  // handle the event sent with socket.emit()
  socket.on("salutations", (elem1, elem2, elem3) => {
    console.log(elem1, elem2, elem3);
  });
});

// const server = http.createServer(app);
// const io = socketio(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
// });

// io.on("connection", (socket) => {
//   console.log("connection established successfully");
//   socket.on("join",()=>{
//     console.log("joined");
//   })
//   socket.on("disconnect", () => {
//     console.log("user has left");
//     socket.close();
//   });
// });
//!----------------
