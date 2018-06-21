import { combineReducers } from 'redux';
import postlist from './post_reducer';

const RootReducer=combineReducers({
    postlist
})


export default RootReducer;
