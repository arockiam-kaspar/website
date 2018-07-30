import { combineReducers } from "redux";
import postReducer from "./postReducer";
import user from "./user";

export default combineReducers({
 posts: postReducer,
 user,
});