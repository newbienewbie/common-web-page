const React=require('react');
const ReactDOM =require('react-dom');
const Login=require('./login');


ReactDOM.render(
    <Login registerHref={"http://www.baidu.com"} />,
    document.getElementById('container')
);