import {USER_DESCRIPTION} from "../action/index";

export default (state=[],action) => {
    switch(action.type){
        case USER_DESCRIPTION : 
            console.log("user description reducer working");
            return state;
        default : 
            return state;
    }
}
