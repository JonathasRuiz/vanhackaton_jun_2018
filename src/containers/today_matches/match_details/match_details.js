import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { getMatchDetails } from '../../../actions/index';
import { connect } from 'react-redux';



class MatchDetails extends Component {
    componentWillMount(){
        //console.log(this.props.match.params.id);
        this.props.getMatchDetails(this.props.match.params.id);
    }
    render() {

        return (
            <div>
                {/* <MatchesWidget {...this.props}/> */}
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log(state);
    return{
        matchdetails:state
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getMatchDetails
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps) (MatchDetails);