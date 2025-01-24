import actionTypes from "./action_types";

export const buildActions = (dispatch) => {
    // Iremos retornar um objeto contendo cada uma das funções
    return {
        increase: () => dispatch({type: actionTypes.INCREASE}),
        decrease: () => dispatch({type: actionTypes.DECREASE}),
        reset: () => dispatch({type: actionTypes.RESET}),
        set: (payload) => dispatch({type: actionTypes.SET, payload}),
        asyncIncrease: () => asyncIncreaseFunc(dispatch),
        asyncError: () => asyncErrorFunc(dispatch),
    };
};

const asyncIncreaseFunc = async (dispatch) => {
    dispatch({type: actionTypes.ASYNC_INCREASE_START});
    return await new Promise(res => {
        setTimeout(() => {
            dispatch({type: actionTypes.ASYNC_INCREASE_END});
            res('RESOLVED');
        }, 2000)
    });
};

const asyncErrorFunc = async (dispatch) => {
    dispatch({type: actionTypes.ASYNC_INCREASE_START});
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            dispatch({type: actionTypes.ASYNC_INCREASE_ERROR});
            reject(new Error('ERRO DURANTE A REQUISIÇÃO'));
        }, 2000)
    });
};
