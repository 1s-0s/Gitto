import styled from "styled-components";
import { Segment } from "semantic-ui-react";

export const Container = styled.div`
    margin: 5vh 2vh !important;
`;

export const FormContainer = styled(Segment)`
  background-color:rgba(0,77,64,0.4)  !important;
  -webkit-box-shadow:0 0 20px rgba(0,77,64,0.4);
  -moz-box-shadow:0 0 20px rgba(0,77,64,0.4);
  box-shadow:0 0 20px rgba(0,77,64,0.4);  
`;
export const ImageContent = styled.p`
  font-size: 2em !important;
  text-align:center;
  color:#EEE3E3;
`;