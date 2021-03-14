import React from "react";
import {
  Div,
  LeftDiv,
  MiddleDiv,
  RightDiv,
  Logo,
  IconGroup,
  Icon,
} from "../styles/DashboardStyle";
//Custome Component
import Card from "../elements/Cards";
import FriendList from "../elements/FriendList"
// ICONS
import { AiOutlineMessage as Chat } from "react-icons/ai";
import { IoPeopleCircleOutline as Friends } from "react-icons/io5";
import logo from "../images/logopen3.svg";


class Dashboard extends React.Component {
  render() {
    return (
      <Div>
        {/* //? LEFT SECTION */}
        <LeftDiv>
          <Logo src={logo} color="white" size="mini" />
          <IconGroup>
            <Icon to="/profile">
              <Chat />
            </Icon>
            <Icon to="/friendlist">
              <Friends />
            </Icon>
          </IconGroup>
          {/* <IconLink to="/"> */}

          {/* </IconLink> */}
        </LeftDiv>
        {/* //? MIDDLE SECTION */}
        {/* <script src="https://gist.github.com/ritik307/27eae9dd262f83cdede0613f614933de.js"></script> */}
        <MiddleDiv>
          <FriendList />
          <FriendList />
          <FriendList />
          <FriendList />
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
