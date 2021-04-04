import React from "react";
import io from "socket.io-client";
import queryString from "query-string";

let socket;


class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      room: "",
    };
  }
  componentDidMount() {
    // const {name,room} = queryString.parse(this.props.location.search);
    // // console.log("props",this.props);
    // // console.log(name,room);
    // this.setState({name:name,room:room});
    // var connectionOptions =  {
    //     "force new connection" : true,
    //     "reconnectionAttempts": "Infinity",
    //     "timeout" : 10000,
    //     "transports" : ["websocket"]
    // };
    // socket = io('localhost:5000',connectionOptions);
    // console.log("socket: ",socket);

    const socket = io("localhost:3001");

    socket.on("connect", () => {
      // either with send()
      socket.send("Hello!");

      // or with emit() and custom event names
      socket.emit(
        "salutations",
        "Hello!",
        { mr: "john" },
        Uint8Array.from([1, 2, 3, 4])
      );
    });

    // handle the event sent with socket.send()
    socket.on("message", (data) => {
      console.log(data);
    });

    // handle the event sent with socket.emit()
    socket.on("greetings", (elem1, elem2, elem3) => {
      console.log(elem1, elem2, elem3);
    });
  }

  render() {
    return (
      <div>
        <h1>Chat room</h1>
      </div>
    );
  }
}
export default ChatRoom;
