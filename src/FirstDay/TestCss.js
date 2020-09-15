import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import '../framework/font-awesome/css/font-awesome.min.css';
import '../framework/reset.css';
import '../css/order.css';

function Get() {
    return (<div className="wrapper">
        <header>
            <p>确认订单</p>
        </header>

        <div className="order-info">
            <h5>订单配送至：</h5>
            <div className="order-info-address">
                <p>沈阳市浑南区智慧四街1-121号</p>
                <i className="fa fa-angle-right"></i>
            </div>
            <p>习近平先生 13656785432</p>
        </div>

        <h3>万家饺子（软件园E18店）</h3>

        <ul className="order-detailed">
            <li>
                <div className="order-detailed-left">
                    <img src="../img/sp01.png"/>
                    <p>纯肉鲜肉（水饺） x 2</p>
                </div>
                <p>&#165;15</p>
            </li>
            <li>
                <div className="order-detailed-left">
                    <img src="../img/sp02.png"/>
                    <p>玉米鲜肉（水饺） x 1</p>
                </div>
                <p>&#165;16</p>
            </li>
        </ul>
        <div className="order-deliveryfee">
            <p>配送费</p>
            <p>&#165;3</p>
        </div>

        <div className="total">
            <div className="total-left">
                &#165;49
            </div>
            <div className="total-right" onClick={To}>
                去支付
            </div>


        </div>
    </div>);
}
let To = () => {
    window.location = "/pay"
}
function Pay() {
    return (
        <div className="wrapper">

            <header>
                <p>在线支付</p>
            </header>

            <h3>订单信息：</h3>
            <div className="order-info">
                <p>
                    万家饺子（软件园E18店）
                    <i className="fa fa-caret-down" id="showBtn"></i>
                </p>
                <p>&#165;49</p>
            </div>

            <ul className="order-detailet" id="detailetBox">
                <li>
                    <p>纯肉鲜肉（水饺） x 2</p>
                    <p>&#165;15</p>
                </li>
                <li>
                    <p>玉米鲜肉（水饺） x 1</p>
                    <p>&#165;16</p>
                </li>
                <li>
                    <p>配送费</p>
                    <p>&#165;3</p>
                </li>
            </ul>

            <ul className="payment-type">
                <li>
                    <img src="../img/alipay.png" alt="支付"/>
                        <i className="fa fa-check-circle"></i>
                </li>
                <li>
                    <img src="../img/wechat.png" alt="支付"/>
                </li>
            </ul>
            <div className="payment-button">
                <button>确认支付</button>
            </div>

            <ul className="footer">
                <li >
                    <i className="fa fa-home"></i>
                    <p>首页</p>
                </li>
                <li>
                    <i className="fa fa-compass"></i>
                    <p>发现</p>
                </li>
                <li>
                    <i className="fa fa-file-text-o"></i>
                    <p>订单</p>
                </li>
                <li>
                    <i className="fa fa-user-o"></i>
                    <p>我的</p>
                </li>
            </ul>
        </div>
    );
}
ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Get}/>
            <Route path="/pay" component={Pay}/>
        </div>
    </Router>
, document.getElementById('root'))

