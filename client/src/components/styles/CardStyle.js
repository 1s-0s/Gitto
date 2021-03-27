import styled from "styled-components";
import { Segment, Button } from "semantic-ui-react";
import SyntaxHighlighter from 'react-syntax-highlighter';

export const CardSegment = styled(Segment)`
  @media (max-width: 991px) {
    margin-top: 15vh !important;
    margin-left: 5vw !important;
    margin-right: 5vw !important; 
    margin-bottom:10vh !important;
  }
  @media (min-width: 991px) {
    margin-top: 5vh !important;
    margin-left: 4vw !important;
    margin-right: 4vw !important;
    margin-bottom:5vh !important;
  }
  
  background-color:${(props) => props.theme.cardbg} !important;
  /* background-color: #0D1117 ; */
`;
export const CardDetails = styled.div`
  margin-left: 1.5vh ;
  margin-right: 1.5vh ;
`;
export const CardHeader = styled.h3`
  margin-top: 3vh !important;
  margin-bottom: 0 ;
  color:${(props) => props.theme.text};
`;
export const SubHeader = styled.p`
  margin-top: 2vh !important;
 
`;
export const LangLabel = styled.span`
  border:1px solid;
  border-radius: 5px;
  margin-right:1vh;
  padding:0.5vh 1vh;
  background-color:${(props) => props.theme.cardbg} !important;
  
`;
export const GistSegment = styled.div`
  height: 50vh ;
  overflow-y:auto;
`;
export const HeartButtonRed = styled.div`
  width: 100px ;
  height: 100px ;
  display: flex;
  flex-direction: row;
  background: url("https://cssanimation.rocks/images/posts/steps/heart.png") no-repeat ;
  background-position: 0 0;
  cursor: pointer;
  transition: background-position 1s steps(28);
  transition-duration: 0s ;
`;
export const CardButton = styled(Button)`
  margin-top: 0vh !important;
  color: #EEE3E3;
  &:hover{
    color: #AAB8C2;;
  }
`;
export const ButtonGroup = styled.div`
  margin-top: 0vh;
  text-align:center;
`;
// export const ReactIcon = styled(Grid)`
//   margin: auto auto;
// `;

export const Gist = styled(SyntaxHighlighter)`
  height:30vh;
`;