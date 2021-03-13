import styled from "styled-components";
import { Segment } from "semantic-ui-react";


export const CardSegment = styled(Segment)`
  @media (min-width: 991px) {
    margin-top: 10vh !important;
    margin-left: 4vw !important;
    margin-right: 4vw !important;
  }

  /* background-color: #0D1117 ; */
`;
export const CardDetails = styled.div`
  margin-left: 1.5vh ;
  margin-right: 1.5vh ;
`;
export const SubHeader = styled.p`
  margin: 0 ;
  margin-bottom: 1vh ;
`;
export const CardHeader = styled.h2`
  margin-bottom: 0 ;
`;
export const GistSegment = styled.div`
  height: 30vh ;
  overflow-y: scroll ;
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