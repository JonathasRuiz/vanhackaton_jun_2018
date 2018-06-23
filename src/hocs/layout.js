import React, { Component } from 'react';
import Header from '../components/header/header';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <div style={{background:'yellow'}}>This is Leyout Foter</div>
            </div>
        );
    }
}

export default Layout;