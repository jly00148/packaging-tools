const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common,{
    mode:'production',

    // devServer：基于nod-express的web服务器，能够实时重新加载页面
    devServer:{
        static:'./dist',//内容的目录，将 dist 目录下的文件 serve 到 localhost:8080 下
    }
})