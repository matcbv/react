import { Link } from "react-router-dom";

export default function Menu(){
    return (
        <div>
            {/* A diferença entre utilizarmos o componente Link e a tag <a>, se da no fato de que a tag <a> realiza o full reload da página. Já o componente Link, trabalha em conjunto com o BrowserRouter no conceito de SPA, evitando renderizações desnecessárias. */}
            <Link to='/'>Home</Link>
            <Link to='/secPage'>Secundary Page</Link>
            <a href="/secPage">Secundary Page (a)</a>
        </div>
    );
};
