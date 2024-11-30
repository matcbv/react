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
    state = {
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 3,
      searchValue: ''
    };

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

    loadSomePosts = () => {
      const { page, postsPerPage, allPosts, posts } = this.state;
      const nextPage = page + postsPerPage;
      const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
      posts.push(...nextPosts);
      this.setState({ 
        posts,
        page: nextPage
       });
    };

    handleChange = (e) => {
      console.log(e)
      this.setState({ searchValue: e.target.value })
    }

    render(){
      const { posts, page, allPosts, searchValue } = this.state;
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
                onClick={ this.loadSomePosts }
                disabled={noMorePosts}
              />
            </div>
          )}
        </div>
      );
    };
  };

export default Home;
