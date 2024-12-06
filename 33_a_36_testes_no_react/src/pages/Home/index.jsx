import './styles.css';
import { Component } from 'react';
import { Post } from '../../components/Post';
import { getPosts } from '../../utils/get_posts';
import { Button } from '../../components/Button';
import { SeachInput } from '../../components/SearchInput';
import { useState, useEffect, useCallback } from 'react';

const HomeHooks = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(3);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page >= allPosts.length - 1;
  const filteredPosts = !!searchValue ? 
    allPosts.filter((post) => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    })
  : posts;

  const loadPosts = useCallback(async (page, postsPerPage) => {
    const completePost = await getPosts();
    setPosts(completePost.slice(page, postsPerPage));
    setAllPosts(completePost)
  }, []);

  useEffect(() => {
    loadPosts(0, postsPerPage);
  }, [loadPosts, postsPerPage])

  const loadSomePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className='container'>
      <div className='search-container'>
        {!!searchValue && (
          <>
            <h1 className='search-value'>Search value: { searchValue }</h1>
          </>
        )}
        <SeachInput handleChange={handleChange} />
      </div>
      <Post posts={filteredPosts}/>
      {!searchValue && (
        <div className='btn-container'>
          <Button 
            text='Load more posts'
            onClick={ loadSomePosts }
            disabled={noMorePosts}
          />
        </div>
      )}
    </div>
  );
}

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

export default HomeHooks;
