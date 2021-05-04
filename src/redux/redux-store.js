import { combineReducers, createStore, applyMiddleware } from "redux";
import profileReduce from "./profile-reducer.js";
import messagesReduce from "./messages-reducer.js";
import usersReduce from "./users-reducer.js";
import authReduce from "./auth-reducer.js";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  pageProfile: profileReduce,
  pageMessages: messagesReduce,
  pageUsers: usersReduce,
  auth: authReduce
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;