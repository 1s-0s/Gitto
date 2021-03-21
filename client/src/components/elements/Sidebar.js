import React from "react";
import {
  Logo,
  IconGroup,
  IconContent,
  Icon,
} from "../styles/DashboardStyle";
//Cookies
import Cookie from "js-cookie";
// ICONS
import { AiOutlineMessage as Chat, } from "react-icons/ai";
import { RiGroup2Line as Friends } from "react-icons/ri";
import { IoMdLogOut as Logout } from "react-icons/io";
import { CgProfile as ProfilePic, CgDarkMode as Darkmode } from "react-icons/cg";
import logo from "../images/logopen3.svg";
import Axios from "axios";

class Sidebar extends React.Component {

  onLogOutUser = () => {
    console.log("Insidde logout")
    Axios({
      url: "/auth/logout",
      method: "GET"
    })
      .then((res) => {
        console.log("response of logout", res);

      })
      .catch((err) => {
        console.log("error from logout", err);
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
