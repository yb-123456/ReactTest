import React from "react";

import styles from '../css/orderList.css';

class OrderList extends React.Component{
    render(){
        return (<div className={styles.wrapper}>

            <header>
                <p>我的订单</p>
            </header>

            <h3>未支付订单信息：</h3>
            <ul className={styles.order}>
                <li>
                    <div className={styles.order_info}>
                        <p>
                            万家饺子（软件园E18店）
                            <i className="fa fa-caret-down"/>
                        </p>
                        <div className={styles.order_info_right}>
                            <p>&#165;49</p>
                            <div className={styles.order_info_right_icon} onClick={()=>window.location="/payment"}>去支付</div>
                        </div>
                    </div>
                    <ul className={styles.order_detailet}>
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
                </li>
                <li>
                    <div className={styles.order_info}>
                        <p>
                            小锅饭豆腐馆（全运店）
                            <i className="fa fa-caret-down"/>
                        </p>
                        <div className={styles.order_info_right}>
                            <p>&#165;55</p>
                            <div className={styles.order_info_right_icon}  onClick={()=>window.location="/payment"}>去支付</div>
                        </div>
                    </div>
                    <ul className={styles.order_detailet}>
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
                </li>
            </ul>

            <h3>已支付订单信息：</h3>
            <ul className={styles.order}>
                <li>
                    <div className={styles.order_info}>
                        <p>
                            万家饺子（软件园E18店）
                            <i className="fa fa-caret-down"/>
                        </p>
                        <div className={styles.order_info_right}>
                            <p>&#165;49</p>
                        </div>
                    </div>
                    <ul className={styles.order_detailet}>
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
                </li>
                <li>
                    <div className={styles.order_info}>
                        <p>
                            小锅饭豆腐馆（全运店）
                            <i className="fa fa-caret-down"/>
                        </p>
                        <div className={styles.order_info_right}>
                            <p>&#165;55</p>
                        </div>
                    </div>
                    <ul className={styles.order_detailet}>
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
                </li>
            </ul>

            <ul className={styles.footer}>
                <li >
                    <i className="fa fa-home"/>
                    <p>首页</p>
                </li>
                <li>
                    <i className="fa fa-compass"/>
                    <p>发现</p>
                </li>
                <li >
                    <i className="fa fa-file-text-o"/>
                    <p>订单</p>
                </li>
                <li>
                    <i className="fa fa-user-o"/>
                    <p>我的</p>
                </li>
            </ul>

        </div>);
    }
}

export default OrderList;
