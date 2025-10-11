# JavaScript面试题
## 1. ajax原理是什么？如何实现?
**参考回答：** AJAX（Asynchronous JavaScript and XML）的核心是在不刷新整个页面的情况下，与服务器进行异步通信并更新部分网页。传统的AJAX是基于浏览器提供的 XMLHttpRequest 对象，该对象允许：
1. 创建 HTTP 请求（GET/POST 等）。
2. 在后台发送请求，无需阻塞用户操作。
3. 解析服务器响应（如 JSON、XML）并动态更新 DOM。
现代的AJAX是基于 Fetch API 和 Promise，提供了更简洁和强大的异步处理方式。实际开发中，更多时候会使用封装后的库（如 Axios），它同时兼容 XHR 和 Fetch 的优点（如自动转换 JSON、拦截器、超时控制等），进一步简化开发
## 2. npm是什么
npm是一个独立的包管理工具，核心作用是管理Node.js生态中的JavaScript包（模块），是Node.js的默认包管理器。npm的底层主要是用js编写的（运行在node环境中）。最初的npm工具是单独创建提供给node服务的node包管理器，需要单独安装。后来集成进Node中作为默认的包管理器，作为软件包的一部分一起安装。对于node而言，npm帮助完成了第三方模块的发布、安装和依赖等。借助npm。node与第三方模块之间形成了很好的一个生态系统。

## 3.npm install安装报错可能的原因分析
[参考链接](https://developer.aliyun.com/article/1628947)
