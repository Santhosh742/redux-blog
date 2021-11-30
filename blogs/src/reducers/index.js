import { combineReducers } from 'redux';
import { fetchPostanduser } from './postreducer';
import { Userreducers } from './userreducer';

export default combineReducers({
    posts: fetchPostanduser,
    user: Userreducers
});