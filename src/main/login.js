import React from "react";

import styles from '../css/login.css';

class OrderList extends React.Component{
    render(){
        return (<div className={styles.wrapper}>
			<!-- header部分 -->
			<header>
				<p>用户登陆</p>
			</header>
			
			<!-- 表单部分 -->
			<ul class="form_box">
				<li>
					<div class="title">
						手机号码：
					</div>
					<div class="content">
						<input type="text" placeholder="手机号码">
					</div>
				</li>
				<li>
					<div class="title">
						密码：
					</div>
					<div class="content">
						<input type="password" placeholder="密码">
					</div>
				</li>
			</ul>
			
			<div class="button_login">
				<button>登陆</button>
			</div>
			<div class="button_register">
				<button onclick="location.href='register.html'">去注册</button>
			</div>
			
			<!-- 底部菜单部分 -->
			<ul class="footer">
				<li onclick="location.href='index.html'">
					<i class="fa fa_home"></i>
					<p>首页</p>
				</li>
				<li>
					<i class="fa fa_compass"></i>
					<p>发现</p>
				</li>
				<li onclick="location.href='orderList.html'">
					<i class="fa fa_file_text_o"></i>
					<p>订单</p>
				</li>
				<li>
					<i class="fa fa_user_o"></i>
					<p>我的</p>
				</li>
			</ul>
		</div>);
    }
}

export default OrderList;
