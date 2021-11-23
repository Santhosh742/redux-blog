import jsonplaceholder from '../apis/jsonPlaceholde';

export const fetchPost = () => async dispatch =>{
        const response =  await jsonplaceholder.get('/posts');
        dispatch({type: 'FETCHPOSTS', payload: response});
    };