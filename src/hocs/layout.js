import React, { Component } from 'react';
import Header from '../components/header/header';
import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

class Layout extends Component {
    render() {

        const menu={campos:[
            {caption:"Teams",address:"/teams"},
            {caption:"Today Matches",address:"/today_matches"}
        ]};   


        return (
            <div>
                <Header />
                <NavBar {...menu} />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default Layout;