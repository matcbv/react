import './styles.css';
import { Component } from 'react';
import { Post } from '../../components/Post';
import { getPosts } from '../../utils/get_posts';
import { Button } from '../../components/Button';
import { SeachInput } from '../../components/SearchInput';

/*
  Um componente é um dos blocos fundamentais no React e representa uma parte reutilizável da interface de usuário (UI). Ele encapsula estrutura (HTML/JSX), lógica (JavaScript) e estilo (CSS) relacionados a uma funcionalidade ou seção específica da aplicação.

  Podemos criar um componente uma vez e reutilizá-lo várias vezes em diferentes partes da aplicação. Ao fazer isso, dividimos a aplicação em pequenas partes, facilitando a leitura, manutenção e teste. Cada componente é independente, tornando o sistema mais flexível e escalável.
*/
class Home extends Component{
    // Ao trabalharmos com o estado do nosso componente, podemos passá-lo adiante para os componentes filhos a ele através de props. Entretanto, não conseguimos utilizar o estado de um componente filho para um componente pai.
    state = {
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 3,
      searchValue: ''
    };
    // Obs.: Devemos escolher com cautela se nossos componentes necessitam ou não de um estado, dessa forma, evitamos que componentes desnecessários sejam renderizados novamente durante a mudança de estado.
    
    async componentDidMount(){
      await this.loadPosts();
    };

    loadPosts = async () => {
      const completePost = await getPosts();
      this.setState({ 
        posts: completePost.slice(0, 3),
        allPosts: completePost
      });
    };

    // Com a função loadSomePosts, iremos adicionar novos posts para serem exibidos.
    loadSomePosts = () => {
      const { page, postsPerPage, allPosts, posts } = this.state;
      // Somando o número atual de posts com a quantidade a ser adicionada:
      const nextPage = page + postsPerPage;
      // Obtendo os novos posts a serem exibidos:
      const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
      // Adicionando os novos post a lista com os demais:
      posts.push(...nextPosts);
      // Atualizando o estado do nosso componente:
      this.setState({ 
        posts,
        page: nextPage
       });
    };

    handleChange = (e) => {
      this.setState({ searchValue: e.target.value })
    }

    render(){
      const { posts, page, allPosts, searchValue } = this.state;
      // Checando se ainda existem posts a serem exibidos:
      const noMorePosts = page >= allPosts.length - 1;
      const filteredPosts = !!searchValue ? 
        allPosts.filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;

      return (
        <div className='container'>
          <div className='search-container'>
            {!!searchValue && (
              <>
                <h1 className='search-value'>Search value: { searchValue }</h1>
              </>
            )}
            <SeachInput handleChange={this.handleChange} />
          </div>
          <Post posts={filteredPosts}/>
          {!searchValue && (
            <div className='btn-container'>
              <Button 
                text='Load more posts'
                // Passando a propriedade de nome onClick para ser utilizada no evento onClick no input do comonente Button:
                onClick={ this.loadSomePosts }
                // Passando o booleano informado se ainda existem posts a serem exibidos.
                disabled={noMorePosts}
              />
            </div>
          )}
        </div>
      );
    };
  };

export default Home;
