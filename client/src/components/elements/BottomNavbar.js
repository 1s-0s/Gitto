import React from "react";
// import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
//styles
import { Nav, IconLink } from "../styles/NavbarStyle";
// ICONS
import { IconContext } from "react-icons";
import { AiOutlineMessage as Chat, } from "react-icons/ai";
import { RiGroup2Line as Friends } from "react-icons/ri";
import { IoMdLogOut as Logout } from "react-icons/io";
import { CgProfile as ProfilePic } from "react-icons/cg";

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
          <IconLink to="#">
            <IconContext.Provider
              value={{ size: "1.5em" }}
            >
              <Chat />
            </IconContext.Provider>
          </IconLink>
        </Menu.Item>

        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={this.handleItemClick}
        >
          <IconLink to="/" onClick={() => this.props.toggleRightDiv("middle")}>
            <IconContext.Provider
              value={{ size: "1.5em" }}
            >
              <Friends />
            </IconContext.Provider>
          </IconLink>
        </Menu.Item>

        <Menu.Item
          name="profile"
          active={activeItem === "profile"}
          onClick={this.handleItemClick}
        >
          <IconLink to="/profile" onClick={() => this.props.toggleRightDiv("middle")}>
            <IconContext.Provider
              value={{ size: "1.5em" }}
            >
              <ProfilePic />
            </IconContext.Provider>
          </IconLink>
        </Menu.Item>

        <Menu.Item
          name="logout"
          active={activeItem === "logout"}
          onClick={this.handleItemClick}
        >
          <IconLink to="/login">
            <IconContext.Provider
              value={{ size: "1.5em" }}
            >
              <Logout />
            </IconContext.Provider>
          </IconLink>
        </Menu.Item>

      </Nav>
    );
  }
}
export default BottomNavbar;
