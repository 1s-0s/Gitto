import React from "react";
import { Div, LeftDiv, MiddleDiv, RightDiv,Loading } from "../styles/DashboardStyle";
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
//Router
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./privateRoute/PrivateRoute";
//axios call
import axios from "axios";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    axios({
      url: "/userinfo/",
      method: "GET",
    }).then((res) => {
      //console.log("response to get all the users", res.data);
      this.setState({ users: res.data });
    });
    
  }
  componentDidUpdate(nextProp){
    if(this.state.isLoading!=nextProp.isValidUser.loading){
      this.setState({ isLoading: nextProp.isValidUser.loading });
    }
    
  }
  render() {
    //? Link: https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
    //!Warning: Each child in a list should have a unique "key" prop.
    if (this.state.isLoading) {
      return (
        <div>
          <Loading active size="large">
            <strong>Loading</strong>
          </Loading>
        </div>
      );
    } else {
      const users = this.state.users.map((currUser, i) => {
        console.log("currUser: ", currUser._id);
        return <Card name={currUser.name} fid={currUser._id} key={i} />;
      });

      return (
        <Div>
          {/* //? LEFT SECTION */}
          <LeftDiv>
            <Sidebar />
          </LeftDiv>
          {/* //? MIDDLE SECTION */}

          <MiddleDiv>
            <Switch>
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/editprofile" component={EditProfile} />
              <PrivateRoute exact path="/" component={FriendList} />
            </Switch>
          </MiddleDiv>
          {/* //? RIGHT SECTION */}
          <RightDiv>{users}</RightDiv>
        </Div>
      );
    }
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ saveUserData }, dispatch);
};
const mapStateToProps = (state) => {
  return {
    isValidUser: state.auth,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
