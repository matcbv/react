import './styles.css';
import { PostCard } from "../PostCard";

export const Post = ({ posts }) => {
    return (
        <div className="posts">
            {
              // Através do método map, será retornado um array contendo as tags JSX a serem exibidas.
              posts.map(post => 
                /*
                    Ao iterarmos sobre elementos em JSX, devemos informar uma chave única a cada um. Dessa forma, o React consegue identificar o elemento atualizado e atuar somente sobre ele, visando assim, a melhoria de desempenho.

                    Obs.: A chave deve ser informada no elemento root (div no caso abaixo) do nosso retorno.
            
                    Abaixo, estaremos utilizando nosso componente PostCard, passando através da propriedade post, o conteúdo de nosso post recebido na iteração. Poderíamos passá-lo através de duas maneiras: Como um único objeto único, ou cada um de seus valores individualmente. Ex.:

                    <PostCard
                      title={ post.title }
                      body={post.body}
                      id={ post.id }
                      url={ post.url }
                    />
                */
               <PostCard post={post} key={ post.title }/>
              )
            }
          </div>
    );
}
