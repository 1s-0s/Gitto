import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
    return (authed
        ? <Route {...rest} render={(props) => <Component {...props} />} />
        : <Redirect to="/" />
    );
}

export default PrivateRoute;