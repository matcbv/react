import { counterTypes } from './types';

export const incrementCounter = (dispatch) => {
    dispatch({type: counterTypes.INCREMENT_COUTER, });
};

export const decrementCounter = (dispatch) => {
    dispatch({type: counterTypes.DECREMENT_COUNTER, });
};
