import React from 'react';
import ReactDOM from 'react-dom';
//这就是一个组件了
// function tick(){
//     ReactDOM.render(
//         <ActionLink/>,
//         document.getElementById('root')
//     )
// }
// //第二个组件
// function Name(pros){
//     return <h1>{pros.name}</h1>
// }
// //第三个组件
// function Age(pros){
//     return <h1>{pros.age}</h1>
// }

//父组件

// function ActionLink() {
//     function handleClick(e) {
//         e.preventDefault();
//         alert("点击")
//     }
//
//     return (
//         <a href="#" onClick={handleClick}>
//             点我
//         </a>
//     );
// }

// class CountNumber extends React.Component {
//     //在 JavaScript class 中，每次你定义其子类的构造函数时，都需要调用 super 方法。
//     // 因此，在所有含有构造函数的的 React 组件中，构造函数必须以 super(props) 开头。
//     constructor(props) {
//         super(props);
//         //在这里初始化 state
//         this.state = {
//             numberCount: 0
//         };
//     }
//     //外部调用此方法更新 numberCount 的值
//     //例如在 浏览器中调用 root.update()
//     update(){
//         this.setState({numberCount:this.state.numberCount+=2})
//     }
//     // onClick 事件监听函数中调用 this.setState
//     // 以在每次 <button> 被点击的时候通知 React 去重新渲染 当前CountNumber 组件
//     // 组件更新之后 value 的值也改随之改变
//     // 每次在组件中调用 setState 时，React 都会自动更新其子组件。
//     render() {
//         return (
//             <button className="square" onClick={() => this.setState({numberCount: ++this.state.numberCount})}>
//                 点击button {this.state.numberCount}
//             </button>
//         );
//     }
//
// }

// class Text extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             text:"秦杰"
//         };
//     }
//     render() {
//         return (<button onClick={()=>this.setState({text:"hello"})}>{this.state.text}
//         </button>)
//     }
// }

// setInterval(tick,1000)

// function Alla(){
//     return <div>
//         <Text/>
//         <CountNumber/>
//         <App/>
//     </div>
// }



// class App extends React.Component{
//     constructor(props){
//         super(props);
//         // 定义数据的初始状态
//         this.state = {
//             account: null,
//             password: null
//         }
//     }
//     // 发送ajax请求
//     componentDidMount(){
//         let url = "http://139.9.87.17:8080/test/json";
//         // fetch方式
//         fetch(url)
//         // 返回response
//             .then((response)=> {return response.json()})
//             // 获取数据
//             .then((data)=> {
//                 this.setState({
//                     account: data.datas.account,
//                     password: data.datas.password
//                 })
//             })
//             // 捕获异常
//             .catch((e)=> {})
//     }
//     render(){
//             return(
//                 <div>
//                     <h1>账户：{this.state.account}</h1>
//                     <h1>密码：{this.state.password}</h1>
//                 </div>
//             )
//     }
// }
// ReactDOM.render(
//     document.getElementById('root')
// )


let inputFunc = (e) => {
    e.preventDefault()
    console.log(e.target.elements.input.value);
    // reactRenderFunc()
}

const reactRenderFunc = () => {
    const template = (
        <div>
            <form  onSubmit={inputFunc}>
                <input type="text" name="input"></input>
                <button>
                    点击
                </button>
            </form>
        </div>
    )
    ReactDOM.render(template, document.getElementById('root'))
}

reactRenderFunc()
