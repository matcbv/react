import { createContext, useState } from "react";
import { globalState } from "./data";

// Criando um componente de contexto para ser utilizado pelos nossos componentes. Poderíamos também passar nosso estado global por parâmetro para createContext, porém, iremos passá-lo através do compomente criado GlobalContext.
export const GlobalContext = createContext();

export const AppContext = ({ children }) => {
    const [contextState, setContextState] = useState(globalState);
    
    return (
        // Passando nosso estado e a função para modificá-lo através de um objeto com a prop value:
        <GlobalContext.Provider value={{contextState, setContextState}}>
            {children}
        </GlobalContext.Provider>
    )
};
