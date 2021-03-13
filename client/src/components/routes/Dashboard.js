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
import Card from "../elements/Cards";
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
            <Icon>
              <Chat />
            </Icon>
            <Icon>
              <Friends/>
            </Icon>
          </IconGroup>
          {/* <IconLink to="/"> */}

          {/* </IconLink> */}
        </LeftDiv>
        {/* //? MIDDLE SECTION */}
        {/* <script src="https://gist.github.com/ritik307/27eae9dd262f83cdede0613f614933de.js"></script> */}
        <MiddleDiv>
          <h1>MiddleDiv</h1>
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
