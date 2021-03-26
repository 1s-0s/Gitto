import styled from "styled-components";
import { Menu } from "semantic-ui-react";

export const Nav = styled(Menu)`
    @media (min-width: 991px) {
    display: none !important;
  }
`;