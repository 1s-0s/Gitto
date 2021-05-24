import React from "react";
import {Link} from "react-router-dom";
// import "./JoinChat.css";
import {Heading, JoinInput, JoinOuterContainer,Button,JoinInnerContainer} from "../styles/JoinChatStyle";
class JoinChat extends React.Component {
  constructor(){
      super();
      this.state={
          name:"",
          room:""
      }
  }  
  render() {
    return (
      <JoinOuterContainer>
        <JoinInnerContainer>
          <Heading>Join Room</Heading>
          <div>
            <JoinInput
              placeholder="Name"
              type="text"
              onChange={(event) => this.setState({name:event.target.value})}
            />
          </div>
          <div>
            <JoinInput
              placeholder="Room"
              type="text"
              onChange={(event) => this.setState({room:event.target.value})}
            />
          </div>
          <Link
            onClick={(e) => (!this.state.name || !this.state.room ? e.preventDefault() : null)}
            to={`/chatroom?name=${this.state.name}&room=${this.state.room}`}
          >
            <Button type="submit">
              <b>Join</b>
            </Button>
          </Link>
        </JoinInnerContainer>
      </JoinOuterContainer>
    );
  }
}
export default JoinChat;
