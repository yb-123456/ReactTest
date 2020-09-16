import React from "react";

import styles from '../css/index.css';

class Index extends React.Component{
    render(){
        return (<div className={styles.wrapper}>
            <header>
                <div className={styles.icon_location_box}>
                    <div className="icon-location"/>
                </div>
                <div className={styles.location_text}>沈阳市规划大厦<i className="fa fa-caret-down"/></div>
            </header>

            <div className={styles.search}>
                <div className={styles.search_fixed_top} id="fixedBox">
                    <div className={styles.search_box}>
                        <i className="fa fa-search"/>搜索饿了么商家、商品名称
                    </div>
                </div>
            </div>

            <ul className={styles.foodtype}>
                <li>
                    <img src="../img/dcfl01.png" alt="美食"/>
                        <p>美食</p>
                </li>
                <li>
                    <img src="../img/dcfl02.png" alt="早餐"/>
                        <p>早餐</p>
                </li>
                <li >
                    <img src="../img/dcfl03.png" alt="代购"/>
                        <p>跑腿代购</p>
                </li>
                <li>
                    <img src="../img/dcfl04.png"/>
                        <p>汉堡披萨</p>
                </li>
                <li>
                    <img src="../img/dcfl05.png"/>
                        <p>甜品饮品</p>
                </li>
                <li >
                    <img src="../img/dcfl06.png"/>
                        <p>速食简餐</p>
                </li>
                <li>
                    <img src="../img/dcfl07.png"/>
                        <p>地方小吃</p>
                </li>
                <li>
                    <img src="../img/dcfl08.png"/>
                        <p>米粉面馆</p>
                </li>
                <li>
                    <img src="../img/dcfl09.png"/>
                        <p>包子粥铺</p>
                </li>
                <li>
                    <img src="../img/dcfl10.png"/>
                        <p>炸鸡炸串</p>
                </li>
            </ul>

            <div className={styles.banner}>
                <h3>品质套餐</h3>
                <p>搭配齐全吃得好</p>
                <a>立即抢购 &gt;</a>
            </div>

            <div className={styles.supermember}>
                <div className={styles.left}>
                    <img src="../img/super_member.png"/>
                        <h3>超级会员</h3>
                        <p>&#8226; 每月享超值权益</p>
                </div>
                <div className={styles.right}>
                    立即开通 &gt;
                </div>
            </div>

            <div className={styles.recommend}>
                <div className={styles.recommend_line}/>
                <p>推荐商家</p>
                <div className={styles.recommend_line}/>
            </div>

            <ul className={styles.recommendtype}>
                <li>综合排序<i className="fa fa-caret-down"/></li>
                <li>距离最近</li>
                <li>销量最高</li>
                <li>筛选<i className="fa fa-filter"/></li>
            </ul>

            <ul className={styles.business}>
                <li>
                    <img src="../img/sj01.png"/>
                        <div className={styles.business_info}>
                            <div className={styles.business_info_h}>
                                <h3>万家饺子（软件园E18店）</h3>
                                <div className={styles.business_info_like}>&#8226;</div>
                            </div>
                            <div className={styles.business_info_star}>
                                <div className={styles.business_info_star_left}>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <p>4.9 月售345单</p>
                                </div>
                                <div className={styles.business_info_star_right}>
                                    蜂鸟专送
                                </div>
                            </div>
                            <div className={styles.business_info_delivery}>
                                <p>&#165;15起送 | &#165;3配送</p>
                                <p>3.22km | 30分钟</p>
                            </div>
                            <div className={styles.business_info_explain}>
                                <div>各种饺子</div>
                            </div>
                            <div className={styles.business_info_promotion}>
                                <div className={styles.business_info_promotion_left}>
                                    <div className={styles.business_info_promotion_left_incon}>新</div>
                                    <p>饿了么新用户首单立减9元</p>
                                </div>
                                <div className={styles.business_info_promotion_right}>
                                    <p>2个活动</p>
                                    <i className="fa fa-caret-down"/>
                                </div>
                            </div>
                            <div className={styles.business_info_promotion}>
                                <div className={styles.business_info_promotion_left}>
                                    <div className={styles.business_info_promotion_left_incon}
                                         style={{"background-color": "#F1884F"}}>特
                                    </div>
                                    <p>特价商品5元起</p>
                                </div>
                            </div>
                        </div>
                </li>
                <li>
                    <img src="../img/sj02.png"/>
                        <div className={styles.business_info}>
                            <div className={styles.business_info_h}>
                                <h3>小锅饭豆腐馆（全运店）</h3>
                                <div className={styles.business_info_like}>&#8226;</div>
                            </div>
                            <div className={styles.business_info_star}>
                                <div className={styles.business_info_star_left}>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <p>4.9 月售345单</p>
                                </div>
                                <div className={styles.business_info_star_right}>
                                    蜂鸟专送
                                </div>
                            </div>
                            <div className={styles.business_info_delivery}>
                                <p>&#165;15起送 | &#165;3配送</p>
                                <p>3.22km | 30分钟</p>
                            </div>
                            <div className={styles.business_info_explain}>
                                <div>各种饺子</div>
                            </div>
                            <div className={styles.business_info_promotion}>
                                <div className={styles.business_info_promotion_left}>
                                    <div className={styles.business_info_promotion_left_incon}>新</div>
                                    <p>饿了么新用户首单立减9元</p>
                                </div>
                                <div className={styles.business_info_promotion_right}>
                                    <p>2个活动</p>
                                    <i className="fa fa-caret-down"/>
                                </div>
                            </div>
                            <div className={styles.business_info_promotion}>
                                <div className={styles.business_info_promotion_left}>
                                    <div className={styles.business_info_promotion_left_incon}>特</div>
                                    <p>特价商品5元起</p>
                                </div>
                            </div>
                        </div>
                </li>
                <li>
                    <img src="../img/sj03.png"/>
                        <div className={styles.business_info}>
                            <div className={styles.business_info_h}>
                                <h3>麦当劳麦乐送（全运路店）</h3>
                                <div className={styles.business_info_like}>&#8226;</div>
                            </div>
                            <div className={styles.business_info_star}>
                                <div className={styles.business_info_star_left}>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <p>4.9 月售345单</p>
                                </div>
                                <div className={styles.business_info_star_right}>
                                    蜂鸟专送
                                </div>
                            </div>
                            <div className={styles.business_info_delivery}>
                                <p>&#165;15起送 | &#165;3配送</p>
                                <p>3.22km | 30分钟</p>
                            </div>
                            <div className={styles.business_info_explain}>
                                <div>各种饺子</div>
                            </div>
                            <div className={styles.business_info_promotion}>
                                <div className={styles.business_info_promotion_left}>
                                    <div className={styles.business_info_promotion_left_incon}>新</div>
                                    <p>饿了么新用户首单立减9元</p>
                                </div>
                                <div className={styles.business_info_promotion_right}>
                                    <p>2个活动</p>
                                    <i className="fa fa-caret-down"/>
                                </div>
                            </div>
                            <div className={styles.business_info_promotion}>
                                <div className={styles.business_info_promotion_left}>
                                    <div className={styles.business_info_promotion_left_incon}>特</div>
                                    <p>特价商品5元起</p>
                                </div>
                            </div>
                        </div>
                </li>
                <li>
                    <img src="../img/sj04.png"/>
                        <div className={styles.business_info}>
                            <div className={styles.business_info_h}>
                                <h3>米村拌饭（浑南店）</h3>
                                <div className={styles.business_info_like}>&#8226;</div>
                            </div>
                            <div className={styles.business_info_star}>
                                <div className={styles.business_info_star_left}>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <p>4.9 月售345单</p>
                                </div>
                                <div className={styles.business_info_star_right}>
                                    蜂鸟专送
                                </div>
                            </div>
                            <div className={styles.business_info_delivery}>
                                <p>&#165;15起送 | &#165;3配送</p>
                                <p>3.22km | 30分钟</p>
                            </div>
                            <div className={styles.business_info_explain}>
                                <div>各种饺子</div>
                            </div>
                            <div className={styles.business_info_promotion}>
                                <div className={styles.business_info_promotion_left}>
                                    <div className={styles.business_info_promotion_left_incon}>新</div>
                                    <p>饿了么新用户首单立减9元</p>
                                </div>
                                <div className={styles.business_info_promotion_right}>
                                    <p>2个活动</p>
                                    <i className="fa fa-caret-down"/>
                                </div>
                            </div>
                            <div className={styles.business_info_promotion}>
                                <div className={styles.business_info_promotion_left}>
                                    <div className={styles.business_info_promotion_left_incon}>特</div>
                                    <p>特价商品5元起</p>
                                </div>
                            </div>
                        </div>
                </li>
                <li>
                    <img src="../img/sj05.png"/>
                        <div className={styles.business_info}>
                            <div className={styles.business_info_h}>
                                <h3>申记串道（中海康城店）</h3>
                                <div className={styles.business_info_like}>&#8226;</div>
                            </div>
                            <div className={styles.business_info_star}>
                                <div className={styles.business_info_star_left}>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <p>4.9 月售345单</p>
                                </div>
                                <div className={styles.business_info_star_right}>
                                    蜂鸟专送
                                </div>
                            </div>
                            <div className={styles.business_info_delivery}>
                                <p>&#165;15起送 | &#165;3配送</p>
                                <p>3.22km | 30分钟</p>
                            </div>
                            <div className={styles.business_info_explain}>
                                <div>各种饺子</div>
                            </div>
                            <div className={styles.business_info_promotion}>
                                <div className={styles.business_info_promotion_left}>
                                    <div className={styles.business_info_promotion_left_incon}>新</div>
                                    <p>饿了么新用户首单立减9元</p>
                                </div>
                                <div className={styles.business_info_promotion_right}>
                                    <p>2个活动</p>
                                    <i className="fa fa-caret-down"/>
                                </div>
                            </div>
                            <div className={styles.business_info_promotion}>
                                <div className={styles.business_info_promotion_left}>
                                    <div className={styles.business_info_promotion_left_incon}>特</div>
                                    <p>特价商品5元起</p>
                                </div>
                            </div>
                        </div>
                </li>
            </ul>

            <ul className={styles.footer}>
                <li onClick={()=>window.location='/index'}>
                    <i className="fa fa-home"/>
                    <p>首页</p>
                </li>
                <li>
                    <i className="fa fa-compass"/>
                    <p>发现</p>
                </li>
                <li onClick={()=>window.location='/orderlist'}>
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

export default Index;
