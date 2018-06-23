import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNews } from '../../actions/index';

class News extends Component {

    componentWillMount(){
        this.props.getNews();
    }

    render() {
        console.log(this.props);
        return (
            <div>
                This is News component
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        news:state.newslist.getNewsList
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getNews
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps) (News);