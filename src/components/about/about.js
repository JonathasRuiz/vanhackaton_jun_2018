import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getPostList } from '../../actions';
import { bindActionCreators } from 'redux'; 

class About extends Component {
    state={
        postlist:[]
    }

    componentWillMount(){
        this.props.getPostList();
    }

    handlePosts=(data)=>{
        console.log(data)
        return(
            data ? 
            data.map((item,i)=>{
                return(
                    <div key={i} style={{width:'900px',margin:'0 auto'}}>
                        <h3>{item.title}</h3>
                        <span>{item.body}</span>
                    </div>
                )
            })
            :null
        )
    }

    render() {
        console.log(this.props);
        return (
            <div>
                {this.handlePosts(this.props.postlist)}
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log(state);
    return{
        postlist:state.postlist.getPostList
    }
}
;
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getPostList
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(About);