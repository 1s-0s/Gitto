import { USER_DESCRIPTION } from "../action/index";
import axios from "axios";
//to fetch data from cookie
import Cookies from 'js-cookie';


export default (state = [], action) => {
    switch (action.type) {
        case USER_DESCRIPTION:
            const userid = Cookies.get("userid");
            console.log("from axios: ", userid);
            axios({
                url: "/userinfo/" + userid + "/update",
                method: "POST",
                data: action.payload.values
            })
                .then(() => {
                    console.log("successfully updated data");
                })
                .catch((err) => {
                    console.log("error while updating user data ", err);
                })
            // console.log("reducers: ",action.payload.values);
            return state;
        default:
            return state;
    }
}
