import React from "react";
import {
  Div,
  LeftDiv,
  MiddleDiv,
  RightDiv,
} from "../styles/DashboardStyle";
// Action Creator
import { saveUserData } from "../../action/index";
//REACT-REDUX AND REDUX-FORM
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//Custome Component
import Card from "../elements/Cards";
import Sidebar from "../elements/Sidebar";
//Custome Routes
import FriendList from "./FriendList";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import Axios from "axios";
//Router
import { Route } from "react-router-dom";
//fetch cookie
import Cookie from "js-cookie";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      curruser:null
    }
  }
  componentDidMount() {
    const userid = Cookie.get("userid");
    Axios({
      url: "/userinfo/" + userid,
      method: "GET"
    })
      .then((res) => {
        console.log("response from dashboard", res.data);
        this.setState({curruser:res.data})
        this.props.saveUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    Axios({
      url: "/userinfo/",
      method: "GET"
    })
      .then((res) => {
        console.log("response to get all the users", res.data);
        this.setState({ users: res.data })
      })
  }
  logOutRedirect = ()=>{
    this.props.history.push("/");
  }
  render() {
    //! Link: https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
    //!Warning: Each child in a list should have a unique "key" prop.
    const userData = this.state.users.map((currUser, i) => {
      return (
        <Card name={currUser.name} gistid={currUser.gist} key={i} />
      )

    })
    
    return (
      <Div>
        {/* //? LEFT SECTION */}
        <LeftDiv>
          <Sidebar isLoggedin="true" user={this.state.curruser} logOutRedirect={this.logOutRedirect.bind(this)} />
        </LeftDiv>
        {/* //? MIDDLE SECTION */}
        {/* <script src="https://gist.github.com/ritik307/27eae9dd262f83cdede0613f614933de.js"></script> */}
        <MiddleDiv>
          <Route exact path="/dashboard/" component={FriendList} />
          <Route exact path="/dashboard/profile" component={Profile} />
          <Route exact path="/dashboard/editprofile" component={EditProfile} />
        </MiddleDiv>
        {/* //? RIGHT SECTION */}
        <RightDiv>
          {userData}
          {/* <Card /> */}
        </RightDiv>
      </Div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ saveUserData }, dispatch);
}

export default connect(null, mapDispatchToProps)(Dashboard);
