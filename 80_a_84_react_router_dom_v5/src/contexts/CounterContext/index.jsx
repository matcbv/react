import PropTypes from 'prop-types'
import { createContext, useReducer, useRef } from "react";
import { reducer } from './reducer';
import { buildActions } from './build_actions';

// Definindo um estado inicial para nosso contexto
export const initialState = {
    counter: 0,
    loading: false,
    // error: false - Há quem utilize também uma flag para possíveis erros.
};

export const Context = createContext();

// Criando nosso provider para encapsularmos nossos demais componentes:
export const CounterContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // Utilizaremos o hook useRef em nossa função buildAction para que sua referência seja mantida a cada renderização. 
    const actions = useRef(buildActions(dispatch));

    return (
        // Retornando nosso provider com os valores a serem resgatados pelo contexto: 
        <Context.Provider value={[state, actions.current]}>
            {children}
        </Context.Provider>
    );
};

CounterContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
