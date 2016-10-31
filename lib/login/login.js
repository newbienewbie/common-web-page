import React from 'react';
import LoginCss from './css/login.css';


const Login=React.createClass({

    getDefaultProps:function(){
        return {
            action:'#',
            registerHref:'#',
            forgetPasswordHref:'#',
        };
    },

    render:function(){
        return (<section className="login"> 
            <div >登陆</div>
            <form  method="post" enctype="application/x-www-form-urlencoded" action={this.props.action} >
                <div>
                    <label>账号</label><input type="text" required placeholder="用户名" />
                </div>
                <div>
                    <label>密码</label><input type="password" required placeholder="密码" />
                </div>
                <div className="misc">
                    <div><a href={this.props.registerHref} >注册</a></div>
                    <div><a href={this.props.forgetPasswordHref} >忘记密码</a></div>
                </div>
                <button type="submit" className="submit" onClick={(e)=>{
                    e.preventDefault();
                    document.location.href='./main.html';
                }} >提交</button>
            </form>
        </section>);
    },
});




module.exports=Login;
