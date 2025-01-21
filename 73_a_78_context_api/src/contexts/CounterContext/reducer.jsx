import {initialState} from '.';
import actionTypes from './action_types';

export const reducer = (state, action) => {
    // Iremos realizar diferentes mudanças em nosso estado de acordo com cada ação passado para nosso reducer (dispatch).
    switch(action.type){
        case actionTypes.INCREASE: return {...state, counter: state.counter + 1 };
        case actionTypes.DECREASE: return {...state, counter: state.counter - 1 };
        case actionTypes.RESET: return {...initialState };
        case actionTypes.SET: return {...state, counter: action.payload };
        case actionTypes.ASYNC_INCREASE_START: return {...state, loading: true };
        case actionTypes.ASYNC_INCREASE_END: return {...state, loading: false, counter: state.counter + 1 };
        case actionTypes.ASYNC_INCREASE_ERROR: return {...state, loading: false };
        default: return state;
    };
};
