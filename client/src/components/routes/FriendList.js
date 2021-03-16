import React from "react";

import { Container } from "../styles/FriendStyle";
import FriendCard from "../elements/FriendCard";

class FriendList extends React.Component {
  render() {
    return (
      <Container>
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
      </Container>
    );
  }
}

export default FriendList;
