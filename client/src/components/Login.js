import React from "react";

class Login extends React.Component{
    render(){
        return(
            <div>
                <a className="ui github button" href="http://localhost:5000/auth/github/">
                    <i className="github icon"></i>
                    Github
                </a>
            </div>
        )
    }
}
export default Login;