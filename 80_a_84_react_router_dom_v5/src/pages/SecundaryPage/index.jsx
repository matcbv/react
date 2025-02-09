import { useParams, useLocation, useHistory } from "react-router-dom";

export default function SecundaryPage(){
    // Com a função useParams(), conseguimos acessar os valores dos parâmetros passados em nossa URL através de um objeto:
    const params = useParams();
    /*
        Com a função useLocation(), podemos obter informações sobre a URL atual, como:

        - pathname: O caminho (path) da URL atual.
        - search: A query string (partes após o ? na URL).
        - hash: O fragmento (hash), que é a parte após o # na URL.
        - state: O estado passado para a navegação (geralmente usado quando você usa navegação programática ou redirecionamentos).
    */
    const location = useLocation();
    /*
        Com useHistory(), temos acesso à API do histórico de navegação do navegador, onde podemos manipular a rota atual através de métodos como: push, replace, go, goBack e goForward.

        Obs.: No React Router v6, useHistory acabou sendo substituido por useNavigate(), que possui uma API mais simples e prática.
    */
    const history = useHistory();

    return (
        <div>
            <h1>Secundary Page</h1>
        </div>
    );
};
