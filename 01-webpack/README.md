# webpack基本使用:

## 一：常用命令
 *  npx _webpack(默认：~ --config webpack.config.js):对webpack.config的入口文件打包，没有配置文件对src下的index.js打包，打包出口看配置文件_
 *  **npx webpack --help**:_**查看命令帮助**_
 *  **npx webpack serve**：_**启动服务**_
 *  **npm run start/npm run-script build**：_**启动服务并且自动在浏览器中打开，需要在package.json中配置**_
 *  **npm run build/npm build**:_**文件自动打包并且展示打包细节，需要在package.json中配置**_
 *  **npx webpack -v**: _**查看版本**_
 *  **--config webpack.prod.js**:_**生产环境构建，在package.json中配置**_
 *  **--config webpack.dev.js**:_**开发环境构建，在package.json中配置**_

## 二：常用loader
 * **babel-loader**: _**Babel是编译工具，把高版本语法编译成低版本语法,webpack 通过 babel-loader 使用 Babel**_
 * **css-loader**: _**支持.css文件的加载和解析，转换成commonjs对象**_
 * **style-loader**: _**将样式通过`<style>`标签插入到head中**_
 * **url-loader**: _**可以将图片转为base64字符串，能更快的加载图片**_
 * **file-loader**:_**超出图片limit限定不会显示base64格式，直接显示文件名**_
## 三：常用plugin
 * **HtmlWebpackPlugin**:_**自动生成html**_
 * **MiniCssExtractPlugin**:_**分离css为单独文件**_
 * **CleanWebpackPlugin**:_**清除多余打包的文件**_
 * 
## 四：问题和答疑
 *  **why loader？** 
    >** _webpack开箱即用只支持JS和JSON两种文件类型，但是比如css、less，图片还有目前市场上比较新的语法糖jsx，怎么处理呢?  通过Loaders去支持其他文件类型并且把它们转化为有效的模块，并且可以添加到依赖图中。_

## 五：相关链接
 * [webpack中文文档](https://webpack.docschina.org/)
 * [webpack英文文档](https://v4.webpack.js.org/)