import { combineReducers } from 'redux';
import postlist from './post_reducer';
import newslist from './news_reducer';

const RootReducer=combineReducers({
    postlist,
    newslist
})


export default RootReducer;
