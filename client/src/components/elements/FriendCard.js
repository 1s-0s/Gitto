import React from "react";
import { Item, Image } from "semantic-ui-react";
import { Card, CardText, CardHeader } from "../styles/FriendCardStyle";
//React-Modal
import Modal from "react-modal";
import {style as ModalStyle} from "../styles/ModalStyle";
import avatar from "../images/logopen3.svg";

Modal.setAppElement("#root");

class FriendCard extends React.Component {
  state = {
    modalIsOpen: false,
  };

  openModal = () => {
    this.setState({ modalIsOpen: true }, function () {
      console.log("openModal: ", this.state.modalIsOpen);
    });
  };
  afterOpenModal = () => {
    console.log("after model is opened");
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false }, function () {
      console.log("closeModal: ", this.state.modalIsOpen);
    });
  };
  render() {
    return (
   
        <Card raised >
          <Item.Group divided onClick={this.openModal}>
            <Item>
              <Image alt={avatar} size="mini" src={avatar} />
              <Item.Content>
                <CardHeader>
                  <Item.Header>Kavya Kulkarni</Item.Header>
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
            contentLabel="Example Modal"
          >
            <h1> Pleaseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee </h1>
            <button onClick={this.closeModal}>close</button>
          </Modal>
        </Card>
      
    );
  }
}
export default FriendCard;
