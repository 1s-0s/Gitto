import { ADD_USER } from "../action/authAction";
import Cookies from 'js-cookie';
import axios from "axios";
const initialState = {
    user: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER: {
            const userid = Cookies.get("userid");
            axios({
                url: "/userinfo/:" + userid,
                method: "GET",
                data: action.payload.values
            })
                .then((response) => {
                    console.log("Data has been sent to client", response.data);
                })
                .catch((err) => {
                    console.log("Error in user reducer", err);
                })
            return state;
        }
        default: {
            return state;
        }
    }
}