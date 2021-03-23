import {GET_FRIENDS } from "../action/index";

export default (state={},action)=>{
    switch(action.type){
        case GET_FRIENDS:
           state = action.payload.value
           console.log("saving friends: ",state);
           return state;
        default:
            return state;    
    }
}