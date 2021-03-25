import React from "react";
// import { Icon } from "semantic-ui-react";
import {
  CardSegment,
  CardDetails,
  CardHeader,
  Gist,
  CardButton,
  SubHeader,
  LangLabel
  // ReactIcon
} from "../styles/CardStyle";
// Action Creator
import {reloadComponentAction } from "../../action/index";
//React-Redux
import { bindActionCreators } from "redux";
import {connect} from "react-redux";
//React Syntax Highlighter
import SyntaxHighlighter from 'react-syntax-highlighter';
import { qtcreatorDark, atelierSavannaLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
//import Gist from "react-gist";
import axios from "axios";
import { Label } from "semantic-ui-react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false,
     
    }
    
  }
  code=`
  function createStyleObject(classNames, style) {
    return classNames.reduce((styleObject, className) => {
      return {...styleObject, ...style[className]};
    }, {});
  }

  function createClassNameString(classNames) {
      return classNames.join(' ');
  }`
  
  
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
    const currTheme= this.props.theme.name;
    console.log("currTheme is : ",currTheme)
    return (
      <CardSegment>
        
        <Gist showLineNumbers  style={currTheme==='light' ? atelierSavannaLight : qtcreatorDark}>
          {this.props.gist}
        </Gist>
          {/* <Gist id={this.props.gistid} /> */}
        
        <CardDetails>
          <CardHeader>
            {this.props.name}
            <CardButton circular color="teal" size="mini" floated="right" icon="arrow down" onClick={this.toggleDisLike}></CardButton>
            <CardButton circular color="teal" size="mini" floated="right" icon="arrow up" onClick={this.toggleLike}></CardButton>
            <CardButton circular color="teal" size="mini" floated="right" icon="plus" onClick={() => this.addToFriends(this.props.friend)}></CardButton>
          </CardHeader>
          <SubHeader>
            <LangLabel style={{color:"green"}}>MongoDB</LangLabel>
            <LangLabel style={{color:"red"}}>MongoDB</LangLabel>
            <LangLabel style={{color:"blue"}}>MongoDB</LangLabel>
          </SubHeader>
        </CardDetails>
      </CardSegment>
    );
  }
}
const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({ reloadComponentAction }, dispatch);
}
const mapStateToProps = (state) => {
  console.log("user card: ",state.auth.user);
  return {
    user: state.auth.user
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Card);
