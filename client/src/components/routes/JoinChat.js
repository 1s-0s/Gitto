import React from "react";
import {Link} from "react-router-dom";
import "./JoinChat.css";
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
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Join</h1>
          <div>
            <input
              placeholder="Name"
              className="joinInput"
              type="text"
              onChange={(event) => this.setState({name:event.target.value})}
            />
          </div>
          <div>
            <input
              placeholder="Room"
              className="joinInput mt-20"
              type="text"
              onChange={(event) => this.setState({room:event.target.value})}
            />
          </div>
          <Link
            onClick={(e) => (!this.state.name || !this.state.room ? e.preventDefault() : null)}
            to={`/chatroom?name=${this.state.name}&room=${this.state.room}`}
          >
            <button className={"button mt-20"} type="submit">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default JoinChat;
