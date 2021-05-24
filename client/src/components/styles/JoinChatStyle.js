import { Input } from "semantic-ui-react";
import styled from "styled-components";

export const JoinOuterContainer=styled.div`
    @media (min-width: 320px) and (max-width: 480px) {
      height: 100%;
    }
    display: flex;
    justify-content: center;
    text-align: center;
    height: 100vh;
    align-items: center;
    background-color: ${(props) => props.theme.sidebar};
`;
export const JoinInnerContainer=styled.div`
    @media (min-width: 320px) and (max-width: 480px) {
      width: 90%;
    }
    width: 20vw;
`;
export const JoinInput=styled(Input)`
    
    /* text-decoration: hidden;
    border-radius: 5px;
    padding: 15px 20px; */
    width: 100%;
    margin-top: 20px;
`;
export const Heading=styled.h1`
    color: white;
    font-size: 2.5em;
    padding-bottom: 10px;
    border-bottom: 2px solid white;
`;
export const Button=styled.button`
    background-color: #35BDB2;
    &:hover{
        background-color: #009C95;
    }
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    padding: 2vh;
    border-radius: 5px;
    display: inline-block;
    border: none;
    width: 100%;
    margin-top: 20px;
`;
