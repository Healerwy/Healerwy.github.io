<template><div><h1 id="webpack知识" tabindex="-1"><a class="header-anchor" href="#webpack知识"><span>Webpack知识</span></a></h1>
<h2 id="模块加载器-loader" tabindex="-1"><a class="header-anchor" href="#模块加载器-loader"><span>模块加载器（loader）</span></a></h2>
<p>loader是Webpack的核心特性,借助于Loader就可以加载任何类型的资源文件。</p>
<ol>
<li>
<p>基础资源处理</p>
<ul>
<li>file-loader:处理文件资源（如图片、字体），返回文件路径。</li>
<li>url-loader:类似 file-loader，但可将小文件转为 Base64 URI。</li>
<li>raw-loader:将文件内容作为字符串导入（如 HTML、TXT）。</li>
</ul>
</li>
<li>
<p>JavaScript 处理</p>
<ul>
<li>babel-loader:将 ES6+ 代码转换为向后兼容的版本。</li>
<li>ts-loader:处理 TypeScript 文件。</li>
</ul>
</li>
<li>
<p>样式处理</p>
<ul>
<li>css-loader:解析 CSS 文件中的 @import 和 url() 语句。</li>
<li>style-loader:将 CSS 代码注入到页面中。</li>
<li>postcss-loader:使用 PostCSS 处理 CSS（如添加浏览器前缀、CSS Modules）。</li>
<li>sass-loader/less-loader/stylus-loader：编译 Sass/Less/Stylus 为 CSS。</li>
</ul>
</li>
<li>
<p>框架特定loader</p>
<ul>
<li>vue-loader:处理 Vue 单文件组件（.vue 文件）。</li>
<li>react-loader:处理 React 组件（.jsx、.tsx 文件）。</li>
</ul>
</li>
</ol>
<h2 id="插件机制-plugins" tabindex="-1"><a class="header-anchor" href="#插件机制-plugins"><span>插件机制（Plugins）</span></a></h2>
<p>解决资源加载以外其他自动化工作
通过在生命周期的钩子中挂载函数实现拓展</p>
<ol>
<li>clean-webpack-plugin：清除打包前dist目录</li>
<li>html-webpack-plugin：自动生成HTML文件，并引入打包后的资源</li>
<li>SplitChunksPlugin：代码拆分，自动分割公共代码</li>
</ol>
<h2 id="dev-server" tabindex="-1"><a class="header-anchor" href="#dev-server"><span>Dev Server</span></a></h2>
<p>提供用于开发的HTTP Server，集成自动编译和自动刷新浏览器等功能</p>
<h2 id="source-map" tabindex="-1"><a class="header-anchor" href="#source-map"><span>Source Map</span></a></h2>
<p>Source Map 是一种映射技术，可以将编译后的代码映射回源代码，方便调试。解决了源代码与运行代码不一致所产生的问题。</p>
<ol>
<li>cheap-mudule-eval-source-map：只包含行信息，不包含列信息，构建速度最快。</li>
<li>nosources-source-map：不包含源代码，只包含行信息，可以保护源代码。</li>
</ol>
<h2 id="自动刷新" tabindex="-1"><a class="header-anchor" href="#自动刷新"><span>自动刷新</span></a></h2>
<ol>
<li>模块热替换：HMR（Hot Module Replacement）在应用运行过程中替换、添加或删除模块，而无需重新加载整个页面。Webpack Dev Server 默认支持 HMR，只需在配置文件中启用即可。
<ul>
<li>样式文件的热更新看起来开箱即用（style模块自行处理了）</li>
<li>js文件的热更新需要配置（注：通过脚手架创建的项目内部都继承了HMR方案）</li>
</ul>
</li>
<li>自动刷新：当文件发生变化时，自动刷新整个页面。Webpack Dev Server 默认支持自动刷新，只需在配置文件中设置 <code v-pre>open: true</code> 即可。</li>
</ol>
<h2 id="生产环境优化" tabindex="-1"><a class="header-anchor" href="#生产环境优化"><span>生产环境优化</span></a></h2>
<p>生产环境注重运行效率，开发环境注重开发效率。开发环境下配置的一些热部署、自动刷新等开发友好功能在生产环境下是不需要的，甚至是有害的。因此，我们需要在开发环境和生产环境之间进行配置分离。</p>
<ol>
<li>不同环境下的配置：</li>
<li>不同环境的配置文件：</li>
</ol>
<h2 id="defineplugin" tabindex="-1"><a class="header-anchor" href="#defineplugin"><span>definePlugin</span></a></h2>
<p>DefinePlugin 是 Webpack 提供的一个内置插件，用于在编译时创建全局常量。在代码中，可以通过 <code v-pre>process.env.NODE_ENV</code> 来访问这个常量。</p>
<h2 id="tree-shaking" tabindex="-1"><a class="header-anchor" href="#tree-shaking"><span>Tree Shaking</span></a></h2>
<p>Tree Shaking 是一种通过静态分析代码，去除未使用的代码（Dead Code）的技术。Webpack 默认支持 Tree Shaking，只需在配置文件中设置 <code v-pre>mode: 'production'</code> 即可。Tree Shaking的前提是ES Modules</p>
<ol>
<li>usedExports：在 ES6 模块中，通过 <code v-pre>export</code> 导出的变量、函数、类等，只有被使用到才会被打包进最终的代码中。</li>
<li>minimize：在 Webpack 配置中，通过 <code v-pre>mode: 'production'</code> 可以启用代码压缩和 Tree Shaking 功能。</li>
<li>concatenateModules：将所有模块合并到一个文件中，减少模块数量，提高打包效率。</li>
</ol>
<h2 id="sideeffects" tabindex="-1"><a class="header-anchor" href="#sideeffects"><span>sideEffects</span></a></h2>
<pre><code>sideEffects一般用于NPM包标记是否有副作用
</code></pre>
<h2 id="代码分割-code-splitting" tabindex="-1"><a class="header-anchor" href="#代码分割-code-splitting"><span>代码分割（Code Splitting）</span></a></h2>
<ol>
<li>多入口打包</li>
<li>提取公共模块</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// minimize: true,</span></span>
<span class="line">    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">'all'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>动态导入:动态导入的模块会被自动分包</li>
<li>魔法注释</li>
</ol>
</div></template>


