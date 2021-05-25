import styled from "styled-components";
import loginbg from "../images/worldmap.svg";
export const Anchor = styled.a`
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    width: 8em !important;
    background-color: white !important;
    color: #06090F !important;
    
`;
export const Icon = styled.i`
    font-size: 30px  !important;
    color: #06090F !important;

`;
export const Header = styled.div`
    padding-top: 25vh;
    font-size: 4em;
    text-align: center;
    color: white;
`;
export const SubHeader = styled.p`
    padding-top: 5vh;
    font-size: 1.5em;
    text-align: center;
    color: white;
`;
export const Div = styled.div`
    /* background-image:linear-gradient(rgba(6, 8, 10, 0.5),rgba(10, 10,40, 0.5)),url(${loginbg}); */
    background: rgb(34,193,195);
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(54,42,18,1) 100%);
    background-size: cover;
    background-position: center;
    height: 100vh;

`;
