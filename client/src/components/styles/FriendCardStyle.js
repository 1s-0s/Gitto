import styled from "styled-components";
import { Segment,Image} from "semantic-ui-react";
import ModalCardBg from "../images/friendCard/friendCardBg2.svg";

export const Card = styled(Segment)`
  background-color:rgba(0,77,64,0.4)  !important;
  -webkit-box-shadow:0 0 20px rgba(0,77,64,0.4);
  -moz-box-shadow:0 0 20px rgba(0,77,64,0.4);
  box-shadow:0 0 20px rgba(0,77,64,0.4);
  /* border-color: #EEE3E3 !important; */
`;
export const CardHeader = styled.h3`
  color:#EEE3E3 !important;
  margin-bottom: 0 !important;
`;
export const CardText = styled.div`
  color: #EEE3E3  !important;
`;
export const Icon= styled.a`
  
  margin-left:1vw;
  margin-right:1vw;
  font-size:2em;
  color: #EEE3E3;
  &:hover{
    color: #87B588;
  }
  
`;

export const IconGroup = styled.div`
  text-align:center;
`; 
export const CancelButton = styled.p`
  font-size:2em;
  color: #AAB8C2;
  text-align:center;
  margin-bottom:1000000vh;
  margin-top:10vh;
  &:hover{
    color: #CA0B00;
  }
`;
export const RepoCard = styled(Image)`
  margin-bottom: 2vh;
`;
// Modals
export const ModalHeading = styled.h2`
  padding: 0;
  margin: 0;
  text-align: center;
  color:#EEE3E3;
`;
export const ModalSubHeading = styled.p`
  padding: 0;
  text-align: center;
  color:#AAB8C2;
  
`;
export const ModalProfileContent = styled.div`
  margin-top:20vh;
  position: relative;
  align-items: center ;
`;
export const ModalContent = styled.div`
  position: relative;
  height: 100%;
`;
export const ModalProfileLeft = styled.div`
  background-image:linear-gradient(rgba(0,77,64, 0.7),rgba(0,77,64, 0.7)),url(${ModalCardBg});
  background-size: cover;
  background-position: center;
  width: 50% ;
  height: 100% ;
  float: left ;
  border-collapse: collapse ;
  background-color: rgba(0,77,64,0.4);
`;
export const ModalProfileRight = styled.div`
  padding: 5vh;
  width: 50% ;
  height: 100% ;
  float: right ;
  border-collapse: collapse ;
`;
