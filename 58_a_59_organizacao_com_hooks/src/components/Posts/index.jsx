import { useContext, useEffect, useRef } from 'react';
import { Post } from '../Post';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { CounterContext } from '../../contexts/CounterProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/action';
import { incrementCounter, decrementCounter } from '../../contexts/CounterProvider/action';

export const Posts = () => {
    const isMounted = useRef(true);
    const { postsState, postsDispatch } = useContext(PostsContext);
    const { counterState, counterDispatch } = useContext(CounterContext);

    useEffect(() => {
        loadPosts(postsDispatch).then(dispatch => {
            // Checando se nosso componente está montado antes de chamar nosso dispatch:
            if(isMounted){
                dispatch();
            }
        });
        // Informando que o componente foi desmontado para evitar que deixe resíduos em nossa aplicação
        return () => isMounted.current = false;
    }, [postsDispatch]);

    return (
        <div>
            {postsState.loading && <h2>Loading posts...</h2>}
            <button type="button" onClick={() => {incrementCounter(counterDispatch)}}>{counterState.counter}+</button>
            <button type="button" onClick={() => {decrementCounter(counterDispatch)}}>{counterState.counter}-</button>
            {postsState.posts.map(post => 
                <Post key={post.id} data={post} />
            )}
        </div>

    );
};
