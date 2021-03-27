import React from "react";
// import { Link } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";
//styles
import { TopNav, Icon } from "../styles/NavbarStyle";
//icons
import { IconContext } from "react-icons";
import { CgDarkMode as Darkmode } from "react-icons/cg";
//logo
import logo from "../images/logo/cube3.svg"

class TopNavbar extends React.Component {
    state = {};
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    //? THEME TOGGLER
    themeToggler = () => {
        (this.props.theme.name === "light") ? this.props.handleChange("dark") : this.props.handleChange("light");
    }
    render() {
        const { activeItem } = this.state;
        return (
            <TopNav borderless fixed="top">
                <Menu.Item
                    name="logo"
                    active={activeItem === "logo"}
                    // fitted="vertically"
                    onClick={this.handleItemClick}
                >
                    <Icon to="#" onClick={() => this.props.toggleRightDiv("right")}>
                        <Image size="mini" src={logo} />
                    </Icon>
                </Menu.Item>

                <Menu.Item
                    name="Mode"
                    position="right"
                    // fitted="vertically"
                    active={activeItem === "Mode"}
                    onClick={this.handleItemClick}
                >
                    <Icon to="#" onClick={this.themeToggler}>
                        <IconContext.Provider
                            value={{ size: "2em" }}
                        >
                            <Darkmode />
                        </IconContext.Provider>
                    </Icon>
                </Menu.Item>
            </TopNav>
        );
    }
}
export default TopNavbar;