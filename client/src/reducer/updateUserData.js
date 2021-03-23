import {SAVE_USER_DATA} from "../action/index";

export default (state = {}, action) => {
    switch (action.type) {
        case SAVE_USER_DATA:
            state = action.payload.values
            //console.log("saving state with data : ", state);
            return state;
        default:
            return state;
    }

}
