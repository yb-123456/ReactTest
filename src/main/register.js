import React from "react";

import styles from '../css/register.css';

class OrderList extends React.Component{
    render(){
        return (<div className={styles.wrapper}>
			<header>
				<p>用户注册</p>
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
				<li>
					<div class="title">
						确认密码：
					</div>
					<div class="content">
						<input type="password" placeholder="确认密码">
					</div>
				</li>
				<li>
					<div class="title">
						用户姓名：
					</div>
					<div class="content">
						<input type="text" placeholder="用户姓名">
					</div>
				</li>
				<li>
					<div class="title">
						性别：
					</div>
					<div class="content" style="font-size: 3vw;">
						<input type="radio" name="sex" checked style="width:6vw;height: 3.2vw;">男
						<input type="radio" name="sex" style="width:6vw;height: 3.2vw;">女
					</div>
				</li>
			</ul>
			
			<div class="button_login">
				<button onclick="location.href='login.html'">注册</button>
			</div>
			
			<!-- 底部菜单部分 -->
			<ul class="footer">
				<li onclick="location.href='index.html'">
					<i class="fa fa-home"></i>
					<p>首页</p>
				</li>
				<li>
					<i class="fa fa-compass"></i>
					<p>发现</p>
				</li>
				<li onclick="location.href='orderList.html'">
					<i class="fa fa-file-text-o"></i>
					<p>订单</p>
				</li>
				<li>
					<i class="fa fa-user-o"></i>
					<p>我的</p>
				</li>
			</ul>
		</div>);
    }
}

export default register;
