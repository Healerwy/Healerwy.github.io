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

## 代码拆分（Code Splitting）

## 资源模块（Asset Modules）

js可以引入css、图片等资源，webpack5之前需要使用file-loader、url-loader等loader，webpack5之后可以直接使用资源模块。