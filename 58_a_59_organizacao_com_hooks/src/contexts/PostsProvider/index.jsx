import { useReducer } from 'react';
import '../../index.css';
import { PostsContext } from './context'; 
import PropTypes from 'prop-types';
import { reducer } from './reducer';
import { data } from './data';

export const PostProvider = ({children}) => {
    const [postsState, postsDispatch] = useReducer(reducer, data);

    return (
        <PostsContext.Provider value={{postsState, postsDispatch}}>
            {children}
        </PostsContext.Provider>
    );
};

PostProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
