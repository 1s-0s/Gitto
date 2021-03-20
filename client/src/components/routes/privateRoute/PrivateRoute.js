import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Redirect } from "react-router-dom";
import Cookie from "js-cookie";
const PrivateRoute = ({ component: Component,authed ,...rest }) => {
    // const [isAuthenticated, setAuthenticated] = useState(false);

    // useEffect(() => {
    //     // axios.get('/auth/github/dashboard').then(({ data: { user } }) => {
    //         console.log("------------authenticating--------");
    //         if (authed) {
    //             console.log("----------------user exist------------------------");
    //             setAuthenticated(true);
    //             console.log("is athenticated : ",isAuthenticated);
    //         } else {
    //             console.log("hello else");
    //             window.location = '/';
    //         }
    //     // });
    // }, []);

    return (authed
        ? <Route {...rest} render={(props) => <Component {...props} />} />
        : <Redirect to="/" />
    );
}

export default PrivateRoute;