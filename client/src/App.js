import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUserAction } from "./action/index";
//Custome routes
import dashboard from "./components/routes/Dashboard";
import login from "./components/routes/Login";
import PrivateRoute from "./components/routes/privateRoute/PrivateRoute";

class App extends React.Component {
    // constructor(props) {
    //     super(props);

    // }
    componentDidMount() {
        this.props.fetch_user();
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={login} />
                    <PrivateRoute fetchUser={this.props.fetch_user} path="/" component={dashboard} />
                </Switch>
            </Router>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetch_user: () => { dispatch(fetchUserAction()) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);