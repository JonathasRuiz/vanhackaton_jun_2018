import { BrowserRouter, Route, Link } from 'react-router-dom';
import React from 'react';

import App from './components/App/app';
import Teams from './containers/teams/teams';
import TodayMatches from './containers/today_matches/today_matches';
import MatchDetails from './containers/today_matches/match_details/match_details';
import TeamDetails from './containers/teams/teamdetails/teamdetails';

const Routes = () => {
    return (
        <div>
            <div style={{height:'1px'}}></div>
            <Route path="/match/:id" exact component={MatchDetails}/>
            <Route path="/teams/results/:id" exact component={TeamDetails}/>
            <Route path="/" exact component={App}/>
            <Route path="/teams" exact component={Teams}/>
            <Route path="/today_matches"  component={TodayMatches}/>

        </div>
    );
};

export default Routes;