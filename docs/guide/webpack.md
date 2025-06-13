# Webpack知识

## 模块加载器（loader）

loader是Webpack的核心特性,借助于Loader就可以加载任何类型的资源文件。

1. 基础资源处理
    - file-loader:处理文件资源（如图片、字体），返回文件路径。
    - url-loader:类似 file-loader，但可将小文件转为 Base64 URI。
    - raw-loader:将文件内容作为字符串导入（如 HTML、TXT）。
2. JavaScript 处理
    - babel-loader:将 ES6+ 代码转换为向后兼容的版本。
    - ts-loader:处理 TypeScript 文件。

3. 样式处理
    - css-loader:解析 CSS 文件中的 @import 和 url() 语句。
    - style-loader:将 CSS 代码注入到页面中。
    - postcss-loader:使用 PostCSS 处理 CSS（如添加浏览器前缀、CSS Modules）。
    - sass-loader/less-loader/stylus-loader：编译 Sass/Less/Stylus 为 CSS。

4. 框架特定loader
    - vue-loader:处理 Vue 单文件组件（.vue 文件）。
    - react-loader:处理 React 组件（.jsx、.tsx 文件）。

## 插件机制（Plugins）

解决资源加载以外其他自动化工作
通过在生命周期的钩子中挂载函数实现拓展

1. clean-webpack-plugin：清除打包前dist目录
2. html-webpack-plugin：自动生成HTML文件，并引入打包后的资源
3. SplitChunksPlugin：代码拆分，自动分割公共代码

## Dev Server

提供用于开发的HTTP Server，集成自动编译和自动刷新浏览器等功能

## Source Map

Source Map 是一种映射技术，可以将编译后的代码映射回源代码，方便调试。解决了源代码与运行代码不一致所产生的问题。

1. cheap-mudule-eval-source-map：只包含行信息，不包含列信息，构建速度最快。
2. nosources-source-map：不包含源代码，只包含行信息，可以保护源代码。

## 自动刷新

1. 模块热替换：HMR（Hot Module Replacement）在应用运行过程中替换、添加或删除模块，而无需重新加载整个页面。Webpack Dev Server 默认支持 HMR，只需在配置文件中启用即可。
    - 样式文件的热更新看起来开箱即用（style模块自行处理了）
    - js文件的热更新需要配置（注：通过脚手架创建的项目内部都继承了HMR方案）
2. 自动刷新：当文件发生变化时，自动刷新整个页面。Webpack Dev Server 默认支持自动刷新，只需在配置文件中设置 `open: true` 即可。


## 生产环境优化
  生产环境注重运行效率，开发环境注重开发效率。开发环境下配置的一些热部署、自动刷新等开发友好功能在生产环境下是不需要的，甚至是有害的。因此，我们需要在开发环境和生产环境之间进行配置分离。

  1. 不同环境下的配置：
  2. 不同环境的配置文件：

## definePlugin

DefinePlugin 是 Webpack 提供的一个内置插件，用于在编译时创建全局常量。在代码中，可以通过 `process.env.NODE_ENV` 来访问这个常量。

## Tree Shaking

Tree Shaking 是一种通过静态分析代码，去除未使用的代码（Dead Code）的技术。Webpack 默认支持 Tree Shaking，只需在配置文件中设置 `mode: 'production'` 即可。Tree Shaking的前提是ES Modules

1. usedExports：在 ES6 模块中，通过 `export` 导出的变量、函数、类等，只有被使用到才会被打包进最终的代码中。
2. minimize：在 Webpack 配置中，通过 `mode: 'production'` 可以启用代码压缩和 Tree Shaking 功能。
3. concatenateModules：将所有模块合并到一个文件中，减少模块数量，提高打包效率。

## sideEffects
    sideEffects一般用于NPM包标记是否有副作用

## 代码分割（Code Splitting）

1. 多入口打包
2. 提取公共模块
``optimization: {
                // minimize: true,
                splitChunks: {
                    chunks: 'all',
                }
            },``
3. 动态导入:动态导入的模块会被自动分包
4. 魔法注释