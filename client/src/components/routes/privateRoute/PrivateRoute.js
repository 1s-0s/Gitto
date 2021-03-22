import React, { Component, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import {connect } from "react-redux";
import { fetchUserAction } from "../../../action";

class PrivateRoute extends Route{
    constructor(props){
        super(props);
        this.props.fetch_user();
    }
    render(){
        console.log(this.props.isValidUser);
        if(this.props.isValidUser.user ){
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
        isValidUser:state.auth
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PrivateRoute);