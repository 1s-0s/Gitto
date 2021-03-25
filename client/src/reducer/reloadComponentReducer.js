import {RELOAD_COMPONENT } from "../action/index";

export default (state=0,action) =>{
    console.log("---from reloadcomponent: ",action.payload);
    switch(action.type){
        case RELOAD_COMPONENT:
            //console.log("here: ",action.payload.values)
            state=!state;
            return state;
        default:
            return state;    
    }
}