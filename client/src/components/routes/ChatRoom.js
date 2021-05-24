import React from "react";
import io from "socket.io-client";
import queryString from "query-string";
//styles
import {Div,Header,Image} from "../styles/ChatRoomStyle";
//img
import construction from "../images/chatroom/Construct2.svg";
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
    const {name,room} = queryString.parse(this.props.location.search);
    this.setState({name:name,room:room});
    // // console.log("props",this.props);
    // // console.log(name,room);
    
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
      socket.send("Connection established from client");
      
      //when connection is esyablished send name and room
      socket.emit('join',{name:this.state.name,room:this.state.room})
      
      // or with emit() and custom event names
      // socket.emit(
      //   "salutations",
      //   "Hello!",
      //   { mr: "john" },
      //   Uint8Array.from([1, 2, 3, 4])
      // );
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
      <Div>
        
        <Image src={construction}/>      
        <Header>Under Contruction!!</Header>  
      </Div>
    );
  }
}
export default ChatRoom;
