import styled from "styled-components";
import { Segment } from "semantic-ui-react";
// Syntax highlighter
import Gist from "react-gist";

export const Div = styled.div`
  width: 100vw !important;
  height: 100vh !important;
  /* background-size: cover;
    background-position: center; */
  background-color: black !important;
`;
export const LeftDiv = styled.div`
  @media (max-width: 991px) {
    display: none !important;
  }
  width: 5% !important;
  height: 100% !important;
  float: left !important;
  border-collapse: collapse !important;
  background-color: gray !important;
  overflow-y: scroll !important;
`;
export const MiddleDiv = styled.div`
  @media (max-width: 991px) {
    width: 100% !important;
  }
  width: 50% !important;
  height: 100% !important;
  float: left !important;
  border-collapse: collapse !important;
  background-color: black !important;
  overflow-y: scroll !important;
`;
export const RightDiv = styled.div`
  @media (max-width: 991px) {
    display: none !important;
  }
  width: 45% !important;
  height: 100% !important;
  float: right !important;
  border-collapse: collapse !important;
  background-color: gray !important;
  overflow-y: scroll !important;
`;
export const CardSegment = styled(Segment)`
  @media (min-width: 991px) {
    margin-top: 10vh !important;
    margin-left: 4vw !important;
    margin-right: 4vw !important;
  }

  /* background-color: #0D1117 !important; */
`;
export const CardDetails = styled.div`
  margin-left: 1.5vh !important;
  margin-right: 1.5vh !important;
`;
export const SubHeader = styled.p`
  margin: 0 !important;
  margin-bottom: 1vh !important;
`;
export const CardHeader = styled.h2`
  margin-bottom: 0 !important;
`;
export const GistSegment = styled.div`
  height: 30vh !important;
  overflow-y: scroll !important;
`;
export const HeartButton = styled.div`
  width: 100px ;
  height: 100px ;
  background: url("https://cssanimation.rocks/images/posts/steps/heart.png") no-repeat ;
  background-position: 0 0;
  cursor: pointer;
  transition: background-position 1s steps(28);
  transition-duration: 0s ;
  
`;