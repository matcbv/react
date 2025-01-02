import { useContext } from "react";
import { GlobalContext } from "../../contexts/AppContext";

export const P = () => {
    const {contextState, setContextState} = useContext(GlobalContext);
    // Adicionando uma função para incrementar o contador ao clicar em nosso parágrafo:
    return <p onClick={() => {
        setContextState({...contextState, counter: contextState.counter + 1})
    }}
    >{contextState.body}</p>
}
