import { FETCH_POSTS } from "./types";
import axios from "axios";

export const fetchPosts = () => dispatch => (
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(posts => dispatch({
        type:FETCH_POSTS,
        posts
    }))
);