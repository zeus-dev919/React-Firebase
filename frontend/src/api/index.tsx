import axios from 'axios'
const BASE_URL = process.env.REACT_APP_API;
let API = axios.create({ baseURL: BASE_URL })

export { API };