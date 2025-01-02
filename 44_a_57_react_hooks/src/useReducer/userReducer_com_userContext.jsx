import PropTypes from  'prop-types';
import { createContext, useContext, useReducer, useRef } from "react";

export const globalState = {
    title: 'Título de contexto',
    body: 'Corpo de contexto',
};

export const reducer = (state, action) => {
    switch(action.type){
        case 'CHANGE':{
            return {...state, title: action.payload};
        }
        default: {
            return state
        }
    }
}

export const Context = createContext();

const H1 = () => {
    const { state, changeTitle } = useContext(Context);
    return (
        <h1 onClick={() => changeTitle(state.title)}>
            {state.title}
        </h1>
    )
}

export const Input = () => {
    const { changeTitle } = useContext(Context);
    const inputValue = useRef();

    return (
        <input onChange={() => changeTitle(inputValue.current.value)} type="text" ref={inputValue} />
    )
}

export const AppContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, globalState);

    const changeTitle = (title) => {
        title ? dispatch({ type: 'CHANGE', payload: title }): dispatch({ type: 'CHANGE', payload: 'Título de contexto' })
    }

    return (
        <Context.Provider value={{ state, changeTitle }}>
            {children}
        </Context.Provider>
    );
};

AppContext.propTypes = {
    children: PropTypes.node,
};

function App(){
    return (
        <AppContext>
            <H1 />
            <Input />
        </AppContext>
    );
};

export default App;
