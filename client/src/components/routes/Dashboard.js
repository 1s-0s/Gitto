import React from "react";
import {
  Div,
  LeftDiv,
  MiddleDiv,
  RightDiv,
  // Loading,
  LoaderDiv,
} from "../styles/DashboardStyle";
//Loading Image
import loader from "../images/loading/loader.gif";
//Semantic UI
import { Image } from "semantic-ui-react";
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
import { Switch } from "react-router-dom";
import PrivateRoute from "./privateRoute/PrivateRoute";
//axios call
import axios from "axios";
//for darkmode
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "../dark-mode/Themes";

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};
class Dashboard extends React.Component {
  //? reload-to reload the page when user delete a friend
  constructor() {
    super();
    this.state = {
      users: [],
      isLoading: true,
      theme: "light",
      // reload: false,
    };
  }
  componentDidMount() {

    //? for fetch all users
    axios({
      url: "/userinfo/",
      method: "GET",
    }).then((res) => {
      //console.log("response to get all the users", res.data);
      this.setState({ users: res.data });
    });
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? this.setState({ theme: localTheme }) : this.setMode("light");
  }

  componentDidUpdate(nextProp) {
    //console.log("reload component when data changed: ",nextProp);
    if (this.state.isLoading !== nextProp.isValidUser.loading) {
      this.setState({ isLoading: nextProp.isValidUser.loading });
    }
  }
  //? RENDERING FRIENDS CARDS
  renderCards(currTheme) {
    const users = this.state.users.map((currUser, i) => {
      //console.log("currUser: ", currUser._id);
      return <Card name={currUser.name} friend={currUser} key={i} theme={currTheme}/>;
    });
    return users;
  }

  //? called when wanted to reload the component
  // reloadComponent = () => {
  //   console.log("reload called");
  //   this.setState({ reload: true });
  // };
  //? DARK THEME IMPLEMENTATION
  setMode = (localTheme) => {
    window.localStorage.setItem("theme", localTheme);
    this.setState({ theme: localTheme });
  };
  handleChange = (newTheme) => {
    this.setMode(newTheme);
  };
  render() {
    //? Link: https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
    //!Warning: Each child in a list should have a unique "key" prop.
    if (this.state.isLoading) {
      return (
        <LoaderDiv>
          <Image centered src={loader} size="medium" />
          {/* <Loading active size="large">
            <strong>Loading</strong>
          </Loading> */}
        </LoaderDiv>
      );
    } else {
      return (
        <ThemeProvider theme={themes[this.state.theme]}>
          <Div>
            {/* //? LEFT SECTION */}
            <LeftDiv>
              <Sidebar
                handleChange={this.handleChange}
                theme={themes[this.state.theme]}
              />
            </LeftDiv>
            {/* //? MIDDLE SECTION */}
            <MiddleDiv>
              <Switch>
                <PrivateRoute exact path="/profile" component={Profile} />
                <PrivateRoute
                  exact
                  path="/editprofile"
                  component={EditProfile}
                />
                <PrivateRoute exact path="/" component={()=><FriendList/>} />
              </Switch>
            </MiddleDiv>
            {/* //? RIGHT SECTION */}
            <RightDiv>{this.renderCards(themes[this.state.theme])}</RightDiv>
          </Div>
        </ThemeProvider>
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
    reloadComponent: state.reloadComponent
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
