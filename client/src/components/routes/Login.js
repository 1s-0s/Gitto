import React from "react";
import {Anchor,Div,Icon} from "../styles/LoginStyle";
class Login extends React.Component {

    render() {
        return (
            <Div>
                <Anchor className="ui github button massive" href="http://localhost:5000/auth/github/">
                    <Icon className="github icon "></Icon>
                    Github
                </Anchor>
            </Div>
        )
    }

}
export default Login;