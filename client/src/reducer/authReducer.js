import { ADD_USER } from "../action/authAction";

const initialState = {
    user: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER: {
            return {
                ...state,
                user: action.payload
            };
        }
        default: {
            return state;
        }
    }
}