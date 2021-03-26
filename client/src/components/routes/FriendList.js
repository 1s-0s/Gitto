import React from "react";
import { Container,FillerImageDiv } from "../styles/FriendStyle";
import FriendCard from "../elements/FriendCard";
import { connect } from "react-redux";
import axios from "axios";
//Filler images
import filler from "../images/filler-image/filler1.svg";
//Semantic UI
import { Image } from "semantic-ui-react";

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
    if(this.state.isFriends.length===0){
      return (
        <FillerImageDiv>
          <Image centered src={filler} size="medium"></Image>
        </FillerImageDiv>
      )
    }
    else{
      const isFriends = this.state.isFriends.map((friendList, i) => {
        // console.log("Friendcard :", friendList);
        return <FriendCard fid={friendList._id} name={friendList.name} avatar={friendList.avatar} bio={friendList.bio} key={i} />
      });
      return isFriends;
    }
    
  }

  render() {
    // const friendCard = this.state.isFriends.map((friendList, i) => {
    //   console.log("Friendcard :", friendList);
    //   return <FriendCard name={friendList.name} avatar={friendList.avatar} key={i} />
    // });
    //console.log("friends are from render: ", this.state.isFriends);
    return (
      <Container>
        {/* {friendCard} */}
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
