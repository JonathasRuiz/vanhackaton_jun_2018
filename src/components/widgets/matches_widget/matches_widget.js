import React, { Component } from 'react';
import styles  from './styles.css';

class MatchesWidget extends Component {

    handleTodaysMatch=()=>{
        return(
            this.props.todaymatches ?
    
            this.props.todaymatches.map((item,i)=>{
                   return(
                    <div key={i} className={styles.wrapper}>
                    <div className={styles.card_wrapper}>
                        <div style={{display:'inlineBlock',width:'100%'}}>Stadium: {item.location}</div>
                        <div style={{display:'inlineBlock',width:'100%'}}>Status: {item.status}</div>
                        <div style={{display:'inlineBlock',width:'100%',color:'#d5d5d5',fontSize:'10px' }}> {item.datetime}</div>
                        <div className={styles.team_wrapper}>
                            
                                <img className={styles.team_flag} src="./img/logo.png" alt="test image"/>
                                <div className={styles.country}>{item.away_team.country}</div>
                            
                            <span className={styles.goals}>{item.away_team.goals}</span>
                        </div> X 
                        <div className={styles.team_wrapper}>
                            <span className={styles.goals}>{item.home_team.goals}</span>
                            
                                <img className={styles.team_flag} src="./img/logo.png" alt="test image"/>
                                <div className={styles.country}>{item.home_team.country}</div>
                            
                        </div>

                    </div>

                    </div>
                   ) 
            })
            :
            null
        )
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <div>
                    {this.handleTodaysMatch()}
                </div>
            </div>
        );
    }
}



export default MatchesWidget;