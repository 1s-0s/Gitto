import React  from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

//Custome routes
import dashboard from "./components/routes/Dashboard";
import login from "./components/routes/Login";
import PrivateRoute from "./components/routes/privateRoute/PrivateRoute";
import Cookie from "js-cookie";
// import profile from "./components/routes/Profile";
// import friendList from "./components/elements/FriendList";

class App extends React.Component {
    render() {
        
        return (
            <Router>
                <Route exact path="/" component={login} />
                <Switch>
                    <PrivateRoute authed={Cookie.get("userid")} path="/dashboard" component={dashboard} />
                </Switch>
            </Router>
        )
    }
}
export default App;