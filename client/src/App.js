import React from "react";
import {Link} from "react-router-dom";
class App extends React.Component{
    render(){
        return (
            <div>
                <Link className="ui github button" to="/auth/github">
                    <i className="github icon"></i>
                    Github
                </Link>
            </div>
        )
    }
}
export default App;