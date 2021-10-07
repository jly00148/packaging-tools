# webpack基本使用:

## 常用命令:
 *  npx _webpack(默认：~ --config webpack.config.js):对webpack.config的入口文件打包，没有配置文件对src下的index.js打包，打包出口看配置文件_

## 常用loader:
 *  babel-loader: _Babel是编译工具，把高版本语法编译成低版本语法,webpack 通过 babel-loader 使用 Babel_
 *  css-loader: _支持.css文件的加载和解析，转换成commonjs对象_
 *  style-loader: _将样式通过`<style>`标签插入到head中_
 *  url-loader: _可以将图片转为base64字符串，能更快的加载图片_
 *  file-loader: _一旦图片过大，就需要使用file-loader的加载本地图片，故url-loader可以设置图片超过多少字节时，使用file-loader加载图片。_
  
## 答疑：
 *  why loader? 
    > _webpack开箱即用只支持JS和JSON两种文件类型，但是比如css、less，图片还有目前市场上比较新的语法糖jsx，怎么处理呢?  通过Loaders去支持其他文件类型并且把它们转化为有效的模块，并且可以添加到依赖图中。_
