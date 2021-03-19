import styled from "styled-components";
import { Segment, Loader } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ModalCardBg from "../images/friendCard/friendCardBg2.svg";

export const Container = styled.div`
  margin: 5vh 2vh !important;
`;

export const ProfileCard = styled(Segment)`
  background-image:linear-gradient(rgba(0,77,64, 0.7),rgba(0,77,64, 0.7)),url(${ModalCardBg}) !important;
  background-size: cover !important;
  background-position: center !important;
  margin-top: 10vh !important;
  margin-left: 10vw !important;
  margin-right: 10vw !important;
  /* max-height: 70vh !important; */
  background-color:rgba(0,77,64,0.4)  !important;
  -webkit-box-shadow:0 0 20px rgba(0,77,64,0.4);
  -moz-box-shadow:0 0 20px rgba(0,77,64,0.4);
  box-shadow:0 0 20px rgba(0,77,64,0.4);  
`;
export const ImageContent = styled.h4`
  font-size: 1.5em !important;
  margin-top: 0.2em;
  margin-bottom:0.2em;
  text-align:center;
  color:#EEE3E3;
`;
export const ImageSubContent = styled.span`
  margin-top: 0em;
`;
export const ButtonLink = styled(Link)`
  /* display: inline-block; */
  margin-bottom: 4vh;
  margin-left:0.5em;
  font-size: 1em;
  color:#EEE3E3;
  text-decoration: none;
  &:hover{
    color:#87B588;
  }
`;

export const FormHeader = styled.h5`
  margin-bottom: 0.5em;
  color:#EEE3E3;
`;
export const FormHeadData = styled.p`
  margin-bottom: 0.5em;
  color:#EEE3E3;
`;
export const Section = styled(Segment)`
  text-align: center;
  margin-top: 0em;
`;
export const StatDesc = styled.p`
  color:#AAB8C2;
`;
export const StatNum = styled.p`
  color:#AAB8C2;
  font-size: 0.6em;
`;
export const Loading = styled(Loader)`
  margin-left: -20vw !important;
  color: #EEE3E3 !important;
`;