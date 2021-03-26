import React from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem } from "semantic-ui-react";
//styles
import {Nav} from "../styles/NavbarStyle";
class BottomNavbar extends React.Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Nav fixed="bottom" fluid widths={4}>
        <Menu.Item
          name="chat"
          active={activeItem === "chat"}
          onClick={this.handleItemClick}
        >
            <Link to="#">Chat</Link>
        </Menu.Item>

        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={this.handleItemClick}
        >
          <Link to="/" onClick={()=>this.props.toggleRightDiv("middle")}>Friends</Link>
        </Menu.Item>

        <Menu.Item
          name="profile"
          active={activeItem === "profile"}
          onClick={this.handleItemClick}
        >
          <Link to="/profile" onClick={()=>this.props.toggleRightDiv("right")}>Profile</Link>
        </Menu.Item>

        <Menu.Item
          name="logout"
          active={activeItem === "logout"}
          onClick={this.handleItemClick}
        >
          <Link to="/login">Logout</Link>
        </Menu.Item>

      </Nav>
    );
  }
}
export default BottomNavbar;
