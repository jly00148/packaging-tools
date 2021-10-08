const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//清理输出文件夹


module.exports = {
    entry:{
        index:'./src/index.js',
        about:'./src/about.js',
        contact:'./src/contact.js'
    },
    output:{
        publicPath:'./',//指定输入参考根路径，开发阶段肯定是./当前文件夹下才能找得到，上线阶段一般是/路径下返回静态文件
        filename:'[name]-[fullhash]-[chunkhash]-bundle.js',
        path:path.resolve(__dirname,'dist')
    },

    // loader
    module:{
        // rules 是用来定义多个规则，这些规则用来匹配对应的模块，然后给对应的模块应用指定的loader
        rules: [

            // 处理css
            {
                test: /\.css$/i,
                use: [
                    // "style-loader", // 引入css单独打包文件，对此进行更改，注销，更改为MiniCssExtractPlugin.loader
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ],
            },

            // 处理图片
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 10000,//不超过limit限定会一Base64(能减少http请求)格式显示图片，否则是文件格式
                    },
                  },
                ],
              },
          ],
    },

    plugins:[
        // 自动生成html
        new HtmlWebpackPlugin({
            template:'./src/index.html',//模板文件
            filename:'_index.html',//输出的文件名
            inject:'head',//脚本写在哪个标签里，默认true(body结束之后)
            hash:true,//给生成的文件添加唯一的hash(?后面字符)
            chunks:['index','about','contact']//需要包含的入口中的chunk
        }),

        // 分离css为单独文件
        new MiniCssExtractPlugin({
            filename:"[name].[contenthash].css",//指定单独css所处的文件夹，
        }),
        new CleanWebpackPlugin()//清除多余打包的文件_
    ],
}