import { combineReducers } from "redux";
//Import Reducer
import userDescription from "./userDescription";
import { reducer as formReducer} from "redux-form";
//Export Reducer
export default combineReducers({
    form: formReducer,
    userDescription:userDescription,
    
});
