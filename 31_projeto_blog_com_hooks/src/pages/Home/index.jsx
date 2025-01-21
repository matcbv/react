import './styles.css';
import { Component } from 'react';
import { Post } from '../../components/Post';
import { getPosts } from '../../utils/get_posts';
import { Button } from '../../components/Button';
import { SeachInput } from '../../components/SearchInput';
import { useState, useEffect, useCallback } from 'react';


// Componente com hooks:
const HomeHooks = () => {
  /* 
    Com o hook useState(), obtemos uma maneira de atualizar nossas propiedades. Ao utilizá-lo, nos é retornado dois valores, sendo o primeiro a nossa propriedade, e o segundo uma função responsável por atualizá-la.
    
    Como parâmetro para nosso hook, devemos passar o valor inicial que nossa propriedade irá conter.
  */ 
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

  // Com o hook useEffect(), iremos realizar a atualização de nosso componente quando necessário. Como parâmetros, iremos passar uma função de callback, e um array contendo suas dependências. Essas dependências, quando modificadas, irão chamar a função passada.
  useEffect(() => {
    loadPosts(0, postsPerPage);
  }, [loadPosts, postsPerPage]);

  const loadSomePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  };

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
};

export default HomeHooks;
