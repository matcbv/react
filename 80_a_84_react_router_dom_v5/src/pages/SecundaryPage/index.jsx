import { useParams, useLocation, useHistory } from "react-router-dom";

export default function SecundaryPage(){
    // Com a função useParams(), conseguimos acessar os valores dos parâmetros de rota passados em nossa URL através de um objeto:
    const params = useParams();
    /*
        Com a função useLocation(), podemos obter informações sobre a URL atual através de propriedades, como:

        - pathname: O caminho (path) da URL atual.
        - search: A query string (partes após o ? na URL).
        - hash: O fragmento (hash), que é a parte após o # na URL.
        - state: O estado passado para a navegação (geralmente usado quando você usa navegação programática ou redirecionamentos).
    */
    const location = useLocation();
    /*
        O hook useHistory() fornece acesso à API de histórico de navegação do navegador, permitindo manipular a rota atual por meio de métodos como push, replace, go, goBack e goForward.

        Esses métodos são wrappers sobre a Web API nativa (window.history), mas com integração ao React Router.

        Obs.: No React Router v6, o useHistory() foi substituído pelo hook useNavigate(), que oferece uma API mais simples e prática para navegação imperativa.
    */
    const history = useHistory();
    
    return (
        <div>
            <h1>Secundary Page</h1>
        </div>
    );
};
