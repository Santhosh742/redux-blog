import { combineReducers } from 'redux';
import { Postreducers } from './postreducer';
import { Userreducers } from './userreducer';

export default combineReducers({
    posts: Postreducers,
    user: Userreducers
});