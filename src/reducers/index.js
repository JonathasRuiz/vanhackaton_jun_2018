import { combineReducers } from 'redux';
import postlist from './post_reducer';
import newslist from './news_reducer';
import todaymatches from './todays_match';
import teamlist from './teams';
import matchdetails from './matchdetails';
import teamdetails from './team_details';
import allmatches from './all_matches';

const RootReducer=combineReducers({
    postlist,
    newslist,
    todaymatches,
    teamlist,
    matchdetails,
    teamdetails,
    allmatches
})


export default RootReducer;
