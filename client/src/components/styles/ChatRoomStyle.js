import styled from "styled-components";

export const Div = styled.div`
  @media (min-width: 991px) {
    margin: 6vh 10vh;
  }
  @media (max-width: 991px) {
    //top right bottom left
    margin: 10vh 2vh 2vh 2vh;
  }
  text-align: center;
`;
export const Header = styled.h3`
  margin: auto;
  color: rgba(126, 202, 156, 0.5);
`;
export const Image = styled.img`
  margin: auto;
  height: 40vh;
  opacity: 0.5;
`;
