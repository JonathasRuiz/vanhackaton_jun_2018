import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers';

import Routes from './routes';
import Layout from './hocs/layout';



const createStoreWithMiddleware=applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
     
            < BrowserRouter>
                <Layout>
                    <Routes />
                </Layout>
            </BrowserRouter >
        
    </Provider>
, document.getElementById('root'));
