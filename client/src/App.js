import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

//Custome routes
import dashboard from "./components/routes/Dashboard";
import login from "./components/routes/Login";
import profile from "./components/routes/Profile";
import friendList from "./components/elements/FriendList";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={login} />
                <Switch>
                    <Route exact path="/dashboard" component={dashboard} />
                    <Route exact path="/profile" component={profile} />
                    <Route exact path="/friendlist" component={friendList} />
                </Switch>
            </Router>
        )
    }
}
export default App;