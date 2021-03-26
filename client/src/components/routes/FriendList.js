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
      this.setState({ isFriends: response.data.friendsList })
      //console.log("Insidie axios: ", this.state.isFriends);
    });
  }
  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }
  renderFriendCard = () => {
    // console.log("inside renderFriends!");
    const isFriends = this.state.isFriends.map((friendList, i) => {
      // console.log("Friendcard :", friendList);
      return <FriendCard fid={friendList._id} name={friendList.name} avatar={friendList.avatar} bio={friendList.bio} key={i} />
    });
    return isFriends;
  }

  render() {
    return (
      <Container>
        {this.renderFriendCard()}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log("mapState: ", state.friendsReducer);
  return {
    friends: state.friendsReducer,
  };
};
export default connect(mapStateToProps)(FriendList);
