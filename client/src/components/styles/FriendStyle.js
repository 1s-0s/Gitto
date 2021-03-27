import styled from "styled-components";
import { Image } from "semantic-ui-react";
// CARD SECTION
export const Container = styled.div`
  @media (min-width: 991px) {
    margin: 6vh 10vh ;
  }
  @media (max-width: 991px) {
    margin: 6vh 2vh ;
  }
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
export const FillerContent = styled.h3`
  color:rgba(126,202,156,0.5);
`;