import React from "react";
// import { Icon } from "semantic-ui-react";
import {
  CardSegment,
  CardDetails,
  CardHeader,
  GistSegment,
  CardButton,
  // ReactIcon
} from "../styles/CardStyle";
// Action Creator
import {reloadComponentAction } from "../../action/index";
//React-Redux
import { bindActionCreators } from "redux";
import {connect} from "react-redux";

//import Gist from "react-gist";
import axios from "axios";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false,
    }
  }

  toggleLike = async () => {
    await this.setState({ like: this.state.like === true ? false : true });
    console.log("like: ", this.state.like);
  };

  toggleDisLike = async () => {
    await this.setState({ like: this.state.like === true ? false : true });
    console.log("dislike: ", this.state.like);
  };
  //? adding card user to users friendlist
  addToFriends(friend) {
    console.log("current user name: ", this.props.name);
    axios({
      url: "/userinfo/addfriend",
      method: "POST",
      data: { "friend": friend }
    })
      .then((response) => {
        console.log("friend added successfully", response);
        this.props.reloadComponentAction();
      })
      .catch((err) => {
        console.log("error while saving friend: ", err);
      })
  }
  render() {
    // console.log(this.props.key);

    return (
      <CardSegment>
        <GistSegment>
          {/* <Gist id={this.props.gistid} /> */}
        </GistSegment>
        <CardDetails>
          <CardHeader>
            {this.props.name}
            <CardButton circular color="teal" size="mini" floated="right" icon="arrow down" onClick={this.toggleDisLike}></CardButton>
            <CardButton circular color="teal" size="mini" floated="right" icon="arrow up" onClick={this.toggleLike}></CardButton>
            <CardButton circular color="teal" size="mini" floated="right" icon="plus" onClick={() => this.addToFriends(this.props.friend)}></CardButton>
          </CardHeader>
        </CardDetails>
      </CardSegment>
    );
  }
}
const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({ reloadComponentAction }, dispatch);
}
const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Card);
