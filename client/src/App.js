import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import dashboard from "./components/Dashboard";
import login from "./components/Login";
const App=()=>{
    return (
        <BrowserRouter>
            <Route exact  path="/dashboard" component={dashboard}/>
            <Route exact path="/" component={login}/>
            {/* <Route exact="/profile" component={profile}/> */}        
        </BrowserRouter>        
    ) 
}
export default App;