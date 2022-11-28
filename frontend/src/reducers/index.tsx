import cartReducers from "./cartReducer"
import userReducers from "./userReducer"
import adminReducer from './adminReducer'

export default {
    login: userReducers,
    cart: cartReducers,
    admin: adminReducer
}