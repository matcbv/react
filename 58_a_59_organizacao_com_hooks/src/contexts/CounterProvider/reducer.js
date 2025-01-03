import { counterTypes } from "./types";

export const counterReducer = (state, action) => {
    switch(action.type){
        case counterTypes.INCREMENT_COUTER: {
            return {...state, counter: state.counter + 1};
        }
        case counterTypes.DECREMENT_COUNTER: {
            return {...state, counter: state.counter - 1};
        }
        default: {
            return state;
        }
    };
};
