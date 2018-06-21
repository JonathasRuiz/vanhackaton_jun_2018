import { BrowserRouter, Route, Link } from 'react-router-dom';
import React from 'react';

import App from './components/App/app';
import About from './components/about/about';

const Routes = () => {
    return (
        <div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
            <Route path="/" exact component={App}/>
            <Route path="/about" exact component={About}/>
        </div>
    );
};

export default Routes;