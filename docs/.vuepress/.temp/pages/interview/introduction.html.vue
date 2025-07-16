<template><div><h1 id="javascript面试题" tabindex="-1"><a class="header-anchor" href="#javascript面试题"><span>JavaScript面试题</span></a></h1>
<h2 id="_1-ajax原理是什么-如何实现" tabindex="-1"><a class="header-anchor" href="#_1-ajax原理是什么-如何实现"><span>1. ajax原理是什么？如何实现?</span></a></h2>
<p><strong>参考回答：</strong> AJAX（Asynchronous JavaScript and XML）的核心是在不刷新整个页面的情况下，与服务器进行异步通信并更新部分网页。传统的AJAX是基于浏览器提供的 XMLHttpRequest 对象，该对象允许：</p>
<ol>
<li>创建 HTTP 请求（GET/POST 等）。</li>
<li>在后台发送请求，无需阻塞用户操作。</li>
<li>解析服务器响应（如 JSON、XML）并动态更新 DOM。
现代的AJAX是基于 Fetch API 和 Promise，提供了更简洁和强大的异步处理方式。实际开发中，更多时候会使用封装后的库（如 Axios），它同时兼容 XHR 和 Fetch 的优点（如自动转换 JSON、拦截器、超时控制等），进一步简化开发</li>
</ol>
</div></template>


