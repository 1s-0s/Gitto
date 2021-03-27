import styled from "styled-components";
import { Segment } from "semantic-ui-react";
import ModalCardBg from "../images/friendCard/friendCardBg2.svg";

export const Container = styled.div`
  
  @media (min-width: 991px) {
    margin: 5vh 2vh !important;
  }
  @media (max-width: 991px) {
    //top right bottom left
    margin: 10vh 2vh !important;
  }
`;

export const FormContainer = styled(Segment)`

  background-color:${(props) => props.theme.midcard} !important;
  -webkit-box-shadow:0 0 20px rgba(0,77,64,0.4);
  -moz-box-shadow:0 0 20px rgba(0,77,64,0.4);
  box-shadow:0 0 20px rgba(0,77,64,0.4);  
`;
export const ImageContent = styled.p`
  margin-top:2vh;
  font-size: 1.5em;
  text-align:center;
  color:#EEE3E3;
`;
export const FormHeader = styled.h5`
  margin-bottom: 0.5em;
  color:#EEE3E3;
`;
export const Header = styled.div`
  background-image:linear-gradient(rgba(0,77,64, 0.7),rgba(0,77,64, 0.7)),url(${ModalCardBg});
  background-size: cover;
  background-position: center;
  padding:1vh !important;
  height: 20vh !important;
  /* width:100%;
  height: 100% !important; */
`;
//FORM

