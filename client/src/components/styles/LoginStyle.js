import styled from "styled-components";
import loginbg from "../images/login.gif";
export const Anchor = styled.a`
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    width: 10em !important;
    background-color: white !important;
    color: #06090F !important;
    
`;
export const Icon=styled.i`
    font-size: 30px  !important;
    color: #06090F !important;

`;
export const Div = styled.div`
    background-image:linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${loginbg});
    background-size: cover;
    background-position: center;
    height: 100vh;
`;
