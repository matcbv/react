import { Outlet } from "react-router-dom";

export function Posts(){
    return (
        <div>
            <h1>Posts</h1>
            {/*
                Outlet é um componente do React Router usado para renderizar componentes filhos dentro de uma rota aninhada.
                
                Dessa forma, se existem sub-rotas em nosso roteamento, Outlet define onde o conteúdo delas será renderizado.
            */}
            <Outlet />
        </div>
    );
};
