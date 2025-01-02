import { types } from "./types"

export const reducer = (state, action) => {
    switch(action.type){
        case types.POST_SUCCESS: {
            return {...state, posts: action.payload}; 
        }
        default: {
            return state;
        }
    };
};
