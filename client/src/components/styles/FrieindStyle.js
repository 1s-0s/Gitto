import styled from "styled-components";
import { Segment } from "semantic-ui-react";

// CARD SECTION
export const Container = styled.div`
    margin: 10vh 10vh !important;
    /* margin-bottom: 5vh !important; */
`;
export const Card = styled(Segment)`
  background-color:rgba(0,77,64,0.4)  !important;
  -webkit-box-shadow:0 0 20px rgba(0,77,64,0.4);
  -moz-box-shadow:0 0 20px rgba(0,77,64,0.4);
  box-shadow:0 0 20px rgba(0,77,64,0.4);
  /* border-color: #EEE3E3 !important; */
  
`;
export const CardHeader = styled.h3`
  color:#EEE3E3 !important;
  margin-bottom: 0em !important;
`;
export const CardText = styled.div`
  color: #EEE3E3  !important;
`;