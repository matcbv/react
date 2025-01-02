import { types } from './types'
import { PostsContext } from './context';
import { useContext } from 'react';

export const loadPosts = async () => {
    const [postsDispatch] = useContext(PostsContext);

    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
    postsDispatch({type: types.POST_SUCCESS, payload: posts});
}
