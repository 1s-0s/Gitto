import axios from "axios";

export const SAVE_USER_DATA = "SAVE_USER_DATA";
export const GET_USER="GET_USER";
export const GET_FRIENDS="GET_FRIENDS";
//? CORRECT
export const saveUserData = values => {
    //console.log("action for save user data",values);
    return ({
        type: SAVE_USER_DATA,
        payload: {
            values: values
        }
    });
}

//? CORRECT
export const fetchUserAction = ()=>{
    return (dispatch)=>{
        axios({
            url: "/userinfo/current_user",
            method:"GET"
            
        })
        .then((response)=>{
            dispatch({
                type:GET_USER,
                payload:response.data
        
            })
        })
    }
}
//? CORRECT
export const fetchFriendsAction = ()=>{
    return (dispatch)=>{
        axios({
            url:"/userinfo/friends",
            method:"GET"
        })
        .then((response)=>{
            dispatch({
                type:GET_FRIENDS,
                payload:response.data
            })
        })
    }
}