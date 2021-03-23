import { combineReducers } from "redux";
//Import Reducer
import updateUserData from "./updateUserData";
import authReducer from "./authReducer";
import friendsReducer from "./userFriendsReducer";
import { reducer as formReducer} from "redux-form";
import userFriendsReducer from "./userFriendsReducer";

//Export Reducer
export default combineReducers({
    form: formReducer,
    updateUserData:updateUserData,
    auth:authReducer,
    friendsReducer:friendsReducer
});
