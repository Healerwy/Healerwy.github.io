<template><div><h1 id="微前端" tabindex="-1"><a class="header-anchor" href="#微前端"><span>微前端</span></a></h1>
<h2 id="一、qiankun" tabindex="-1"><a class="header-anchor" href="#一、qiankun"><span>一、qiankun</span></a></h2>
<h3 id="_1-搭建步骤" tabindex="-1"><a class="header-anchor" href="#_1-搭建步骤"><span>1. 搭建步骤</span></a></h3>
<ul>
<li>主应用</li>
</ul>
<ol>
<li>安装 qiankun（核心依赖）: npm install qiankun@2.10.13 # 稳定版，适配 Vite 子应用</li>
<li>新建 src/qiankun/index.js（注册子应用）</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> registerMicroApps<span class="token punctuation">,</span> start <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'qiankun'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 注册子应用配置</span></span>
<span class="line"><span class="token function">registerMicroApps</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'subAppB'</span><span class="token punctuation">,</span> <span class="token comment">// 子应用唯一标识（必须和 B 的插件名称一致）</span></span>
<span class="line">    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">'http://localhost:5175'</span><span class="token punctuation">,</span> <span class="token comment">// B 子应用的开发地址</span></span>
<span class="line">    <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token string">'#sub-app-b-container'</span><span class="token punctuation">,</span> <span class="token comment">// 挂载 B 的 DOM 容器 ID</span></span>
<span class="line">    <span class="token literal-property property">activeRule</span><span class="token operator">:</span> <span class="token string">'/sub-app-b'</span><span class="token punctuation">,</span> <span class="token comment">// 触发加载 B 的路由前缀（核心，和 B 路由前缀一致）</span></span>
<span class="line">    <span class="token literal-property property">esModule</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 关键：适配 Vite 子应用的 ES 模块</span></span>
<span class="line">    <span class="token literal-property property">scriptType</span><span class="token operator">:</span> <span class="token string">'module'</span><span class="token punctuation">,</span> <span class="token comment">// 关键：强制以模块方式加载 B 的脚本</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 启动 qiankun（配置沙箱，避免冲突）</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">startQiankun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">sandbox</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">strictStyleIsolation</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 样式隔离</span></span>
<span class="line">      <span class="token literal-property property">experimentalStyleIsolation</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 关闭实验性样式隔离（避免干扰）</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">singular</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 单例模式：同一时间只加载一个子应用</span></span>
<span class="line">    <span class="token literal-property property">prefetch</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 关闭预加载（适配 Vite 动态脚本）</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>主应用 A 的 src/main.js（启动 Qiankun）</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> startQiankun <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./qiankun'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 启动 qiankun（主应用挂载后执行）</span></span>
<span class="line"><span class="token function">startQiankun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>配置主应用 A 的路由（src/router/index.js）</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">'../views/Home.vue'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_URL</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'home'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Home <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// A 主应用首页</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/sub-app-b*'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'subAppB'</span><span class="token punctuation">,</span> <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'../views/SubAppB.vue'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 匹配所有 /sub-app-b 开头的路径</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>创建挂载子应用 B 的容器组件（src/views/SubAppB.vue）</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 子应用 <span class="token constant">B</span> 的挂载容器（<span class="token constant">ID</span> 必须和 qiankun 配置的 container 一致） <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"sub-app-b-container"</span> style<span class="token operator">=</span><span class="token string">"padding: 20px; min-height: 500px;"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script setup<span class="token operator">></span></span>
<span class="line"><span class="token comment">// 无需额外逻辑，qiankun 会自动将 B 挂载到该容器</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>主应用 A 的首页（src/views/Home.vue，添加跳转链接）</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"home"</span><span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>h1<span class="token operator">></span>主应用 <span class="token constant">A</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>nav style<span class="token operator">=</span><span class="token string">"margin: 20px 0;"</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 跳转到子应用 <span class="token constant">B</span> 的路由 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>router<span class="token operator">-</span>link to<span class="token operator">=</span><span class="token string">"/sub-app-b"</span> style<span class="token operator">=</span><span class="token string">"margin-right: 20px;"</span><span class="token operator">></span>打开子应用 <span class="token constant">B</span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>子应用</li>
</ul>
<ol>
<li>安装 qiankun 适配插件（可选，但简化配置）：npm install vite-plugin-qiankun@1.0.11 -D</li>
<li>配置 vite.config.js（跨域 + qiankun 插件）</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">'@vitejs/plugin-vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> qiankun <span class="token keyword">from</span> <span class="token string">'vite-plugin-qiankun'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// qiankun 插件：名称必须和主应用注册的 name 一致</span></span>
<span class="line">    <span class="token function">qiankun</span><span class="token punctuation">(</span><span class="token string">'subAppB'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">useDevMode</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开发环境启用</span></span>
<span class="line">      <span class="token literal-property property">devSandbox</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开发环境沙箱</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">5175</span><span class="token punctuation">,</span> <span class="token comment">// 固定端口（和主应用配置的 entry 一致）</span></span>
<span class="line">    <span class="token literal-property property">strictPort</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 端口被占用时报错</span></span>
<span class="line">    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 关键：跨域配置（主应用加载 B 必须）</span></span>
<span class="line">      <span class="token string-property property">'Access-Control-Allow-Origin'</span><span class="token operator">:</span> <span class="token string">'*'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'Access-Control-Allow-Headers'</span><span class="token operator">:</span> <span class="token string">'*'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'Access-Control-Allow-Methods'</span><span class="token operator">:</span> <span class="token string">'*'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'Access-Control-Allow-Credentials'</span><span class="token operator">:</span> <span class="token string">'true'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>子应用 B 的生命周期配置（src/main.js）</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">'./style.css'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> vueApp <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 🔴 关键：顶层具名导出 mount（qiankun 必须识别）</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">mount</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> container <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 挂载容器：优先用主应用提供的容器，兜底用自身 #app</span></span>
<span class="line">  <span class="token keyword">const</span> mountDom <span class="token operator">=</span> container<span class="token operator">?.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span> <span class="token operator">||</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span> <span class="token operator">||</span> document<span class="token punctuation">.</span>body<span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 挂载前清空容器（避免重复挂载）</span></span>
<span class="line">  mountDom<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 创建并挂载应用</span></span>
<span class="line">  vueApp <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  vueApp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span>mountDom<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 🔴 关键：顶层具名导出 unmount（qiankun 必须识别）</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">unmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>vueApp<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    vueApp<span class="token punctuation">.</span><span class="token function">unmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 卸载应用</span></span>
<span class="line">    vueApp <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 清空引用</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// 清空容器（兜底）</span></span>
<span class="line">  <span class="token keyword">const</span> mountDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>mountDom<span class="token punctuation">)</span> mountDom<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 独立运行时挂载（纯 URL 判断，无 qiankun 变量依赖）</span></span>
<span class="line"><span class="token keyword">const</span> isEmbedInA <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'/sub-app-b'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isEmbedInA<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 可选：bootstrap 生命周期（初始化时执行一次）</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'子应用 B 初始化'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>子应用 B 的路由配置（src/router/index.js，纯 URL 匹配）</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> BHome <span class="token keyword">from</span> <span class="token string">'../views/BHome.vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> BDetail <span class="token keyword">from</span> <span class="token string">'../views/BDetail.vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token constant">B404</span> <span class="token keyword">from</span> <span class="token string">'../views/B404.vue'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 核心：路由前缀（和主应用 activeRule 一致）</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">QIANKUN_PREFIX</span> <span class="token operator">=</span> <span class="token string">'/sub-app-b'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 纯 URL 判断是否嵌入主应用</span></span>
<span class="line"><span class="token keyword">const</span> isEmbedInA <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token constant">QIANKUN_PREFIX</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 动态计算路由 base</span></span>
<span class="line"><span class="token keyword">const</span> routerBase <span class="token operator">=</span> isEmbedInA <span class="token operator">?</span> <span class="token constant">QIANKUN_PREFIX</span> <span class="token operator">+</span> <span class="token string">'/'</span> <span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 初始化路由</span></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span>routerBase<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'BHome'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> BHome <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 嵌入时对应 /sub-app-b，独立时对应 /</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/detail'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'BDetail'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> BDetail <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 嵌入时对应 /sub-app-b/detail</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/:pathMatch(.*)*'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'B404'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token constant">B404</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 404 兜底</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 路由守卫：路径匹配兜底</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 嵌入时，若直接访问 /sub-app-b 则跳转到 B 的首页</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>isEmbedInA <span class="token operator">&amp;&amp;</span> to<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token constant">QIANKUN_PREFIX</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// 嵌入时，若路径是 /sub-app-b/xxx 则映射到 B 的 /xxx</span></span>
<span class="line">  <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>isEmbedInA <span class="token operator">&amp;&amp;</span> to<span class="token punctuation">.</span>path<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token constant">QIANKUN_PREFIX</span> <span class="token operator">+</span> <span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">next</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token constant">QIANKUN_PREFIX</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-遇到的问题" tabindex="-1"><a class="header-anchor" href="#_2-遇到的问题"><span>2. 遇到的问题</span></a></h3>
<ol>
<li>无法解决第二次访问子应用加载空白的问题
<blockquote>
<p>有可能是因为路由，组件什么的没有卸载干净，解决不来</p>
</blockquote>
</li>
<li>[dfsa]https://juejin.cn/post/7353447472557637695</li>
</ol>
<h2 id="二、micro-app" tabindex="-1"><a class="header-anchor" href="#二、micro-app"><span>二、micro-app</span></a></h2>
<h3 id="_1-搭建步骤-1" tabindex="-1"><a class="header-anchor" href="#_1-搭建步骤-1"><span>1. 搭建步骤</span></a></h3>
<ul>
<li>主应用</li>
</ul>
<ol>
<li>安装micro-app核心包： pnpm install @micro-zoe/micro-app --save</li>
<li>src/main.js（初始化 micro-app）</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span></span>
<span class="line"><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span> <span class="token comment">// 后续创建路由</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 引入micro-app并初始化</span></span>
<span class="line"><span class="token keyword">import</span> microApp <span class="token keyword">from</span> <span class="token string">'@micro-zoe/micro-app'</span></span>
<span class="line"></span>
<span class="line">microApp<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 配置项：禁用沙箱（可选，根据需求）</span></span>
<span class="line">  <span class="token comment">// disableSandbox: true,</span></span>
<span class="line">  <span class="token comment">// 配置子应用基础路径</span></span>
<span class="line">  <span class="token literal-property property">globalAssets</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">js</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 全局js</span></span>
<span class="line">    <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 全局css</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>src/router/index.js（创建主应用路由）</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span></span>
<span class="line"><span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">'../views/Home.vue'</span></span>
<span class="line"><span class="token keyword">import</span> ChildApp <span class="token keyword">from</span> <span class="token string">'../views/ChildApp.vue'</span> <span class="token comment">// 加载子应用的页面</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Home'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">component</span><span class="token operator">:</span> Home</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/child'</span><span class="token punctuation">,</span> <span class="token comment">// 加载子应用的路由</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'ChildApp'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">component</span><span class="token operator">:</span> ChildApp</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_URL</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  routes</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> router</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>vite.config.js（配置端口和跨域）</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span></span>
<span class="line"><span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">'@vitejs/plugin-vue'</span></span>
<span class="line"><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">'path'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'@'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'src'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span> <span class="token comment">// 主应用端口</span></span>
<span class="line">    <span class="token literal-property property">cors</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 允许跨域（子应用需要）</span></span>
<span class="line">    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 启动时自动打开浏览器</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>src/views/Home.vue（主应用首页）</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"home"</span><span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>h1<span class="token operator">></span>主应用（micro<span class="token operator">-</span>app<span class="token operator">-</span>main）<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"nav"</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>router<span class="token operator">-</span>link to<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>首页<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>router<span class="token operator">-</span>link to<span class="token operator">=</span><span class="token string">"/child"</span><span class="token operator">></span>加载子应用<span class="token constant">B</span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>style scoped<span class="token operator">></span></span>
<span class="line"><span class="token punctuation">.</span>home <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">padding</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span>nav <span class="token punctuation">{</span></span>
<span class="line">  margin<span class="token operator">-</span>top<span class="token operator">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">gap</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span>nav a <span class="token punctuation">{</span></span>
<span class="line">  text<span class="token operator">-</span>decoration<span class="token operator">:</span> none<span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">color</span><span class="token operator">:</span> #42b983<span class="token punctuation">;</span></span>
<span class="line">  font<span class="token operator">-</span>size<span class="token operator">:</span> 16px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span>nav a<span class="token punctuation">.</span>active <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">000</span><span class="token punctuation">;</span></span>
<span class="line">  font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>src/views/ChildApp.vue（加载子应用的页面）</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"child-app-container"</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>h2<span class="token operator">></span>子应用<span class="token constant">B</span>容器<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>micro<span class="token operator">-</span>app</span>
<span class="line">        name<span class="token operator">=</span><span class="token string">"child-app"</span></span>
<span class="line">        <span class="token operator">:</span>src<span class="token operator">=</span><span class="token string">"url"</span></span>
<span class="line">        <span class="token operator">:</span>data<span class="token operator">=</span><span class="token string">"microAppData"</span></span>
<span class="line">        iframe</span>
<span class="line">        baseroute<span class="token operator">=</span><span class="token string">"/child-app"</span></span>
<span class="line">        disable<span class="token operator">-</span>memory<span class="token operator">-</span>router</span>
<span class="line">        @created<span class="token operator">=</span><span class="token string">"handleCreated"</span></span>
<span class="line">        @beforemount<span class="token operator">=</span><span class="token string">"handleBeforeMount"</span></span>
<span class="line">        @mounted<span class="token operator">=</span><span class="token string">"handleMounted"</span></span>
<span class="line">        @unmount<span class="token operator">=</span><span class="token string">"handleUnmount"</span></span>
<span class="line">        @error<span class="token operator">=</span><span class="token string">"handleError"</span></span>
<span class="line">      <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>micro<span class="token operator">-</span>app<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line">  </span>
<span class="line">  <span class="token operator">&lt;</span>script setup<span class="token operator">></span></span>
<span class="line">  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> microAppData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span> </span>
<span class="line">    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'来自主应用的数据'</span> </span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 根据环境动态设置URL</span></span>
<span class="line">  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'development'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      url<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'http://localhost:3001/'</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      url<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'/child-app/'</span>  <span class="token comment">// 生产环境路径</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 生命周期函数保持不变</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">handleCreated</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'子应用创建了'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">handleBeforeMount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'子应用即将被渲染'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">handleMounted</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'子应用已经渲染完成'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">handleUnmount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'子应用已经卸载'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">handleError</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'子应用加载出错了'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>子应用</li>
</ul>
<ol>
<li>vite.config.js（配置基础路径、端口、跨域）</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span></span>
<span class="line"><span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">'@vitejs/plugin-vue'</span></span>
<span class="line"><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">'path'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">'/child/'</span><span class="token punctuation">,</span> <span class="token comment">// 必须与主应用中baseroute一致</span></span>
<span class="line">  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'@'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'src'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3001</span><span class="token punctuation">,</span> <span class="token comment">// 子应用端口（与主应用中url匹配）</span></span>
<span class="line">    <span class="token literal-property property">cors</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 允许跨域</span></span>
<span class="line">    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>src/main.js（适配 micro-app 挂载 / 卸载）</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span></span>
<span class="line"><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span></span>
<span class="line"><span class="token comment">// 子应用 src/main.js 极简版（仅注册生命周期）</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'【子应用】main.js 执行'</span><span class="token punctuation">,</span>window<span class="token punctuation">.</span>__MICRO_APP_ENVIRONMENT__<span class="token punctuation">,</span>window<span class="token punctuation">.</span>microApp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 看是否打印</span></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function-variable function">__MICRO_APP_MOUNT__</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'【子应用】__MICRO_APP_MOUNT__ 触发：'</span><span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 临时挂载到 #app，验证是否执行</span></span>
<span class="line">  <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function-variable function">__MICRO_APP_UNMOUNT__</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'【子应用】__MICRO_APP_UNMOUNT__ 触发'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 1. 启动时调用</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'子应用 bootstrap'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2. 挂载时调用</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">mount</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'子应用 mount'</span><span class="token punctuation">,</span> props<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3. 卸载时调用</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">unmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'子应用 unmount'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4. 更新时调用</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'子应用 update'</span><span class="token punctuation">,</span> props<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 将生命周期函数挂载到window上，以便micro-app查找</span></span>
<span class="line">window<span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">micro-app-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>window <span class="token punctuation">.</span>__MICRO_APP_NAME__<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  bootstrap<span class="token punctuation">,</span></span>
<span class="line">  mount<span class="token punctuation">,</span></span>
<span class="line">  unmount</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>src/router/index.js（子应用路由配置）</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span></span>
<span class="line"><span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">'../views/Home.vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 微前端适配：获取基础路径</span></span>
<span class="line"><span class="token keyword">const</span> base <span class="token operator">=</span> window<span class="token punctuation">.</span>__MICRO_APP_ENVIRONMENT__ </span>
<span class="line">  <span class="token operator">?</span> window<span class="token punctuation">.</span>__MICRO_APP_BASE_ROUTE__ </span>
<span class="line">  <span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_URL</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Home'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">component</span><span class="token operator">:</span> Home</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/about'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'About'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'../views/About.vue'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span>base<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  routes</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> router</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>src/views/Home.vue（子应用首页）</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"child-home"</span><span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>h1<span class="token operator">></span>子应用<span class="token constant">B</span>（micro<span class="token operator">-</span>app<span class="token operator">-</span>child）<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"nav"</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>router<span class="token operator">-</span>link to<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>子应用首页<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>router<span class="token operator">-</span>link to<span class="token operator">=</span><span class="token string">"/about"</span><span class="token operator">></span>子应用关于页<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">    </span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 接收主应用传递的数据 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"mainData"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"main-data"</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>h3<span class="token operator">></span>主应用传递的消息：<span class="token punctuation">{</span><span class="token punctuation">{</span> mainData<span class="token punctuation">.</span>msg <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">    </span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 向主应用发送消息按钮 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"sendMsgToMain"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"send-btn"</span><span class="token operator">></span></span>
<span class="line">      向主应用发送消息</span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script setup<span class="token operator">></span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> mainData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 监听主应用传递的数据</span></span>
<span class="line"><span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>__MICRO_APP_ENVIRONMENT__<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 获取初始数据</span></span>
<span class="line">    mainData<span class="token punctuation">.</span>value <span class="token operator">=</span> window<span class="token punctuation">.</span>__MICRO_APP_DATA__</span>
<span class="line">    <span class="token comment">// 监听数据变化</span></span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'datachange'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      mainData<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>detail</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 向主应用发送消息</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">sendMsgToMain</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>__MICRO_APP_ENVIRONMENT__<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    window<span class="token punctuation">.</span>__MICRO_APP_CHANNEL__<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'child-send'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">'子应用B向主应用问好！'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>style scoped<span class="token operator">></span></span>
<span class="line"><span class="token punctuation">.</span>child<span class="token operator">-</span>home <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">padding</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span>nav <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">margin</span><span class="token operator">:</span> 20px <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">gap</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span>nav a <span class="token punctuation">{</span></span>
<span class="line">  text<span class="token operator">-</span>decoration<span class="token operator">:</span> none<span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">color</span><span class="token operator">:</span> #f06<span class="token punctuation">;</span></span>
<span class="line">  font<span class="token operator">-</span>size<span class="token operator">:</span> 16px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span>nav a<span class="token punctuation">.</span>active <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">000</span><span class="token punctuation">;</span></span>
<span class="line">  font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span>main<span class="token operator">-</span>data <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">margin</span><span class="token operator">:</span> 20px <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">background</span><span class="token operator">:</span> #f5f5f5<span class="token punctuation">;</span></span>
<span class="line">  border<span class="token operator">-</span>radius<span class="token operator">:</span> 4px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span>send<span class="token operator">-</span>btn <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">padding</span><span class="token operator">:</span> 8px 16px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">background</span><span class="token operator">:</span> #42b983<span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">border</span><span class="token operator">:</span> none<span class="token punctuation">;</span></span>
<span class="line">  border<span class="token operator">-</span>radius<span class="token operator">:</span> 4px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


