import { useContext } from 'react';
import { Post } from '../Post';
import { PostsContext } from '../../contexts/PostsProvider/context';

export const Posts = () => {
    const { postsState } = useContext(PostsContext);
    postsState.posts.map(post => <Post data={post}></Post>);
};
