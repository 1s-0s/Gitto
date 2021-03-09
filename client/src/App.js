import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//Custome routes
import dashboard from "./components/routes/Dashboard";
import login from "./components/routes/Login";
import profile from "./components/routes/Profile";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/dashboard" component={dashboard} />
                <Route exact path="/" component={login} />
                <Route exact path="/profile" component={profile} />
            </BrowserRouter>
        )
    }
}
export default App;