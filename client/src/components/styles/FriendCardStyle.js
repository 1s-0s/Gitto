import styled from "styled-components";
import { Segment, Image } from "semantic-ui-react";
import ModalCardBg from "../images/friendCard/friendCardBg2.svg";

export const Card = styled(Segment)`
  background-color:${(props) => props.theme.midcard} !important;
  -webkit-box-shadow:0 0 20px rgba(0,77,64,0.4);
  -moz-box-shadow:0 0 20px rgba(0,77,64,0.4);
  box-shadow:0 0 20px rgba(0,77,64,0.4);
`;
export const CardHeader = styled.h3`
  color:#EEE3E3 !important;
  margin-bottom: 0 !important;
`;
export const CardText = styled.div`
  color: #EEE3E3  !important;
`;

export const Icon = styled.a`
  margin-left:1vw;
  margin-right:1vw;
  font-size:2em;
  color: #EEE3E3;
  &:hover{
    color: #AAB8C2;
  }
`;
export const InfoIcon = styled.span`
  cursor: pointer;
  float:right;
  &:hover{
    color: #AAB8C2;
  }
`;
export const DelIcon = styled.span`
  cursor: pointer;
  float:right;
  &:hover{
    color: #AAB8C2;
  }
`;
export const IconGroup = styled.div`
  text-align:center;
`;
export const CancelButton = styled.p`
  font-size:2em;
  color: #AAB8C2;
  text-align:center;
  /* margin-bottom:1000000vh; */
  margin-top:10vh;
  &:hover{
    color: #CA0B00;
  }
`;
export const RepoCard = styled(Image)`
  align-items:center !important;
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
  padding:3vh;
  width: 50% ;
  height: 100% ;
  float: right ;
  border-collapse: collapse ;
`;
//Filler Image
export const FillerImageDiv = styled.div`
  text-align:center;
`;
export const FillerImage = styled(Image)`
  opacity:0.2 !important;
`;
export const FillerContent = styled.h1`
  color:rgba(126,202,156,0.5);
`;
