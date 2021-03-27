import styled from "styled-components";
import { Image, Loader } from "semantic-ui-react";
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
  /* background-color:rgba(0,77,64,0.4)  !important; */
  -webkit-box-shadow: 0 0 20px rgba(0, 77, 64, 0.4);
  -moz-box-shadow: 0 0 20px rgba(0, 77, 64, 0.4);
  box-shadow: 0 0 20px rgba(0, 77, 64, 0.4);
  background-color: ${(props) => props.theme.sidebar};
`;
export const MiddleDiv = styled.div`
  @media (min-width: 991px) {
    width: 50% ;
    float: left ;
    border-collapse: collapse;
  }
  @media (max-width: 991px) {
    display: ${(props)=>props.status.middleDisplay };
    width: ${(props)=>props.status.middleWidth };
  }
  height: 100% ;
  background-color: ${(props) => props.theme.midbg};
  overflow-y: scroll;
`;
// console.log("---theme props---",this.props);
export const RightDiv = styled.div`
  @media (min-width: 991px) {
    width: 45% ;
    float: right;
    border-collapse: collapse ;
  }
  @media (max-width: 991px) {
    display: ${(props)=>props.status.rightDisplay};
    width: ${(props)=>props.status.rightWidth};  
    padding-top:10vh;
    /* padding-bottom:10vh; */
    //margin-bottom:10vh;
    
  }
  height: 100%;
  background-color: ${(props) => props.theme.body} ;
  overflow-y: scroll ;
`;
// sidebar
export const Logo = styled(Image)`
  filter: drop-shadow(0 0 0.75rem ${(props) => props.theme.logoshadow});
  margin-top: 2vh;
  margin-left: auto;
  margin-right: auto;
`;
export const IconGroup = styled.div`
  text-align: center;
  margin-top: 5vh;
  margin-bottom: 2vh;
`;
export const Icon = styled(Link)`
  display: block;
  margin-top: 2vh;
  margin-bottom: 4vh;
  font-size: 2.5em;
  color: #eee3e3;
  text-decoration: none;
  &:hover {
    color: #aab8c2;
  }
`;

export const IconContent = styled.p`
  font-size: 0.3em !important;
`;
export const Loading = styled(Loader)`
  /* margin-left: -20vw !important; */
  /* color: #EEE3E3 !important; */
`;
export const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
`;
//Filler Image
export const FillerImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`;
//to fix overflow padding-bottom issue
export const PaddingBox=styled.div`
  @media (min-width: 991px) {
    display:none;
  }
  width:100%;
  height:10vh;
`;