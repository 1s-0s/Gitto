import React from "react";
import Typewriter from "typewriter-effect";
import { Anchor, Div, Icon, Header, SubHeader } from "../styles/LoginStyle";
class Login extends React.Component {

    render() {
        return (
            <Div>
                <Header>
                    <Typewriter
                        options={{
                            strings: ["GIT-TO"],
                            autoStart: true,
                            loop: true
                        }}
                        onInit={
                            (typewriter) => {
                                typewriter
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .start();
                            }}
                    />
                </Header>
                <SubHeader>
                    GIT to find your pair-programmer
                </SubHeader>

                <Anchor className="ui github circular button massive" href="http://git-to.herokuapp.com/auth/github/">
                    <Icon className="github icon "></Icon>
                    Github
                </Anchor>
            </Div>
        )
    }

}
export default Login;