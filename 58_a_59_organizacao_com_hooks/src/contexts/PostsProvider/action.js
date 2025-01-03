import { types } from './types'

export const loadPosts = async (postsDispatch) => {
    postsDispatch({type: types.POST_LOADING});
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
    // Retornando uma array function que será executada somente caso nosso componente esteja montado:
    return () => postsDispatch({type: types.POST_SUCCESS, payload: posts});
}
