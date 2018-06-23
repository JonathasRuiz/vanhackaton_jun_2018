import React, { Component } from 'react';
import MatchesWidget from './../../components/widgets/matches_widget/matches_widget';
import { Link } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { getTeams } from '../../actions/index';
import { connect } from 'react-redux';

import styles from './styles.css';


class Teams extends Component {
    componentWillMount(){
        this.props.getTeams();
    }

    handleTeams=()=>{
        return(
            this.props.teams ?
            this.props.teams.map((item,i)=>{
                return(
                    <div key={i} className={styles.wrapper}>
                        <div className={styles.card_wrapper}>
                            <div className={styles.img_name_wrapper}>
                                <img className={styles.team_flag} src="./img/logo.png" alt="Alt image"/>
                                <div className={styles.team_name}>{item.country} - [{item.fifa_code}]</div>
                                <Link to={`/teams/results/${item.fifa_code}`}><div className={styles.details}><span>See Details...</span></div></Link>
                            </div>
                        </div>
                    </div>
                )
            }):null

        )
    }

    render() {
        console.log(this.props);
        return (
            <div>
                {this.handleTeams()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        teams:state.teamlist.teamList
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getTeams
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps) (Teams);