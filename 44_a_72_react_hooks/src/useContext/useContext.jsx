import React, { useContext, useState } from 'react';
import '../styles.css';

const globalState = {
    title: 'Título global',
    body: 'Corpo global',
    counter: 0
}
// Criando um componente de contexto para ser utilizado pelos nossos componentes. Poderíamos também passar nosso estado global por parâmetro para createContext, porém, iremos passá-lo através do compomente criado GlobalContext.
const GlobalContext = React.createContext();

function Div(){
    return (
        <>
            <H1 />
            <P />
        </>
    )
}

const H1 = () => {
    // O hook useContext nos permite obter o estado atual de determinado contexto.
    const {contextState} = useContext(GlobalContext);
    return <h1>{contextState.title}</h1>
}

const P = () => {
    const {contextState, setContextState} = useContext(GlobalContext);
    // Adicionando uma função para incrementar o contador ao clicar em nosso parágrafo:
    return <p onClick={() => {
        setContextState({...contextState, counter: contextState.counter + 1})
    }}
    >{contextState.body}</p>
}

function App(){
    const [contextState, setContextState] = useState(globalState);

    return (
        // Passando nosso estado e a função para modificá-lo através de um objeto com a prop value:
        <GlobalContext.Provider value={{contextState, setContextState}}>
            <Div />
        </GlobalContext.Provider>
    )
}

export default App;
