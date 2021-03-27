import { SAVE_USER_DATA } from "../action/index";
import axios from "axios";

const updateUserData= (state = {}, action) => {
    switch (action.type) {
        case SAVE_USER_DATA:
            console.log("update user data from edit reducer:", action.payload.values);
            axios({
                url: "/userinfo/update",
                method: "POST",
                data: { userDesc: action.payload.values },
            })
                .then(() => {
                    console.log("edit data has been set to the server");
                })
                .catch((err) => {
                    console.log("error occured on the client side", err);
                });
                break;
        // state = action.payload.values
        //console.log("saving state with data : ", state);
        // return state;
        default:
            return state;
    }

}
export default updateUserData;