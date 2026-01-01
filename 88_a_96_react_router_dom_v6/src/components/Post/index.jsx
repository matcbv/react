import { useParams, useSearchParams } from "react-router-dom";

export function Post(){
    const params = useParams();
    /*
        useSearchParams() é um wrapper responsável por lidar com query strings (search params). Ele realiza a leitura da query string atual da URL e a transforma em um objeto URLSearchParams, que oferece uma interface com métodos prontos como get(), set() e delete().

        Além disso, o hook retorna a função setSearchParams, que permite atualizar os parâmetros da URL de forma controlada, integrada ao React Router.
    */
    const [searchParams, ] = useSearchParams();

    return (
        <div>
            <h1>Post</h1>
            <h2>Param: {params.index}, QS: {searchParams.toString()}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi unde, eveniet dolorem maiores animi enim molestiae facilis distinctio. Id totam deserunt cupiditate velit, veritatis ipsum ex ratione dolorum sunt rem.</p>
        </div>
    );
};
