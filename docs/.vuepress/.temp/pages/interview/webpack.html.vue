<template><div><h1 id="webpack面试题" tabindex="-1"><a class="header-anchor" href="#webpack面试题"><span>webpack面试题</span></a></h1>
<h2 id="_1-说说你对webpack的理解-解决了什么问题" tabindex="-1"><a class="header-anchor" href="#_1-说说你对webpack的理解-解决了什么问题"><span>1. 说说你对webpack的理解？解决了什么问题？</span></a></h2>
<h3 id="一、背景" tabindex="-1"><a class="header-anchor" href="#一、背景"><span>一、背景</span></a></h3>
<blockquote>
<p>Webpack 最初的目标是实现前端项目的模块化，旨在更高效地管理和维护项目中的每一个资源</p>
</blockquote>
<p><strong>模块化</strong></p>
<blockquote>
<p>最早的时候，我们会通过文件划分的形式实现模块化，也就是将每个功能及其相关状态数据各自单独放到不同的JS 文件中，约定每个文件是一个独立的模块，然后再将这些js文件引入到页面，一个script标签对应一个模块，然后调用模块化的成员</p>
</blockquote>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module-a.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module-b.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>但这种模块弊端十分的明显，<strong>模块都是在全局中工作，大量模块成员污染了环境</strong>，模块与模块之间并没有依赖关系、维护困难、没有私有空间等问题。项目一旦变大，上述问题会尤其明显。随后，就出现了命名空间方式，规定每个模块只暴露一个全局对象，然后模块的内容都挂载到这个对象中</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">window<span class="token punctuation">.</span>moduleA <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">method1</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'moduleA#method1'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>这种方式也存在命名空间冲突的问题。再后来，我们使用立即执行函数为模块提供私有空间，通过参数的形式作为依赖声明，如下：</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// module-a.js</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">$</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'module-a'</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">method1</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">'#method1'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'body'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">'200px'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  window<span class="token punctuation">.</span>moduleA <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">method1</span><span class="token operator">:</span> method1</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>jQuery<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>这种方式实现了模块化但语法复杂，依赖维护成本高。上述的方式都是早期解决模块的方式，但是仍然存在一些没有解决的问题。例如，我们是用过script标签在页面引入这些模块的，这些模块的加载并不受代码的控制，时间一久维护起来也十分的麻烦。<strong>理想的解决方式是，在页面中引入一个JS入口文件，其余用到的模块可以通过代码控制，按需加载进来。除了模块加载的问题以外，还需要规定模块化的规范，如今流行的则是CommonJS、ES Modules</strong></p>
</blockquote>
<h3 id="二、问题" tabindex="-1"><a class="header-anchor" href="#二、问题"><span>二、问题</span></a></h3>
<p>从后端渲染的JSP、PHP，到前端原生JavaScript，再到jQuery开发，再到目前的三大框架Vue、React、Angular。开发方式，也从javascript到后面的es5、es6、7、8、9、10，再到typescript，包括编写CSS的预处理器less、scss等。</p>
<p>现代前端开发已经变得十分的复杂，所以我们开发过程中会遇到如下的问题：</p>
<ul>
<li>需要通过模块化的方式来开发</li>
<li>使用一些高级的特性来加快我们的开发效率或者安全性，比如通过ES6+、TypeScript开发脚本逻辑，通过sass、less等方式来编写css样式代码</li>
<li>监听文件的变化来并且反映到浏览器上，提高开发的效率</li>
<li>JavaScript 代码需要模块化，HTML 和 CSS 这些资源文件也会面临需要被模块化的问题</li>
<li>开发完成后我们还需要将代码进行压缩、合并以及其他相关的优化</li>
</ul>
<p>而webpack恰巧可以解决以上问题</p>
<h3 id="三、是什么" tabindex="-1"><a class="header-anchor" href="#三、是什么"><span>三、是什么</span></a></h3>
<p>webpack 是一个用于现代JavaScript应用程序的静态模块打包工具
**静态模块：**这里的静态模块指的是开发阶段，可以被 webpack 直接引用的资源（可以直接被获取打包进bundle.js的资源）。当 webpack处理应用程序时，它会在内部构建一个依赖图，此依赖图对应映射到项目所需的每个模块（不再局限js文件），并生成一个或多个 bundle
**webpack的能力：**编译代码能力，提高效率，解决浏览器兼容问题；<strong>模块整合能力</strong>，提高性能，可维护性，解决浏览器频繁请求文件的问题；<strong>万物皆可模块能力</strong>，项目维护性增强，支持不同种类的前端模块类型，统一的模块化方案，所有资源文件的加载都可以通过代码控制</p>
<h2 id="_2-说说webpack的构建流程" tabindex="-1"><a class="header-anchor" href="#_2-说说webpack的构建流程"><span>2. 说说webpack的构建流程?</span></a></h2>
<h3 id="运行流程" tabindex="-1"><a class="header-anchor" href="#运行流程"><span>运行流程</span></a></h3>
<p>webpack 的运行流程是一个串行的过程，它的工作流程就是将各个插件串联起来。在运行过程中会广播事件，插件只需要监听它所关心的事件，就能加入到这条webpack机制中，去改变webpack的运作，使得整个系统扩展性良好
从启动到结束会依次执行以下三大步骤：</p>
<ul>
<li>初始化流程：从配置文件和 Shell 语句中读取与合并参数，并初始化需要使用的插件和配置插件等执行环境所需要的参数</li>
<li>编译构建流程：从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找到该 Module 依赖的 Module，递归地进行编译处理</li>
<li>输出流程：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统</li>
</ul>
<h3 id="一、初始化流程" tabindex="-1"><a class="header-anchor" href="#一、初始化流程"><span>一、初始化流程</span></a></h3>
<p>从配置文件和 Shell 语句中读取与合并参数，得出最终的参数。配置文件默认下为<code v-pre>webpack.config.js</code>，也或者通过命令的形式指定配置文件，主要作用是用于激活webpack的加载项和插件</p>
<blockquote>
<p>a）配置文件读取：Webpack 会先读取项目根目录下的 <code v-pre>webpack.config.js</code>（或其他自定义配置文件），从中获取构建所需的配置参数，像入口文件、输出路径、加载器（loader）、插件（plugin）等信息。如果没有提供配置文件，Webpack 会使用默认配置。</p>
</blockquote>
<blockquote>
<p>b）命令行参数合并：Webpack 也支持通过命令行传递参数，这些参数会与配置文件中的参数进行合并，命令行参数的优先级更高。例如，使用 <code v-pre>webpack --mode production</code> 可以指定构建模式为生产环境。
关于文件配置内容分析，如下注释：</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> node_modules <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'node_modules'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> pathToReact <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>node_modules<span class="token punctuation">,</span> <span class="token string">'react/dist/react.min.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 入口文件，是模块构建的起点，同时每一个入口文件对应最后生成的一个 chunk。</span></span>
<span class="line">  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">'./path/to/my/entry/file.js'</span>，</span>
<span class="line">  <span class="token comment">// 文件路径指向(可加快打包过程)。</span></span>
<span class="line">  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'react'</span><span class="token operator">:</span> pathToReact</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 生成文件，是模块构建的终点，包括输出文件与输出路径。</span></span>
<span class="line">  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'build'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name].js'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 这里配置了处理各模块的 loader ，包括 css 预处理 loader ，es6 编译 loader，图片处理 loader。</span></span>
<span class="line">  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">loaders</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'babel'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'es2015'</span><span class="token punctuation">,</span> <span class="token string">'react'</span><span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">noParse</span><span class="token operator">:</span> <span class="token punctuation">[</span>pathToReact<span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// webpack 各插件对象，在 webpack 的事件流中执行对应的方法。</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>HotModuleReplacementPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>webpack</code> 将 <code v-pre>webpack.config.js</code> 中的各个配置项拷贝到 <code v-pre>options</code> 对象中，并加载用户配置的 <code v-pre>plugins</code>。完成上述步骤之后，则开始初始化<code v-pre>Compiler</code>编译对象，该对象掌控者<code v-pre>webpack</code>声明周期，不执行具体的任务，只是进行一些调度工作</p>
<blockquote>
<p>compiler对象创建：基于初始化得到的参数，Webpack 会创建一个 <code v-pre>Compiler</code> 对象。<code v-pre>Compiler</code> 对象是 Webpack 的核心对象之一，它包含了整个构建过程的配置信息和方法，负责统筹和管理整个构建流程。</p>
</blockquote>
<blockquote>
<p>初始化插件：<code v-pre>Compiler</code> 对象会遍历配置中指定的所有插件，并调用插件的 <code v-pre>apply</code> 方法，将 <code v-pre>Compiler</code> 对象作为参数传递给插件。这样插件就可以在不同的构建阶段监听事件并执行相应的操作。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Compiler</span> <span class="token keyword">extends</span> <span class="token class-name">Tapable</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>hooks <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">beforeCompile</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">AsyncSeriesHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"params"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">compile</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SyncHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"params"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">afterCompile</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">AsyncSeriesHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"compilation"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">make</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">AsyncParallelHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"compilation"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">entryOption</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SyncBailHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"context"</span><span class="token punctuation">,</span> <span class="token string">"entry"</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token comment">// 定义了很多不同类型的钩子</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">webpack</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">var</span> compiler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Compiler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token operator">...</span><span class="token comment">// 检查options,若watch字段为true,则开启watch线程</span></span>
<span class="line">  <span class="token keyword">return</span> compiler<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Compiler</code> 对象继承自 <code v-pre>Tapable</code>，初始化时定义了很多钩子函数</p>
<h3 id="二、编译构建流程" tabindex="-1"><a class="header-anchor" href="#二、编译构建流程"><span>二、编译构建流程</span></a></h3>
<p>根据配置中的 <code v-pre>entry</code> 找出所有的入口文件</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">'./src/file.js'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化完成后会调用Compiler的run来真正启动webpack编译构建流程，主要流程如下：</p>
<ul>
<li>compile 开始编译</li>
<li>make 从入口点分析模块及其依赖的模块，创建这些模块对象</li>
<li>build-module 构建模块</li>
<li>seal 封装构建结果</li>
<li>emit 把各个chunk输出到结果文件</li>
</ul>
<ol>
<li>
<p>compile 编译
执行了<code v-pre>run</code>方法后，首先会触发<code v-pre>compile</code>，主要是构建一个<code v-pre>Compilation</code>对象
该对象是编译阶段的主要执行者，主要会依次下述流程：执行模块创建、依赖收集、分块、打包等主要任务的对象</p>
</li>
<li>
<p>make 编译模块</p>
</li>
</ol>
<blockquote>
<p>入口模块解析：Webpack 从配置的入口文件开始，调用对应的加载器（loader）对入口模块进行处理。加载器可以将不同类型的文件转换为 Webpack 能够处理的模块格式，例如，<code v-pre>babel-loader</code> 可以将 ES6+ 代码转换为向后兼容的 JavaScript 代码。</p>
</blockquote>
<p>当完成了上述的<code v-pre>compilation</code>对象后，就开始从<code v-pre>Entry</code>入口文件开始读取，主要执行<code v-pre>_addModuleChain()</code>函数，如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">_addModuleChain</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> dependency<span class="token punctuation">,</span> onModule<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token operator">...</span></span>
<span class="line">   <span class="token comment">// 根据依赖查找对应的工厂函数</span></span>
<span class="line">   <span class="token keyword">const</span> Dep <span class="token operator">=</span> <span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>DepConstructor<span class="token punctuation">}</span></span> */</span> <span class="token punctuation">(</span>dependency<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">   <span class="token keyword">const</span> moduleFactory <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dependencyFactories<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>Dep<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">   </span>
<span class="line">   <span class="token comment">// 调用工厂函数NormalModuleFactory的create来生成一个空的NormalModule对象</span></span>
<span class="line">   moduleFactory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">       <span class="token literal-property property">dependencies</span><span class="token operator">:</span> <span class="token punctuation">[</span>dependency<span class="token punctuation">]</span></span>
<span class="line">       <span class="token operator">...</span></span>
<span class="line">   <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> module</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">       <span class="token operator">...</span></span>
<span class="line">       <span class="token keyword">const</span> <span class="token function-variable function">afterBuild</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">processModuleDependencies</span><span class="token punctuation">(</span>module<span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">         <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">         <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> module<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">           <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">       </span>
<span class="line">       <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildModule</span><span class="token punctuation">(</span>module<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">           <span class="token operator">...</span></span>
<span class="line">           <span class="token function">afterBuild</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">       <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">   <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>过程如下：
<code v-pre>_addModuleChain</code>中接收参数<code v-pre>dependency</code>传入的入口依赖，使用对应的工厂函数<code v-pre>NormalModuleFactory.create</code>方法生成一个空的<code v-pre>module</code>对象
回调中会把此<code v-pre>module</code>存入<code v-pre>compilation.modules</code>对象和<code v-pre>dependencies.module</code>对象中，由于是入口文件，也会存入<code v-pre>compilation.entries</code>中
随后执行<code v-pre>buildModule</code>进入真正的构建模块<code v-pre>module</code>内容的过程</p>
<ol start="3">
<li>build module 完成模块编译</li>
</ol>
<blockquote>
<p>递归解析依赖：在处理模块的过程中，Webpack 会分析模块中的依赖关系，找出模块中引入的其他模块（如 <code v-pre>import</code> 或 <code v-pre>require</code> 语句）。然后对这些依赖模块进行递归处理，重复调用加载器进行转换，并继续解析它们的依赖，直到所有模块都被处理完毕。</p>
</blockquote>
<p>这里主要调用配置的<code v-pre>loaders</code>，将我们的模块转成标准的<code v-pre>JS</code>模块
在用<code v-pre>Loader</code> 对一个模块转换完后，使用 <code v-pre>acorn</code> 解析转换后的内容，输出对应的抽象语法树（<code v-pre>AST</code>），以方便 <code v-pre>Webpack</code>后面对代码的分析
从配置的入口模块开始，分析其 <code v-pre>AST</code>，当遇到<code v-pre>require</code>等导入其它模块语句时，便将其加入到依赖的模块列表，同时对新找出的依赖模块递归分析，最终搞清所有模块的依赖关系</p>
<h3 id="三、输出流程" tabindex="-1"><a class="header-anchor" href="#三、输出流程"><span>三、输出流程</span></a></h3>
<ol>
<li>seal输出资源</li>
</ol>
<blockquote>
<p>a）构建模块关系图:在解析模块的过程中，Webpack 会构建一个模块图（Module Graph），记录各个模块之间的依赖关系和引用顺序。模块图是一个有向无环图（DAG），它描述了整个项目的模块结构。</p>
</blockquote>
<blockquote>
<p>b）模块优化:Webpack 会对模块图进行优化，例如去除重复的模块、合并可以合并的模块等，以减少打包后的文件大小。</p>
</blockquote>
<blockquote>
<p>c）Chunk生成：根据模块图，Webpack 会将模块分割成不同的代码块（Chunk）。代码块是 Webpack 打包后的基本单位，可以是一个或多个模块的集合。Webpack 会根据配置和模块的依赖关系，将相关的模块打包到同一个代码块中。</p>
</blockquote>
<blockquote>
<p>d）代码生成：Webpack 会将每个代码块中的模块代码进行合并和处理，生成最终的 JavaScript 代码。在生成代码的过程中，Webpack 会添加一些必要的运行时代码，用于处理模块的加载和执行。</p>
</blockquote>
<p><code v-pre>seal</code>方法主要是要生成<code v-pre>chunks</code>，对<code v-pre>chunks</code>进行一系列的优化操作，并生成要输出的代码。
<code v-pre>webpack</code> 中的 <code v-pre>chunk</code> ，可以理解为配置在 <code v-pre>entry</code> 中的模块，或者是动态引入的模块
根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 <code v-pre>Chunk</code>，再把每个 <code v-pre>Chunk</code> 转换成一个单独的文件加入到输出列表</p>
<ol start="2">
<li>emit输出完成</li>
</ol>
<blockquote>
<p>a）文件写入：Webpack 将生成的代码块写入到配置指定的输出路径中，生成最终的打包文件。默认情况下，Webpack 会将所有代码打包到一个文件中，但也可以通过配置实现代码分割，生成多个文件。</p>
</blockquote>
<blockquote>
<p>b）资源处理：除了 JavaScript 文件，Webpack 还可以处理其他类型的资源文件，如 CSS、图片等。对于这些资源文件，Webpack 会根据配置使用相应的加载器进行处理，并将处理后的文件输出到指定的目录中。
在确定好输出内容后，根据配置确定输出的路径和文件名</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'build'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name].js'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code v-pre>Compiler</code> 开始生成文件前，钩子 <code v-pre>emit</code> 会被执行，这是我们修改最终文件的最后一个机会</p>
<p>从而<code v-pre>webpack</code>整个打包过程则结束了</p>
<h2 id="_3-说说webpack中常见的plugin-解决了什么问题" tabindex="-1"><a class="header-anchor" href="#_3-说说webpack中常见的plugin-解决了什么问题"><span>3. 说说webpack中常见的Plugin？解决了什么问题?</span></a></h2>
<h3 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么"><span>一、是什么</span></a></h3>
<p><code v-pre>Plugin</code>（Plug-in）是一种计算机应用程序，它和主应用程序互相交互，以提供特定的功能</p>
<p>是一种遵循一定规范的应用程序接口编写出来的程序，只能运行在程序规定的系统下，因为其需要调用原纯净系统提供的函数库或者数据</p>
<p><code v-pre>webpack</code>中的<code v-pre>plugin</code>也是如此，<code v-pre>plugin</code>赋予其各种灵活的功能，例如打包优化、资源管理、环境变量注入等，它们会运行在 <code v-pre>webpack</code> 的不同阶段（钩子 / 生命周期），贯穿了<code v-pre>webpack</code>整个编译周期</p>
</div></template>


