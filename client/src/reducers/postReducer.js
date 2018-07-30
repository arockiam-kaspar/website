import { FETCH_POSTS } from "../actions/types";


export default function(state = {}, action={}){
    switch(action.type){
        case FETCH_POSTS:
         return {...state, ...action.posts}
        default:
         return {...state}; 
    }
}