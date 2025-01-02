import PropTypes from 'prop-types';
import React, { useEffect, useState, useMemo, useRef } from 'react';
import '../styles.css';

const Post = ({post, handleClick}) => {
    return (
        <div className='post'>
            <h1 onClick={() => handleClick(post.title)} >{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        body: PropTypes.string
    }),
    handleClick: PropTypes.func,
};

function App(){
    const [posts, setPosts] = useState([]);
    const [value, setValue] = useState('');
    // O hook useRef retorna um objeto mutável que possui a propriedade current. Essa, pode ser usada para armazenar valores ou referências a elementos DOM. Junto do useRef, devemos passar um valor inicial a ser armazenado em current.
    const input = useRef(null);
    const counter = useRef(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(res => setPosts(res));
    }, []);

    // Quando o estado value for alterado, iremos aplicar o foco no input armazenda na propriedade current.
    useEffect(() => {
        input.current.focus()
    }, [value]);

    useEffect(() => {
        counter.current++
    });

    const handleClick = (title) => { setValue(title) };

    return (
        <div className="App">
            <h2>Contador de renderização: {counter.current} </h2>
            {/* Com a prop ref, conseguimos passar nosso elemento como referência para a variável input criada. */}
            <input type="search" ref={input} value={value} onChange={(e) => setValue(e.target.value)} />
            <div>
                {useMemo(() => {
                    return (
                        posts.length > 0 && posts.map(post => <Post key={post.id} post={post} handleClick={handleClick} />)
                    );
                }, [posts])}
                {posts.length <= 0 && <p>Carregando posts...</p>}
            </div>
        </div>
    )
}

export default App;
