import React from "react";

import styles from '../css/order.css';

class Order extends React.Component{
    render(){
        return (<div className={styles.wrapper}>
            <header>
                <p>确认订单</p>
            </header>

            <div className={styles.order_info}>
                <h5>订单配送至：</h5>
                <div className={styles.order_info_address}>
                    <p>沈阳市浑南区智慧四街1-121号</p>
                    <i className="fa fa-angle-right"></i>
                </div>
                <p>习近平先生 13656785432</p>
            </div>

            <h3>万家饺子（软件园E18店）</h3>

            <ul className={styles.order_detailed}>
                <li>
                    <div className={styles.order_detailed_left}>
                        <img src="../img/sp01.png" alt="碎觉"/>
                        <p>纯肉鲜肉（水饺） x 2</p>
                    </div>
                    <p>&#165;15</p>
                </li>
                <li>
                    <div className={styles.order_detailed_left}>
                        <img src="../img/sp02.png" alt="碎觉"/>
                        <p>玉米鲜肉（水饺） x 1</p>
                    </div>
                    <p>&#165;16</p>
                </li>
            </ul>
            <div className={styles.order_deliveryfee}>
                <p>配送费</p>
                <p>&#165;3</p>
            </div>

            <div className={styles.total}>
                <div className={styles.total_left}>
                    &#165;49
                </div>
                <div className={styles.total_right} onClick={()=>window.location='/payment/112'}>
                    去支付
                </div>


            </div>
        </div>);
    }
}

export default Order;
