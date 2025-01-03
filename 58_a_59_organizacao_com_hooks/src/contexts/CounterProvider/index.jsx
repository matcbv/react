import { useReducer } from "react";
import { CounterContext } from "./context"
import PropTypes from 'prop-types';
import { counterReducer } from './reducer';
import { counterData } from './data';

export const CounterProvider = ({children}) => {
    const [counterState, counterDispatch] = useReducer(counterReducer, counterData);

    return (
        <CounterContext.Provider value={{counterState, counterDispatch}}>
            {children}
        </CounterContext.Provider>
    );
};

CounterProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
