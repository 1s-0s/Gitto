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
import logo from "../images/logo/cube3.svg";
import axios from "axios";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: props.isLoggedIn,
      user: props.user
    }
  }
  onLogOutUser = (event) => {

    axios({
      url: "/auth/logout",
      method: "GET"
    })
      .then((response) => {
        console.log("logged out success");
      })
  }
  //? THEME TOGGLER
  themeToggler = () => {
    console.log("before: ", this.props.theme.name);
    (this.props.theme.name === "light") ? this.props.handleChange("dark") : this.props.handleChange("light");
    console.log("after: ", this.props.theme.name);
  }
  render() {

    return (
      <div>
        <Logo src={logo} color="white" />
        <IconGroup>
          <Icon replace to="#">
            <Chat />
            <IconContent>Chat</IconContent>
          </Icon>
          <Icon replace to="/">
            <Friends />
            <IconContent>Friends</IconContent>
          </Icon>
          <Icon replace to="/profile">
            <ProfilePic />
            <IconContent>Profile</IconContent>
          </Icon>
          <Icon onClick={this.onLogOutUser} to="/login">
            <Logout />
            <IconContent>Logout</IconContent>
          </Icon>
          <Icon to="#" onClick={this.themeToggler}>
            <Darkmode />
            <IconContent>Mode</IconContent>
          </Icon>
        </IconGroup>
      </div>
    );


  }
}
export default Sidebar;
