import styled from "styled-components";
import {Image} from "semantic-ui-react";
// CARD SECTION
export const Container = styled.div`
    margin: 6vh 10vh !important;
`;
//Filler Image
export const FillerImageDiv = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  text-align:center;
 
`;
export const FillerImage = styled(Image)`
  opacity:0.2 !important;
`;
export const FillerContent = styled.h1`
  color:rgba(126,202,156,0.5);
`;