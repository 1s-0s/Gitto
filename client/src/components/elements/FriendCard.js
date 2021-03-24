import React from "react";
import { Item, Image } from "semantic-ui-react";
//Styles
import {
  Card,
  CardText,
  CardHeader,
  ModalContent,
  ModalProfileLeft,
  ModalProfileRight,
  ModalProfileContent,
  ModalHeading,
  ModalSubHeading,
  InfoIcon,
  DelIcon,
  Icon,
  IconGroup,
  CancelButton,
  RepoCard
} from "../styles/FriendCardStyle";

//React-Modal
import Modal from "react-modal";
import { style as ModalStyle } from "../styles/ModalStyle";
// import avatar from "../images/logopen3.svg";
// import ProfileImg from "../images/profile.jpg";
//Icon
import { BsThreeDotsVertical as Dot } from "react-icons/bs";
import { RiDeleteBin6Line as Delete } from "react-icons/ri";
import { VscGlobe, VscGithub } from "react-icons/vsc";
import { FiTwitter } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import axios from "axios";
//IoMdRemoveCircle
//github contribution chart
// import { drawContributions } from "github-contributions-canvas";

Modal.setAppElement("#root");

class FriendCard extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      githubReps: [
        "OnlyMeal",
        "Rapid-NPM-Package",
        "Captcha-IMHUMAN"
      ]
    };
  }

  deleteFriend = () => {
    console.log("delte calls");
    axios({
      url: "/userinfo/delete",
      method: "POST",
      data: { fid: this.props.fid }
    }).then(() => {
      console.log("sending friend to server to delete:");
    }).catch((err) => {
      console.log("error while deleting friend", err);
    })
  }

  openModal = () => {
    this
      .setState({
        modalIsOpen: true
      }, function () {
        console.log("openModal: ", this.state.modalIsOpen);
      });
  };
  afterOpenModal = () => {
    console.log("after model is opened");
  };
  closeModal = () => {
    this
      .setState({
        modalIsOpen: false
      }, function () {
        console.log("closeModal: ", this.state.modalIsOpen);
      });
  };
  render() {
    // fetching repos
    const username = "1s-0s"
    const repos = this.state.githubReps.map((reponame) => {
      const currrepo = `https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${reponame}&show_icons=true&theme=blue-green&line_height=27&title_color=FFFFFF&bg_color=001E19&hide_border=true`
      return (
        <RepoCard key={reponame} centered size="large" src={currrepo} />
      )
    })
    return (
      <Card raised>
        <Item.Group divided >
          <Item>
            <Image alt={this.props.avatar} size="tiny" circular src={this.props.avatar} />
            <Item.Content>
              <CardHeader>
                <Item.Header>
                  {this.props.name}
                  <InfoIcon onClick={this.openModal}>
                    <Dot />
                  </InfoIcon>
                  <DelIcon onClick={this.deleteFriend}>
                    <Delete />
                  </DelIcon>
                </Item.Header>
              </CardHeader>
              <Item.Meta></Item.Meta>
              <Item.Description>
                <CardText>Hello,people I am Kavya Kulkarni.</CardText>
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          style={ModalStyle}
          contentLabel="Example Modal">
          <ModalContent>
            {/*//? LEFT SECTION */}
            <ModalProfileLeft>
              <ModalProfileContent>
                <Image src={this.props.avatar} centered circular size="small" />
                <ModalHeading>
                  {this.props.name}
                </ModalHeading>
                <ModalSubHeading>A Happy Soul</ModalSubHeading>
                <IconGroup>
                  <Icon>
                    <VscGlobe />
                  </Icon>
                  <Icon>
                    <VscGithub />
                  </Icon>
                  <Icon>
                    <FiTwitter />
                  </Icon>
                </IconGroup>

                <CancelButton>
                  <ImCancelCircle onClick={this.closeModal} />
                </CancelButton>

              </ModalProfileContent>

            </ModalProfileLeft>
            {/*//? RIGHT SECTION */}
            <ModalProfileRight>
              {repos}
            </ModalProfileRight>
          </ModalContent>
        </Modal>
      </Card>
    );
  }
}
export default FriendCard;
