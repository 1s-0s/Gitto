import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [isAuthenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        axios.get('/auth/github/dashboard').then(({ data: { user } }) => {
            if (user) {
                setAuthenticated(true);
            } else {
                window.location = '/';
            }
        });
    }, []);

    return (isAuthenticated
        ? <Route {...rest} render={(props) => <Component {...props} />} />
        : <Redirect to="/" />
    );
}

export default PrivateRoute;