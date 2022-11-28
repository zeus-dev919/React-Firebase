import { USER_TYPES } from "./actionType"

const userLogin = (data: any) => {
    const type = USER_TYPES.IS_LOGIN;
    return { type, payload: data };
}
const userLogout = () => {
    const type = USER_TYPES.IS_LOGOUT;
    return { type };
}

export default {
    userLogin,
    userLogout
}