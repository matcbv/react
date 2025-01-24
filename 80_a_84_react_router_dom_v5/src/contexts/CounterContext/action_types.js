const prefix = 'CounterContext'

// Objeto contendo os tipos de cada ação:
const actionTypes = {
    INCREASE: `${prefix}/INCREASE`,
    ASYNC_INCREASE_START: `${prefix}/ASYNC_INCREASE_START`,
    ASYNC_INCREASE_END: `${prefix}/ASYNC_INCREASE_END`,
    ASYNC_INCREASE_ERROR: `${prefix}/ASYNC_INCREASE_ERROR`,
    DECREASE: `${prefix}/DECREASE`,
    RESET: `${prefix}/RESET`,
    SET: `${prefix}/SET`,
};

export default actionTypes;
