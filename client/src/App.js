import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import {connect} from "react-redux";
import {fetchUserAction} from "./action/index";
//Custome routes
import dashboard from "./components/routes/Dashboard";
import login from "./components/routes/Login";
import PrivateRoute from "./components/routes/privateRoute/PrivateRoute";
import Cookie from "js-cookie";

// import profile from "./components/routes/Profile";
// import friendList from "./components/elements/FriendList";

class App extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetch_user();
    }

    render() {
        // console.log("connect:", Cookie.get("connect.sid"));
        return (
            <Router>
                <Route exact path="/login" component={login} />
                <Switch>
                    {/* {console.log("cookie", Cookie.get("userid"))} */}
                    {/* <PrivateRoute authed={Cookie.get("userid")} path="/dashboard" component={dashboard} /> */}
                    <Route path="/" component={dashboard} />
                </Switch>
            </Router>
        )
    }
}
const mapDispatchToProps= (dispatch)=>{
    return{
        fetch_user:()=>{dispatch(fetchUserAction())}
    }
}
export default connect(null,mapDispatchToProps)(App);