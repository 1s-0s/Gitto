import { combineReducers } from "redux";
//Import Reducer
import updateUserData from "./updateUserData";
import authReducer from "./authReducer";
import friendsReducer from "./friendsReducer";
import reloadComponentReducer from "./reloadComponentReducer"
import { reducer as formReducer } from "redux-form";


//Export Reducer
export default combineReducers({
    form: formReducer,
    updateUserData: updateUserData,
    auth: authReducer,
    friendsReducer: friendsReducer,
    reloadComponent:reloadComponentReducer
});
