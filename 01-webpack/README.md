# webpack基本使用:

## 一：常用命令
 *  npx _webpack(默认：~ --config webpack.config.js):对webpack.config的入口文件打包，没有配置文件对src下的index.js打包，打包出口看配置文件_
 *  **npx webpack --help**:_查看命令帮助_
 *  **npx webpack serve**：_启动服务_
 *  **npm run start/npm run-script build**：_启动服务并且自动在浏览器中打开，需要在package.json中配置_
 *  **npm run build/npm build**:_文件自动打包并且展示打包细节，需要在package.json中配置_
 *  **npx webpack -v**: _查看版本_
 *  **--config webpack.prod.js**:_生产环境构建，在package.json中配置_
 *  **--config webpack.dev.js**:_开发环境构建，在package.json中配置_

## 二：常用loader
 * **babel-loader**: _Babel是编译工具，把高版本语法编译成低版本语法,webpack 通过 babel-loader 使用 Babel_
 * **css-loader**: _支持.css文件的加载和解析，转换成commonjs对象_
 * **style-loader**: _将样式通过`<style>`标签插入到head中_
 * **url-loader**: _可以将图片转为base64字符串，能更快的加载图片_
 * **file-loader**:_超出图片limit限定不会显示base64格式，直接显示文件名_
## 三：常用plugin
 * **HtmlWebpackPlugin**:_自动生成html_
 * **MiniCssExtractPlugin**:_分离css为单独文件_
 * **CleanWebpackPlugin**:_清除多余打包的文件_
 * 
## 四：问题和答疑
 *  **why loader？** 
    > _webpack开箱即用只支持JS和JSON两种文件类型，但是比如css、less，图片还有目前市场上比较新的语法糖jsx，怎么处理呢?  通过Loaders去支持其他文件类型并且把它们转化为有效的模块，并且可以添加到依赖图中。_

## 五：相关链接
 * [webpack中文文档](https://webpack.docschina.org/)
 * [webpack英文文档](https://v4.webpack.js.org/)