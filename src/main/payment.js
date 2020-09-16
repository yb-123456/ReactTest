import React from "react";

import styles from '../css/payment.css' ;
function zhifu(){
    let url = "http://139.9.87.17:8080/test/json";
    // fetch方式
    fetch(url)
    // 返回response
        .then((response)=> {return response.json()})
        // 获取数据
        .then((data)=> {
            alert("支付");
        })
        // 捕获异常
        .catch((e)=> {})
}


class Payment extends React.Component{
    constructor(props){
        super(props);
        if(this.props.match.params.name==null ){
            alert("订单id异常");
        }
        this.state={
            orderId: this.props.match.params.name,
            storeName: "",
            totalPrice: 0,
            goodsNames: [],
            goodsPrice: []
        }
    }
    componentDidMount(){
        let url = "http://139.9.87.17:8080/test/json";
        // fetch方式
        fetch(url)
        // 返回response
            .then((response)=> {return response.json()})
            // 获取数据
            .then((data)=> {
            })
            // 捕获异常
            .catch((e)=> {})
    }
    render(){
        return (<div className={styles.wrapper}>

            <header>
                <p>在线支付</p>
            </header>

            <h3>订单信息：</h3>
            <div className={styles.order_info}>
                <p>
                    万家饺子（软件园E18店）
                    <i className="fa fa-caret-down" id="showBtn"/>
                </p>
                <p>&#165;49</p>
            </div>

            <ul className={styles.order_detailet} id="detailetBox">
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

            <ul className={styles.payment_type}>
                <li>
                    <img src="../img/alipay.png" alt="支付宝支付"/>
                        <i className="fa fa-check-circle"/>
                </li>
                <li>
                    <img src="../img/wechat.png" alt="微信支付"/>
                </li>
            </ul>
            <div className={styles.payment_button} onClick={zhifu}>
                <button>确认支付</button>
            </div>

            <ul className={styles.footer}>
                <li >
                    <i className="fa fa-home"/>
                    <p>首页</p>
                </li>
                <li>
                    <i className="fa fa-compass"/>
                    <p>发现</p>
                </li>
                <li onClick={()=>window.location = "/orderlist"}>
                    <i className="fa fa-file-text-o"/>
                    <p>订单</p>
                </li>
                <li>
                    <i className="fa fa-user-o"/>
                    <p>我的</p>
                </li>
            </ul>
        </div>
    );
    }
}

export default Payment;
