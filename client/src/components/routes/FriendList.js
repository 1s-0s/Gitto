import React from "react";

import { Container } from "../styles/FriendStyle";
import FriendCard from "../elements/FriendCard";
import { connect } from "react-redux";
import axios from "axios";
class FriendList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFriends: [],
    };
  }
  componentDidMount() {
    axios({
      url: "/userinfo/friends",
      method: "GET",
    }).then((response) => {
      this.setState({isFriends:response.data.friendsList})
    });
  }
  // componentDidUpdate(nextProp) {
  //   console.log("from nextprop: ", nextProp.friends);
  //   if (this.state.isFriends != nextProp.friends) {
  //     this.setState({ isFriends: nextProp.friends }, () => {
  //       console.log("freinds are: ", this.state.isFriends);
  //     });
  //   }
  // }
  render() {
    console.log("freinds are from render: ", this.state.isFriends);
    return (
      <Container>
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("mapState: ", state.friendsReducer);
  return {
    friends: state.friendsReducer,
  };
};
export default connect(mapStateToProps)(FriendList);
