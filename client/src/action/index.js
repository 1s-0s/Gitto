export const USER_DESCRIPTION = "add-user-description";

export const userDescription = (values) => {
    return ({
        type: USER_DESCRIPTION,
        payload : {
            values:values
        }
    })
}