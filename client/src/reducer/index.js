import { combineReducers } from "redux";
//Import Reducer
import authReducer from "./authReducer";
//Export Reducer
export default combineReducers({
    authDetails: authReducer
});
