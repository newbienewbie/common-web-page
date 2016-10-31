import React from  'react';
import NotFoundCss from './css/notfound.css';



const NotFound=React.createClass({
    render:function(){
        return(<div className="notfound">
            <h2>OOPS</h2>
            <h1> 不对劲 </h1>
            <h3>你不小心穿过虫洞，来到了45亿年前——那时候，并没有网络。</h3>
            <a href="/" class="back">回到过去</a>
        </div>);
    },
});



export default NotFound;