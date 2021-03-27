import {GET_USER } from "../action/index";
const isEmpty = require("is-empty");
const initialState={
    user:{},
    isAuthenticated:false,
    loading: true
}

const authReducer = (state=initialState,action) =>{
    //console.log("---from authreducer: ",action.payload);
    switch(action.type){
        case GET_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user:action.payload,
                loading: isEmpty(action.payload)
            }
        default:
            return state;    
    }
}
export default authReducer;