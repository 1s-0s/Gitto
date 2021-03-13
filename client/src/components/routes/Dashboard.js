import React from "react";
import { Label } from "semantic-ui-react";
import {
  Div,
  LeftDiv,
  MiddleDiv,
  RightDiv,
  CardSegment,
  CardDetails,
  CardHeader,
  SubHeader,
  GistSegment,
  HeartButton
} from "../styles/DashboardStyle";

import Gist from "react-gist";
class Dashboard extends React.Component {
  state={
    liked:false
  }
  toggleLike=async()=>{
    await this.setState({liked:(this.state.liked===true) ? false : true});
    console.log(this.state.liked);
  }
  render() {
    return (
      <Div>
        {/* //? LEFT SECTION */}
        <LeftDiv>
          <h1>Left</h1>
        </LeftDiv>
        {/* //? MIDDLE SECTION */}
        {/* <script src="https://gist.github.com/ritik307/27eae9dd262f83cdede0613f614933de.js"></script> */}
        <MiddleDiv>
          <h1>MiddleDiv</h1>
        </MiddleDiv>
        {/* //? RIGHT SECTION */}
        <RightDiv>
          <CardSegment>
            <GistSegment>
              <Gist id="27eae9dd262f83cdede0613f614933de" />
            </GistSegment>

            <CardDetails>
              <CardHeader>Samriddhi</CardHeader>
              <SubHeader>Full stack web dev</SubHeader>
              <Label.Group>
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
              </Label.Group>
              <HeartButton onClick={this.toggleLike} style={(this.state.liked===true) ? {transitionDuration:"1s ",backgroundPosition:"-2800px 0"} : {transitionDuration:"0s",backgroundPosition:"0 0"}}/>
            </CardDetails>
          </CardSegment>
          <CardSegment>
            <GistSegment>
              <Gist id="27eae9dd262f83cdede0613f614933de" />
            </GistSegment>

            <CardDetails>
              <CardHeader>Samriddhi</CardHeader>
              <SubHeader>Full stack web dev</SubHeader>
              <Label.Group>
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
              </Label.Group>
              <HeartButton onClick={this.toggleLike} style={(this.state.liked===true) ? {transitionDuration:"1s ",backgroundPosition:"-2800px 0"} : {transitionDuration:"0s",backgroundPosition:"0 0"}}/>
            </CardDetails>
          </CardSegment>
        </RightDiv>
      </Div>
    );
  }
}
export default Dashboard;
