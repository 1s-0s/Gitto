import React, { Component, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import {connect } from "react-redux";
import { fetchUserAction } from "../../../action";

class PrivateRoute extends Route{
    constructor(props){
        super(props);
        this.props.fetch_user();
        this.state={
            isAuth:false
        }
    }
    render(){
        console.log(this.props.isUser)
        if(this.props.isUser.user ){
            return <Route {...this.props}/>
        }
        else{
            return <Redirect to="/login"/>
        }
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        fetch_user:()=>{dispatch(fetchUserAction())}
    }
}
const mapStateToProps=(state)=>{
    return{
        isUser:state.auth
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PrivateRoute);


// const PrivateRoute = ({ component: Component, fetch_user,isAuthenticated,...rest }) => {
//     const[isAuth,setAuth]=useState(true);
    
//     useEffect(()=>{
//         console.log("use effect running");
//         fetch_user();
//         setAuth(isAuthenticated);
//         console.log("from useeffect ",isAuth);
//     },[isAuthenticated])
//     return(
//         <Route 
//             {...rest}
//             render={props=>(
//                 true===true ? (<Component {...props}/>) : (<Redirect to="/login"/>)
//             )}
    
//         />
//     )
// }