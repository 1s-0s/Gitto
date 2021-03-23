import React from "react";

import { Container } from "../styles/FriendStyle";
import FriendCard from "../elements/FriendCard";
import {fetchFriendsAction} from "../../action/index";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
class FriendList extends React.Component {
  constructor(props){
    super(props);
    this.props.fetchFriendsAction();
    this.state={
      isFriends:this.props.friends
    }
  }
  componentDidUpdate(nextProp){
    if (this.state.isFriends != nextProp.friends) {
      this.setState({ isFriends: nextProp.friends},()=>{
        console.log("freinds are: ",this.state.isFriends);
      });
    }
  }
  render() {
    console.log("freinds are from render: ",this.state.isFriends);
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
const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({ fetchFriendsAction },dispatch)
}
const mapStateToProps = (state) =>{
  return{
    friends:state.friendsReducer
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(FriendList);
