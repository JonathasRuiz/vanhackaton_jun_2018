import React, { Component } from 'react';
import MatchesWidget from './../../components/widgets/matches_widget/matches_widget';

import { bindActionCreators } from 'redux';
import { allMatches } from '../../actions/index';
import { connect } from 'react-redux';
import styles from './styles.css';



class App extends Component {
    componentWillMount(){
        this.props.allMatches();
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <div className={styles.wrapper}>
                    <div className={styles.title_wrapper}>   
                        <span className={styles.app_today_matches}>All Matches</span>
                    </div>
                    <MatchesWidget {...this.props}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log(state);
    return{
        todaymatches:state.allmatches.allMatches
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        allMatches
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps) (App);