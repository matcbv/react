import { useContext } from "react";
import { GlobalContext } from '../../contexts/AppContext';

export const H1 = () => {
    // O hook useContext nos permite obter o estado atual de determinado contexto.
    const {contextState} = useContext(GlobalContext);
    return <h1>{contextState.title} {contextState.counter}</h1>
}
