import React from "react";
import { Label } from "semantic-ui-react";
import {
  CardSegment,
  CardDetails,
  CardHeader,
  SubHeader,
  GistSegment,
  HeartButtonRed,
  HeartButtonBlack,
  HeartButtonGreen,
  ReactIcon
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
          <ReactIcon>
            <CardHeader>
              Samriddhi
              <SubHeader> </SubHeader>
            </CardHeader>

            <HeartButtonRed
              onClick={this.toggleLike}
              style={
                this.state.liked === true
                  ? { transitionDuration: "1s ", backgroundPosition: "-2800px 0" }
                  : { transitionDuration: "0s", backgroundPosition: "0 0" }
              }
            />
          </ReactIcon>


          {/* <Label.Group>
            <Label as="a" color="green" image>
              MongoDB
              <Label.Detail>80%</Label.Detail>
            </Label>
            <Label as="a" color="blue" image>
              React
              <Label.Detail>90%</Label.Detail>
            </Label>
            <Label as="a" color="orange" image>
              HTML
              <Label.Detail>80%</Label.Detail>
            </Label>
          </Label.Group> */}

        </CardDetails>
      </CardSegment>
    );
  }
}
export default Card;
