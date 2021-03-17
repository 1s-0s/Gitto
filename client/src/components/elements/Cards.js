import React from "react";
import { Icon } from "semantic-ui-react";
import {
  CardSegment,
  CardDetails,
  CardHeader,
  SubHeader,
  GistSegment,
  ButtonGroup,
  CardButton,
  // HeartButtonRed,
  // ReactIcon
} from "../styles/CardStyle";

import Gist from "react-gist";

class Card extends React.Component {
  state = {
    liked: false,
  };
  toggleLike = async () => {
    await this.setState({ liked: this.state.liked === true ? false : true });
    console.log(this.state.liked);
  };
  render() {
    return (
      <CardSegment>
        <GistSegment>
          <Gist id="27eae9dd262f83cdede0613f614933de" />
        </GistSegment>
        <CardDetails>
          <CardHeader>
            Kavya Kulkarni
          {/* /<ButtonGroup> */}
            <CardButton circular color="teal" size="mini" floated="right" icon="arrow down"></CardButton>
            <CardButton circular color="teal" size="mini" floated="right" icon="arrow up"></CardButton>
            <CardButton circular color="teal" size="mini" floated="right" icon="plus"></CardButton>
            {/* <CardButton circular color="black" animated="vertical">
              <CardButton.Content hidden>Like</CardButton.Content>
              <CardButton.Content visible>
                <Icon name='arrow up' />
              </CardButton.Content>
            </CardButton>
            <CardButton circular color="black" animated="vertical">
              <CardButton.Content hidden>Dislike</CardButton.Content>
              <CardButton.Content visible>
                <Icon name='arrow down' />
              </CardButton.Content>
            </CardButton> */}
            {/* </ButtonGroup> */}
          </CardHeader>
          {/* <HeartButtonRed
                onClick={this.toggleLike}
                style={
                  this.state.liked === true
                    ? { transitionDuration: "1s ", backgroundPosition: "-2800px 0" }
                    : { transitionDuration: "0s", backgroundPosition: "0 0" }
                }
              >
              </HeartButtonRed> */}
        </CardDetails>
      </CardSegment>
    );
  }
}
export default Card;
