const functions = require("firebase-functions");
const app = require("express")();
const auth = require("./util/auth");
const cors = require('cors');
// const dotenv = require('dotenv');
// dotenv.config();

app.use(cors());

const {
  getAllTodos,
  postOneTodo,
  deleteTodo,
  editTodo,
} = require("./APIs/todos");


const {
  loginUser,
  signUpUser,
  getUserDetail,
  googleLogin,
} = require("./APIs/users");
const { getAllSliders } = require("./APIs/slider");
const { getType } = require("./APIs/menutype");
const { getMenu, getMenuByID} = require("./APIs/menu");
const { getOrder } = require('./APIs/order')
//Todos
app.get("/todos", getAllTodos);
app.post("/todo", postOneTodo);
app.delete("/todo/:todoId", deleteTodo);
app.put("/todo/:todoId", editTodo);

//Users
app.post("/login", loginUser);
app.post("/signup", signUpUser);
app.get("/user", auth, getUserDetail);
app.get("/google-login", googleLogin);
//top-slider
app.get("/top-slider", getAllSliders);

//menu-type
app.get("/menu-type", getType);

//webOrder
app.get("/weborder" , getOrder);

//
app.get("/menus/:categoryId", getMenuByID);

exports.api = functions.https.onRequest(app);
