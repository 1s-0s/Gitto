import styled from "styled-components";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
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
  background-color:rgba(0,77,64,0.4)  !important;
  -webkit-box-shadow:0 0 20px rgba(0,77,64,0.4);
  -moz-box-shadow:0 0 20px rgba(0,77,64,0.4);
  box-shadow:0 0 20px rgba(0,77,64,0.4);
  /* overflow-y: scroll !important; */
`;
export const MiddleDiv = styled.div`
  @media (max-width: 991px) {
    width: 100% !important;
  }
  width: 50% !important;
  height: 100% !important;
  float: left !important;
  border-collapse: collapse !important;
  background-color: rgba(0,77,64,0.5) ; // #02231C
  /* background-image:linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.1)) !important; */
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
  background-color: #EEE3E3 !important;
  overflow-y: scroll !important;
`;
// sidebar
export const Logo = styled(Image)`
  margin-top: 2vh;
  margin-left:auto;
  margin-right:auto;
`;
export const IconGroup = styled.div`
  text-align:center;
  margin-top: 5vh;
  margin-bottom: 2vh;
`;
export const Icon = styled(Link)`
  display: block;
  margin-top: 2vh;
  margin-bottom: 4vh;
  font-size: 2.5em;
  color:#EEE3E3;
  text-decoration: none;
`;
