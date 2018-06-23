import React, { Component } from 'react';
import MatchesWidget from './../../components/widgets/matches_widget/matches_widget';

import { bindActionCreators } from 'redux';
import { todayMatches } from '../../actions/index';
import { connect } from 'react-redux';



class TodayMatches extends Component {
    componentWillMount(){
        this.props.todayMatches();
    }
    render() {

        return (
            <div>
                <MatchesWidget {...this.props}/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        todaymatches:state.todaymatches.getTodayMatches
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        todayMatches
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps) (TodayMatches);