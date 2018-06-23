import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { getTeamDetails } from '../../../actions/index';
import { connect } from 'react-redux';

import styles from './../styles.css';



class TeamDetails extends Component {
    componentWillMount(){
        this.props.getTeamDetails(this.props.match.params.id);
    }

    handleTeamDetails=()=>{
        let team=this.props.teamdetails;
        return(
             team ?
             <div className={styles.wrapper}>
                   <div className={styles.img_name_wrapper_center}>
                                <img className={styles.team_flag} src="./../../img/logo.png" alt="Alt image"/>
                                <div className={styles.team_name}>{team[0].country} - [{team[0].fifa_code}]</div>
                            </div>
                <div className={styles.table_wrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                            <th>Points</th>
                            <th>Games</th>
                            <th>W</th>
                            <th>L</th>
                            <th>D</th>
                            <th>GP</th>
                            <th>GA</th>
                            <th>Dif</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>{team[0].points}</td>
                            <td>{team[0].games_played}</td>
                            <td>{team[0].wins}</td>
                            <td>{team[0].losses}</td>
                            <td>{team[0].draws}</td>
                            <td>{team[0].goals_for}</td>
                            <td>{team[0].goals_against}</td>
                            <td>{team[0].goal_differential}</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
             </div>
            
            :
            null
        )
    }

    render() {

        return (
            <div>
                {this.handleTeamDetails()}
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log(state);
    return{
        teamdetails:state.teamdetails.teamDetails
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getTeamDetails
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps) (TeamDetails);