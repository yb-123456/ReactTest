import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import '../framework/font-awesome/css/font-awesome.min.css';
import '../framework/reset.css';
import '../css/order.css';

import Order from  '../main/order'
import Payment from '../main/payment'
ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/order" component={Order}/>
            <Route path="/payment" component={Payment}/>
        </div>
    </Router>
, document.getElementById('root'))

