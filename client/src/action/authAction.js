export const ADD_USER = "CREATE_USER";
export const newUser = values => {
    return ({
        type: ADD_USER,
        payload: {
            values: values
        }
    });
}