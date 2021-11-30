import jsonplaceholder from '../apis/jsonPlaceholde';
import _ from "lodash";

    export const fetchPostanduser = () => async (dispatch, getState) => {
        await dispatch(fetchPost());

    //   const userIds = _.uniq(_.map(getState().posts, 'userId'));
    //   userIds.forEach(id => dispatch(UserDeatil(id))); 
    
//LODASH Chain method
        _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(UserDeatil(id)))
        .value();
    };

    export const fetchPost = () => async dispatch =>{
        const response =  await jsonplaceholder.get('/posts');
        dispatch({type: 'FETCHPOSTS', payload: response.data});
    };

    export const UserDeatil = id => async dispatch => {
        const response =  await jsonplaceholder.get(`/users/${id}`);
        dispatch({type: 'FETCHUSER', payload: response.data});
    };


    // export const UserDeatil = id => dispatch => _fetchUser(id, dispatch);
    // const _fetchUser = _.memoize(async(id, dispatch) =>{
    //     const response =  await jsonplaceholder.get(`/users/${id}`);
    //     dispatch({type: 'FETCHUSER', payload: response.data});
    // });


    