import { useContext } from "react";
import { Context } from "../contexts/CounterContext";

// Criando nossa função para utilizar o contexto para nosso Counter:
export default function useCounterContext() {
    const context = useContext(Context);
    // Iremos retornar os valores obtidos do contexto:
    return [...context];
};
