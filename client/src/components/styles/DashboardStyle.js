import styled from "styled-components";

export const Div = styled.div`
    width:100vw !important;
    height: 100vh !important;
    /* background-size: cover;
    background-position: center; */
    background-color:black !important;
    
`;
export const LeftDiv = styled.div`
    @media (max-width: 991px) {
        display: none !important;
    }
    width: 25% !important;
    height: 100% !important;
    float: left !important;
    border-collapse:collapse !important;
    background-color:gray !important;
`;
export const MiddleDiv = styled.div`
    @media (max-width: 991px) {
        width: 100% !important;
    }
    width: 50% !important;
    height: 100% !important;
    float: left !important;
    border-collapse:collapse !important;
    background-color:pink !important;
`;
export const RightDiv = styled.div`
    @media (max-width: 991px) {
        display: none !important;
    }
    width: 25% !important;
    height: 100% !important;
    float: right !important;
    border-collapse:collapse !important;
    background-color:blue !important;
`;