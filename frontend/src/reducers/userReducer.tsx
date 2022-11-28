import React from "react";
import { USER_TYPES } from "../actions/actionType";

const initialState = {
    success: false,
    user: {},
}

const userReducers = (state = initialState, action: any) => {

    switch (action.type) {
        case USER_TYPES.IS_LOGIN:
            return {
                ...state,
                user: action.payload,
                success: true
            };
        case USER_TYPES.IS_LOGOUT:
            return {
                ...state,
                success: false
            };
        default:
            return state;
    }
}

export default userReducers;