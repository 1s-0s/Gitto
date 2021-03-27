import styled from "styled-components";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export const TopNav = styled(Menu)`
    @media (min-width: 991px) {
    display: none !important;
  }
  background-color: ${(props) => props.theme.navbg} !important;
`;
export const Nav = styled(Menu)`
  @media (min-width: 991px) {
    display: none !important;
  }
  background-color:${(props) => props.theme.navbg} !important;
  padding:0 !important;
`;
export const Icon = styled(Link)`
  color:${(props) => props.theme.navico};
  text-decoration: none;
`;