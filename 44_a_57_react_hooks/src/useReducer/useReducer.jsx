import { useReducer } from "react";

// Estado inicial a ser utilizado em nosso reducer
const globalState = {
    title: 'Título de contexto',
    body: 'Corpo de contexto',
}

// Nossa função reducer será responsável por realizar diferentes ações em nosso estado de acordo com o tipo de ação recebido (type). É fundamental retornarmos nosso estado, sendo atualizado ou não, ao final de cada uma das ações. Dessa forma, o React consegue atualizar o estado retornado e re-renderizar os componentes dependentes desse estado.
const reducer = (state, action) => {
    switch (action.type){
        case 'change': {
            console.log('Título será alterado');
            return {...state, title: action.payload};
        }
        case 'reverse': {
            console.log('Título será invertido');
            return {...state, title: state.title.split('').reverse().join('')};
        }
        case 'restore': {
            console.log('Título será restaurado');
            return {...state, title: action.payload};
        }
        default: {
            console.log('Nenhuma ação realizada');
            return state;
        }
    }
}

function App(){
    // O hook useRefucer tem a função de atualizar o estado do nosso componente em situações mais complexas, onde utilizar o useSate não seria muito viável. Por parâmetro, iremos passar uma função reducer e o valor inicia a ser utilizado em nosso estado. Em retorno, obteremos nosso estado e uma função de dispatch.
    const [state, dispatch] = useReducer(reducer, globalState)

    return (
        <div>
            <h1>{state.title}</h1>
            <p>{state.body}</p>
            {/* Junto a função dispatch, iremos passar o tipo de ação a ser feita, chamado de type, por padrão. Além dele, podemos passar dados adicionais, comumente chamados de payload. */}
            <button onClick={() => dispatch({type: 'change', payload: 'Novo título' })}>Change</button>
            <button onClick={() => dispatch({type: 'reverse' })}>Reverse</button>
            <button onClick={() => dispatch({type: 'restore', payload: 'Título de contexto' })}>Restore</button>
        </div>
    )
}

export default App;
