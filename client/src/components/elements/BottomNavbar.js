import React from "react";
// import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
//styles
import { Nav, Icon } from "../styles/NavbarStyle";
// ICONS
import { AiOutlineMessage as Chat } from "react-icons/ai";
import { RiGroup2Line as Friends } from "react-icons/ri";
import { IoMdLogOut as Logout } from "react-icons/io";
import { CgProfile as Profile } from "react-icons/cg";
//React ICon styling
import { IconContext } from "react-icons";

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
          <Icon to="#">
            <IconContext.Provider
              value={{ className: "ico1", size: "2em" }}
            >
              <Chat />
            </IconContext.Provider >
            
          </Icon>
        </Menu.Item>

        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={this.handleItemClick}
        >
          <Icon to="/" onClick={() => this.props.toggleRightDiv("middle")}>
          <IconContext.Provider
              value={{ className: "ico2", size: "2em" }}
            >
              <Friends />
            </IconContext.Provider >
          </Icon>
        </Menu.Item>

        <Menu.Item
          name="profile"
          active={activeItem === "profile"}
          onClick={this.handleItemClick}
        >
          <Icon
            to="/profile"
            onClick={() => this.props.toggleRightDiv("middle")}
          >
           <IconContext.Provider
              value={{ className: "ico3", size: "2em" }}
            >
              <Profile />
            </IconContext.Provider >
          </Icon>
        </Menu.Item>

        <Menu.Item
          name="logout"
          active={activeItem === "logout"}
          onClick={this.handleItemClick}
        >
          <Icon to="/login">
          <IconContext.Provider
              value={{ className: "ico4", size: "2em" }}
            >
              <Logout />
            </IconContext.Provider >
          </Icon>
        </Menu.Item>
      </Nav>
    );
  }
}
export default BottomNavbar;
