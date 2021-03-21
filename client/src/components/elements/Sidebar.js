import React from "react";
import {
  Logo,
  IconGroup,
  IconContent,
  Icon,
} from "../styles/DashboardStyle";
// ICONS
import { AiOutlineMessage as Chat, } from "react-icons/ai";
import { RiGroup2Line as Friends } from "react-icons/ri";
import { IoMdLogOut as Logout } from "react-icons/io";
import { CgProfile as ProfilePic, CgDarkMode as Darkmode } from "react-icons/cg";
import logo from "../images/logopen3.svg";
import axios from "axios";
import Cookie from "js-cookie";
import {Redirect} from "react-router";

class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loggedIn: props.isLoggedIn,
      user:props.user
    }
  }
  onLogOutUser = (event) => {
    event.preventDefault();
    Cookie.remove("userid");
    console.log("logging user out");
    axios.post("/auth/logout").then((response)=>{
      console.log(response.data);
      if(response.status === 200){
        this.setState({
          loggedIn:false,
          user:null
        })
        this.props.logOutRedirect();
      }
    })
  }
  render() {
    
      return (
        <div>
          <Logo src={logo} color="white" size="mini" />
          <IconGroup>
            <Icon to="/dashboard/profile">
              <Chat />
              <IconContent>Chat</IconContent>
            </Icon>
            <Icon to="/dashboard/">
              <Friends />
              <IconContent>Friends</IconContent>
            </Icon>
            <Icon to="/dashboard/profile">
              <ProfilePic />
              <IconContent>Profile</IconContent>
            </Icon>
            <Icon onClick={this.onLogOutUser} to="/">
              <Logout />
              <IconContent>Logout</IconContent>
            </Icon>
            <Icon to="#">
              <Darkmode />
              <IconContent>Mode</IconContent>
            </Icon>
          </IconGroup>
        </div>
      );
    
    
  }
}
export default Sidebar;
