import styled from "styled-components";
import {Segment} from "semantic-ui-react";
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
    background-color:black !important;
`;
export const RightDiv = styled.div`
    @media (max-width: 991px) {
        display: none !important;
    }
    width: 25% !important;
    height: 100% !important;
    float: right !important;
    border-collapse:collapse !important;
    background-color:gray !important;
`;
export const CardSegment = styled(Segment)`
    margin-top: 10vh !important;
    margin-left: 2vh!important;
    margin-right: 2vh!important;
    /* background-color: #0D1117 !important; */

`;
export const CardDetails = styled.div`
    margin-left:1.5vh !important;
    margin-right:1.5vh !important;
`;
export const SubHeader = styled.p`
    margin:0 !important;
    margin-bottom: 1vh !important;
`;
export const CardHeader = styled.h2`
    margin-bottom:0 !important;
`;