import {GET_FRIENDS } from "../action/index";

const friendsReducer = (state=[],action)=>{
    switch(action.type){
        case GET_FRIENDS:
           state = action.payload
           console.log("saving friends: ",state);
           return state;
        default:
            return state;    
    }
}
export default friendsReducer;