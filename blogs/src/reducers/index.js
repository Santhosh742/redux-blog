import { combineReducers } from 'redux';
import Postreducers from './postreducer';

export default combineReducers({
    post: Postreducers
});