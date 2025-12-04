import{_ as s,c as a,a as e,o as l}from"./app-Oi4kqmpD.js";const i={};function p(t,n){return l(),a("div",null,n[0]||(n[0]=[e(`<h1 id="微前端" tabindex="-1"><a class="header-anchor" href="#微前端"><span>微前端</span></a></h1><h2 id="qiankun" tabindex="-1"><a class="header-anchor" href="#qiankun"><span>qiankun</span></a></h2><h3 id="搭建步骤" tabindex="-1"><a class="header-anchor" href="#搭建步骤"><span>搭建步骤</span></a></h3><ul><li>主应用</li></ul><ol><li>安装 qiankun（核心依赖）: npm install qiankun@2.10.13 # 稳定版，适配 Vite 子应用</li><li>新建 src/qiankun/index.js（注册子应用）</li></ol><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> registerMicroApps<span class="token punctuation">,</span> start <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;qiankun&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 注册子应用配置</span></span>
<span class="line"><span class="token function">registerMicroApps</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;subAppB&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 子应用唯一标识（必须和 B 的插件名称一致）</span></span>
<span class="line">    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:5175&#39;</span><span class="token punctuation">,</span> <span class="token comment">// B 子应用的开发地址</span></span>
<span class="line">    <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token string">&#39;#sub-app-b-container&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 挂载 B 的 DOM 容器 ID</span></span>
<span class="line">    <span class="token literal-property property">activeRule</span><span class="token operator">:</span> <span class="token string">&#39;/sub-app-b&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 触发加载 B 的路由前缀（核心，和 B 路由前缀一致）</span></span>
<span class="line">    <span class="token literal-property property">esModule</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 关键：适配 Vite 子应用的 ES 模块</span></span>
<span class="line">    <span class="token literal-property property">scriptType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 关键：强制以模块方式加载 B 的脚本</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>主应用 A 的 src/main.js（启动 Qiankun）</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { createApp } from &#39;vue&#39;;</span>
<span class="line">import App from &#39;./App.vue&#39;;</span>
<span class="line">import router from &#39;./router&#39;;</span>
<span class="line">import { startQiankun } from &#39;./qiankun&#39;;</span>
<span class="line"></span>
<span class="line">const app = createApp(App);</span>
<span class="line">app.use(router);</span>
<span class="line">app.mount(&#39;#app&#39;);</span>
<span class="line"></span>
<span class="line">// 启动 qiankun（主应用挂载后执行）</span>
<span class="line">startQiankun();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>配置主应用 A 的路由（src/router/index.js）</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { createRouter, createWebHistory } from &#39;vue-router&#39;;</span>
<span class="line">import Home from &#39;../views/Home.vue&#39;;</span>
<span class="line"></span>
<span class="line">const router = createRouter({</span>
<span class="line">  history: createWebHistory(import.meta.env.BASE_URL),</span>
<span class="line">  routes: [</span>
<span class="line">    { path: &#39;/&#39;, name: &#39;home&#39;, component: Home }, // A 主应用首页</span>
<span class="line">    { path: &#39;/sub-app-b*&#39;, name: &#39;subAppB&#39;, component: () =&gt; import(&#39;../views/SubAppB.vue&#39;) }, // 匹配所有 /sub-app-b 开头的路径</span>
<span class="line">  ],</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">export default router;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>创建挂载子应用 B 的容器组件（src/views/SubAppB.vue）</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!-- 子应用 B 的挂载容器（ID 必须和 qiankun 配置的 container 一致） --&gt;</span>
<span class="line">  &lt;div id=&quot;sub-app-b-container&quot; style=&quot;padding: 20px; min-height: 500px;&quot;&gt;&lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">// 无需额外逻辑，qiankun 会自动将 B 挂载到该容器</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>主应用 A 的首页（src/views/Home.vue，添加跳转链接）</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;home&quot;&gt;</span>
<span class="line">    &lt;h1&gt;主应用 A&lt;/h1&gt;</span>
<span class="line">    &lt;nav style=&quot;margin: 20px 0;&quot;&gt;</span>
<span class="line">      &lt;!-- 跳转到子应用 B 的路由 --&gt;</span>
<span class="line">      &lt;router-link to=&quot;/sub-app-b&quot; style=&quot;margin-right: 20px;&quot;&gt;打开子应用 B&lt;/router-link&gt;</span>
<span class="line">    &lt;/nav&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>子应用</li></ul><ol><li>安装 qiankun 适配插件（可选，但简化配置）：npm install vite-plugin-qiankun@1.0.11 -D</li><li>配置 vite.config.js（跨域 + qiankun 插件）</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { defineConfig } from &#39;vite&#39;;</span>
<span class="line">import vue from &#39;@vitejs/plugin-vue&#39;;</span>
<span class="line">import qiankun from &#39;vite-plugin-qiankun&#39;;</span>
<span class="line"></span>
<span class="line">export default defineConfig({</span>
<span class="line">  plugins: [</span>
<span class="line">    vue(),</span>
<span class="line">    // qiankun 插件：名称必须和主应用注册的 name 一致</span>
<span class="line">    qiankun(&#39;subAppB&#39;, {</span>
<span class="line">      useDevMode: true, // 开发环境启用</span>
<span class="line">      devSandbox: true, // 开发环境沙箱</span>
<span class="line">    }),</span>
<span class="line">  ],</span>
<span class="line">  server: {</span>
<span class="line">    port: 5175, // 固定端口（和主应用配置的 entry 一致）</span>
<span class="line">    strictPort: true, // 端口被占用时报错</span>
<span class="line">    headers: {</span>
<span class="line">      // 关键：跨域配置（主应用加载 B 必须）</span>
<span class="line">      &#39;Access-Control-Allow-Origin&#39;: &#39;*&#39;,</span>
<span class="line">      &#39;Access-Control-Allow-Headers&#39;: &#39;*&#39;,</span>
<span class="line">      &#39;Access-Control-Allow-Methods&#39;: &#39;*&#39;,</span>
<span class="line">      &#39;Access-Control-Allow-Credentials&#39;: &#39;true&#39;,</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>子应用 B 的生命周期配置（src/main.js）</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { createApp } from &#39;vue&#39;;</span>
<span class="line">import App from &#39;./App.vue&#39;;</span>
<span class="line">import router from &#39;./router&#39;;</span>
<span class="line">import &#39;./style.css&#39;;</span>
<span class="line"></span>
<span class="line">let vueApp = null;</span>
<span class="line"></span>
<span class="line">// 🔴 关键：顶层具名导出 mount（qiankun 必须识别）</span>
<span class="line">export function mount(props) {</span>
<span class="line">  const { container } = props;</span>
<span class="line">  // 挂载容器：优先用主应用提供的容器，兜底用自身 #app</span>
<span class="line">  const mountDom = container?.querySelector(&#39;#app&#39;) || document.querySelector(&#39;#app&#39;) || document.body;</span>
<span class="line">  // 挂载前清空容器（避免重复挂载）</span>
<span class="line">  mountDom.innerHTML = &#39;&#39;;</span>
<span class="line">  // 创建并挂载应用</span>
<span class="line">  vueApp = createApp(App);</span>
<span class="line">  vueApp.use(router).mount(mountDom);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 🔴 关键：顶层具名导出 unmount（qiankun 必须识别）</span>
<span class="line">export function unmount() {</span>
<span class="line">  if (vueApp) {</span>
<span class="line">    vueApp.unmount(); // 卸载应用</span>
<span class="line">    vueApp = null; // 清空引用</span>
<span class="line">  }</span>
<span class="line">  // 清空容器（兜底）</span>
<span class="line">  const mountDom = document.querySelector(&#39;#app&#39;);</span>
<span class="line">  if (mountDom) mountDom.innerHTML = &#39;&#39;;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 独立运行时挂载（纯 URL 判断，无 qiankun 变量依赖）</span>
<span class="line">const isEmbedInA = window.location.pathname.includes(&#39;/sub-app-b&#39;);</span>
<span class="line">if (!isEmbedInA) {</span>
<span class="line">  createApp(App).use(router).mount(&#39;#app&#39;);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 可选：bootstrap 生命周期（初始化时执行一次）</span>
<span class="line">export function bootstrap() {</span>
<span class="line">  console.log(&#39;子应用 B 初始化&#39;);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>子应用 B 的路由配置（src/router/index.js，纯 URL 匹配）</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { createRouter, createWebHistory } from &#39;vue-router&#39;;</span>
<span class="line">import BHome from &#39;../views/BHome.vue&#39;;</span>
<span class="line">import BDetail from &#39;../views/BDetail.vue&#39;;</span>
<span class="line">import B404 from &#39;../views/B404.vue&#39;;</span>
<span class="line"></span>
<span class="line">// 核心：路由前缀（和主应用 activeRule 一致）</span>
<span class="line">const QIANKUN_PREFIX = &#39;/sub-app-b&#39;;</span>
<span class="line">// 纯 URL 判断是否嵌入主应用</span>
<span class="line">const isEmbedInA = window.location.pathname.includes(QIANKUN_PREFIX);</span>
<span class="line">// 动态计算路由 base</span>
<span class="line">const routerBase = isEmbedInA ? QIANKUN_PREFIX + &#39;/&#39; : &#39;/&#39;;</span>
<span class="line"></span>
<span class="line">// 初始化路由</span>
<span class="line">const router = createRouter({</span>
<span class="line">  history: createWebHistory(routerBase),</span>
<span class="line">  routes: [</span>
<span class="line">    { path: &#39;/&#39;, name: &#39;BHome&#39;, component: BHome }, // 嵌入时对应 /sub-app-b，独立时对应 /</span>
<span class="line">    { path: &#39;/detail&#39;, name: &#39;BDetail&#39;, component: BDetail }, // 嵌入时对应 /sub-app-b/detail</span>
<span class="line">    { path: &#39;/:pathMatch(.*)*&#39;, name: &#39;B404&#39;, component: B404 }, // 404 兜底</span>
<span class="line">  ],</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">// 路由守卫：路径匹配兜底</span>
<span class="line">router.beforeEach((to, from, next) =&gt; {</span>
<span class="line">  // 嵌入时，若直接访问 /sub-app-b 则跳转到 B 的首页</span>
<span class="line">  if (isEmbedInA &amp;&amp; to.path === QIANKUN_PREFIX) {</span>
<span class="line">    next(&#39;/&#39;);</span>
<span class="line">  }</span>
<span class="line">  // 嵌入时，若路径是 /sub-app-b/xxx 则映射到 B 的 /xxx</span>
<span class="line">  else if (isEmbedInA &amp;&amp; to.path.startsWith(QIANKUN_PREFIX + &#39;/&#39;)) {</span>
<span class="line">    next(to.path.replace(QIANKUN_PREFIX, &#39;&#39;));</span>
<span class="line">  } else {</span>
<span class="line">    next();</span>
<span class="line">  }</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">export default router;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="遇到的问题" tabindex="-1"><a class="header-anchor" href="#遇到的问题"><span>遇到的问题</span></a></h3><ol><li>无法解决第二次访问子应用加载空白的问题 <blockquote><p>有可能是因为路由，组件什么的没有卸载干净，解决不来</p></blockquote></li></ol>`,23)]))}const r=s(i,[["render",p]]),d=JSON.parse('{"path":"/guide/wei.html","title":"微前端","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1764827897000,"contributors":[{"name":"wangyue","username":"wangyue","email":"2421447099@qq.com","commits":1,"url":"https://github.com/wangyue"}],"changelog":[{"hash":"cfe74c0cf7ae27fbf0cac410d855788c5f66b738","time":1764827897000,"email":"2421447099@qq.com","author":"wangyue","message":"微前端"}]},"filePathRelative":"guide/wei.md"}');export{r as comp,d as data};
