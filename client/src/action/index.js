export const USER_DESCRIPTION = "add-user-description";
export const SAVE_USER_DATA = "SAVE_USER_DATA";
export const userDescription = (values) => {
    return ({
        type: USER_DESCRIPTION,
        payload : {
            values:values
        }
    })
}
export const saveUserData = values => {
    console.log("action for save user data",values);
    return ({
        type: SAVE_USER_DATA,
        payload: {
            values: values
        }
    });
}