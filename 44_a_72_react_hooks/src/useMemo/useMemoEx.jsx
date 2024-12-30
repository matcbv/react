import PropTypes from 'prop-types';
import React, { useEffect, useState, useMemo } from 'react';
import '../styles.css';

const Post = ({post}) => {
    console.log('Filho renderizou');
    return (
        <div className='post'>
            <h1>{post.title}</h1>
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
};

function App(){
    console.log('Pai renderizou');

    const [posts, setPosts] = useState([]);
    const [value, setValue] = useState('');

    // O hook useEffect não pode ser assíncrono. Caso seja necessário o uso de assincronismo, devemos criar um outra função como assíncrona dentro de useEffect, chamando-a logo em seguida.
    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res => setPosts(res));
        }, 5000)
    }, []);

    return (
        <div className="App">
            <input type="search" value={value} onChange={(e) => setValue(e.target.value)} />
            <div>
                {useMemo(() => {
                    return (
                        posts.length > 0 && posts.map(post => <Post key={post.id} post={post} />)
                    );
                }, [posts])}
                {posts.length <= 0 && <p>Carregando posts...</p>}
            </div>
        </div>
    )
}

export default App;
