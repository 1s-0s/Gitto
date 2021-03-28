import React from "react";
import { Image } from "semantic-ui-react";
import {
  CardSegment,
  CardDetails,
  CardHeader,
  Gist,
  CardButton,
  TerminalBar,
  TerminalButtonGreen,
  TerminalButtonRed,
  TerminalButtonYellow,
  // ReactIcon
} from "../styles/CardStyle";
// Action Creator
import { reloadComponentAction } from "../../action/index";
//React-Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//React Syntax Highlighter
// import SyntaxHighlighter from 'react-syntax-highlighter';
import { qtcreatorDark, atelierSavannaLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
//import Gist from "react-gist";
import axios from "axios";
// import { Label } from "semantic-ui-react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: null,
    }

  }

  toggleLike = async () => {
    if (this.state.like === null || this.state.like === false) {
      await this.setState({ like: true });
    }
    //console.log("like setting to like: ", this.state.like);
  };

  toggleDisLike = async () => {
    if (this.state.like === null || this.state.like === true) {
      await this.setState({ like: false });
    }
    // console.log("dislike setting to like state: ", this.state.like);
  };
  //? adding card user to users friendlist
  addToFriends(friend) {
    //console.log("current user name: ", this.props.name);
    axios({
      url: "/userinfo/addfriend",
      method: "POST",
      data: { friend: friend },
    })
      .then((response) => {
        // console.log("friend added successfully", response);
        // alert(`${friend.name} has been added successfully!`);
        this.props.reloadComponentAction();
      })
      .catch((err) => {
        console.log("error while saving friend: ", err);
      });
  }
  renderLanguages = () => {
    const languages = this.props.friend.technology.map((lang) => {
      const langsrc = require(`../images/languages/${lang}.svg`);
      // console.log("langsrc: ", langsrc.default);
      return (
        // <Image src={require(`${langsrc}${lang}.svg`)}/>
        <Image circular src={langsrc.default} key={lang} />
      );
    });
    return languages;
  };
  render() {
    // console.log("friend tech stack : ", this.props.friend.technology);
    const currTheme = this.props.theme.name;
    // console.log("currTheme is : ", currTheme)
    return (
      <CardSegment>
        <TerminalBar>
          <TerminalButtonRed/>
          <TerminalButtonYellow/>
          <TerminalButtonGreen/>
        </TerminalBar>
        <Gist
          showLineNumbers
          language="javascript"
          style={currTheme === "light" ? atelierSavannaLight : qtcreatorDark}
        >
          {this.props.gist}
        </Gist>
        <CardDetails>
          <CardHeader>
            {this.props.name}
            <CardButton circular color={(this.state.like === false) ? "red" : "teal"} size="mini" floated="right" icon="arrow down" onClick={this.toggleDisLike}></CardButton>
            <CardButton circular color={this.state.like === true ? "red" : "teal"} size="mini" floated="right" icon="arrow up" onClick={this.toggleLike}></CardButton>
            <CardButton circular color="teal" size="mini" floated="right" icon="plus" onClick={() => this.addToFriends(this.props.friend)}></CardButton>
          </CardHeader>
          <Image.Group size="mini">{this.renderLanguages()}</Image.Group>
        </CardDetails>
      </CardSegment>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ reloadComponentAction }, dispatch);
};
const mapStateToProps = (state) => {
  // console.log("user card: ", state.auth.user);
  return {
    user: state.auth.user,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
