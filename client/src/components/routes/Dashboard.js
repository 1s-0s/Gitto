import React from "react";
import {
  Div,
  LeftDiv,
  MiddleDiv,
  RightDiv,
  Logo,
  IconGroup,
  IconContent,
  Icon,
} from "../styles/DashboardStyle";
//Custome Component
import Card from "../elements/Cards";
//Custome Routes
import FriendList from "./FriendList";
import Profile from "./Profile";
// ICONS
import { AiOutlineMessage as Chat } from "react-icons/ai";
import { IoPeopleCircleOutline as Friends } from "react-icons/io5";
import { CgProfile as ProfilePic } from "react-icons/cg";
import logo from "../images/logopen3.svg";
//Router
import { Route, Switch } from "react-router-dom";


class Dashboard extends React.Component {
  render() {
    return (
      <Div>
        {/* //? LEFT SECTION */}
        <LeftDiv>
          <Logo src={logo} color="white" size="mini" />
          <IconGroup>
            <Icon to="/dashboard/">
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
          </IconGroup>
        </LeftDiv>
        {/* //? MIDDLE SECTION */}
        {/* <script src="https://gist.github.com/ritik307/27eae9dd262f83cdede0613f614933de.js"></script> */}
        <MiddleDiv>
          <Route exact path="/dashboard/" component={FriendList} />
          <Route exact path="/dashboard/profile" component={Profile} />
        </MiddleDiv>
        {/* //? RIGHT SECTION */}
        <RightDiv>
          <Card />
          <Card />
        </RightDiv>
      </Div>
    );
  }
}
export default Dashboard;
