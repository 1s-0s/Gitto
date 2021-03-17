import React from "react";
import { Item, Image } from "semantic-ui-react";
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
  Icon,
  IconGroup,
  CancelButton
} from "../styles/FriendCardStyle";

//React-Modal
import Modal from "react-modal";
import { style as ModalStyle } from "../styles/ModalStyle";
import avatar from "../images/logopen3.svg";
import ProfileImg from "../images/profile.jpg";
//Icon
import { BsInfoCircle as Info, BsThreeDotsVertical as Dot } from "react-icons/bs";
import { VscGlobe, VscGithub } from "react-icons/vsc";
import { FiTwitter } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";

//github contribution chart
import { drawContributions } from "github-contributions-canvas";

Modal.setAppElement("#root");

class FriendCard extends React.Component {
  state = {
    modalIsOpen: false
  };

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
    return (
      <Card raised>
        <Item.Group divided onClick={this.openModal}>
          <Item>
            <Image alt={avatar} size="mini" src={avatar} />
            <Item.Content>
              <CardHeader>
                <Item.Header>
                  Kavya Kulkarni
                  
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
            <ModalProfileLeft>
              <ModalProfileContent>
                <Image src={ProfileImg} centered circular size="small" />
                <ModalHeading>
                  Kavya Kulkarni
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
            <ModalProfileRight></ModalProfileRight>
          </ModalContent>
        </Modal>
      </Card>
    );
  }
}
export default FriendCard;
