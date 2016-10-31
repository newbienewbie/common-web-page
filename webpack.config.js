const path=require('path');

const PATH={
    lib:path.join(__dirname,"lib"),
    dist:path.join(__dirname,"dist","js"),
};

module.exports={
    entry:{
        login:path.join(PATH.lib,"login","index.js"),
        notfound:path.join(PATH.lib,"notfound","index.js"), 
    },
    output:{
        path: PATH.dist,
        filename:'[name].js',
    },
    module:{
        loaders:[
            {
                test:/\.css/,
                loaders:['style-loader','css-loader'],
            },
            {
                test:/\.jsx?/,
                loaders:['babel-loader'],
            }
        ],
    }
};