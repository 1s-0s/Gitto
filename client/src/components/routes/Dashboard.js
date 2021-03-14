import React from "react";
import {
  Div,
  LeftDiv,
  MiddleDiv,
  RightDiv,
} from "../styles/DashboardStyle";
//Custome Component
import Card from "../elements/Cards";
import Sidebar from  "../elements/Sidebar";
//Custome Routes
import FriendList from "./FriendList";
import Profile from "./Profile";

//Router
import { Route} from "react-router-dom";


class Dashboard extends React.Component {
  render() {
    return (
      <Div>
        {/* //? LEFT SECTION */}
        <LeftDiv>
          <Sidebar/>
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
