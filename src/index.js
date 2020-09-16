import './index.css';
import * as serviceWorker from './serviceWorker';
import './framework/reset.css';
import './framework/font-awesome/css/font-awesome.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Order from  './main/order'
import Payment from './main/payment'
import OrderList from './main/orderlist'
// import './js/payment'

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/order" component={Order}/>
            <Route path="/payment/:name" component={Payment}/>
            <Route path="/orderlist" component={OrderList}/>
        </div>
    </Router>
    , document.getElementById('root'))




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
