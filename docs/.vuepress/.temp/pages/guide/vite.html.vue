<template><div><h1 id="vite知识" tabindex="-1"><a class="header-anchor" href="#vite知识"><span>Vite知识</span></a></h1>
<h2 id="什么是构建工具" tabindex="-1"><a class="header-anchor" href="#什么是构建工具"><span>什么是构建工具</span></a></h2>
<p>浏览器只能识别html、css、js，其他文件浏览器无法识别。比如我们写ts代码需要使用tsc将其转换为js代码...构建工具能够把tsc,react-compiler,less,babel,uglifyjs全部集成在一起，将文件编译成浏览器可以识别的文件</p>
<ol>
<li>typescript：如果遇到ts文件我们需要使用tsc将typescript转化为js代码</li>
<li>React/Vue：安装react-complier / vue-complier,将我们写的jsx或vue文件转换为render函数</li>
<li>less/sass/postcss/component-style：需要使用less-loader/sass-loader等一系列编译工具将less/sass文件转换为css文件</li>
<li>语法降级：babel ----&gt;将es的新语法转换旧版浏览器可以接受的语法</li>
<li>体积优化：uglifyjs ----&gt; 将我们的代码进行压缩变成体积更小性能更高的文件</li>
<li>...</li>
</ol>
<p>打包：将我们写的浏览器不认识的代码，交给构建工具进行编译处理的过程就叫做打包，打包完成以后会给我们一个浏览器可以认识的文件</p>
<p>构建工具的作用：</p>
<ol>
<li>模块化开发支持：支持直接从node_modules中引入模块 + 多种模块化支持</li>
<li>处理代码兼容性：比如babel语法降级，less，ts语法转换(不是构建工具做的，构建工具将这些语法对应的处理工具集成进来自动化处理)</li>
<li>提高项目性能：压缩文件，代码分割</li>
<li>优化开发体验：</li>
</ol>
<ul>
<li>构建工具会帮你自动监听文件的变化，当文件变化以后自动帮你调用对应的集成工具重新进行打包,然后在浏览器重新运行</li>
<li>开发服务器：跨域的问题，用react-cli,create-react-element,vue-cli解决跨域的问题</li>
</ul>
<h2 id="webpack的缺点" tabindex="-1"><a class="header-anchor" href="#webpack的缺点"><span>webpack的缺点</span></a></h2>
<p>然而，当我们开始构建越来越大型的应用时，需要处理的 JavaScript 代码量也呈指数级增长。包含数千个模块的大型项目相当普遍。基于 JavaScript 开发的工具就会开始遇到性能瓶颈：通常需要很长时间（甚至是几分钟！）才能启动开发服务器，即使使用模块热替换（HMR），文件修改后的效果也需要几秒钟才能在浏览器中反映出来。如此循环往复，迟钝的反馈会极大地影响开发者的开发效率和幸福感。</p>
<p>因为webpack支持多种模块化，他一开始必须要统一模块化代码，所以意味着他需要将所有的依赖全部读一遍。</p>
<h2 id="vite脚手架和vite" tabindex="-1"><a class="header-anchor" href="#vite脚手架和vite"><span>vite脚手架和vite</span></a></h2>
<p>当我们敲下 yarn create vite</p>
<ol>
<li>帮我们全局安装一个东西：create-vite（vite的脚手架）</li>
<li>直接运行这个create-vite bin目录的下一个执行配置</li>
</ol>
<p>很多同学会存在误区：认为官网中使用对应yarn create构建项目的过程也是vite在做的事情
实际上：create-vite内置了vite</p>
<h2 id="vite启动项目初体验" tabindex="-1"><a class="header-anchor" href="#vite启动项目初体验"><span>Vite启动项目初体验</span></a></h2>
<p>开箱即用：你不需要做任何额外的配置就可以使用vite来帮你处理构建工作</p>
<p>在默认情况下，我们的ESModule去导入资源的时候，要么是绝对路径，要么是相对路径</p>
<h2 id="vite预加载" tabindex="-1"><a class="header-anchor" href="#vite预加载"><span>Vite预加载</span></a></h2>
<p><strong>依赖预构建：</strong> 首先vite会找到对应的依赖，然后调用esbuild（对js语法进行处理的一个库，基于Go语言，速度极快），将其他规范的代码转换成EsModule规范，然后放到当前目录下的node_modules/.vite/deps,同时对EsModule规范的各个模块进行统一集成。</p>
<p>他解决了3个问题：</p>
<ol>
<li>不同的第三方包会有不同的导出格式（这个是vite没法约束人家的事情）</li>
<li>对路径的处理上可以直接使用./vite/deps，方便路径重写</li>
<li>叫做网络多包传输的性能问题（也是原生EsModule规范不敢支持node_modules的原因之一）,有了依赖预构建以后，无论他有多少的额外export和import，vite都会尽可能的将他们进行集成最后只生成一个或者几个模块</li>
</ol>
<h2 id="vite环境变量配置" tabindex="-1"><a class="header-anchor" href="#vite环境变量配置"><span>Vite环境变量配置</span></a></h2>
<p>环境变量：会根据当前的代码环境产生值的变化的变量就叫做环境变量</p>
<p>在vite中的环境变量处理：
vite内置了dotenv这个第三方库，dotenv会自动读取.env文件，并解析这个文件中的对应环境变量，并将其注入到process对象下（但是vite考虑到和其他配置的一些冲突问题，他不会直接注入到process对象下）</p>
<p>process.cwd方法：返回当前node进程的工作目录</p>
<ul>
<li><strong>.env</strong>：所有环境都需要用到的环境变量</li>
<li><strong>.env.development</strong>： 开发环境需要用到的环境变量(默认情况下vite将我们开发环境取名为development)</li>
<li><strong>.env.production</strong>：生产环境需要用到的环境变量(默认情况下vite将我们生产环境取名为production)</li>
</ul>
<p>yarn dev --mode development 会将mode设置为development传递进来</p>
<p>当我们调用loadenv的时候，他会做如下几件事:</p>
<ol>
<li>直接找到.env文件不解释，并解析其中的环境变量，并放进一个对象里</li>
<li>会将传进来的mode这个变量的值进行拼接：<code v-pre>.env.development</code>，并根据我们提供的目录去取对应的配置文件并进行解析，并放进一个对象</li>
</ol>
<p>vite做了一个拦截，他为了防止我们将隐私性的变量直接送进import.meta.env中，所以他做了一层拦截，如果你的环境变量不是以VITE开头的，他就不会帮你注入到客户端中去。</p>
<p>补充一个小知识：为什么vite.config.js可以书写成ESModule的形式，这是因为vite他在读取这个vite.config.js的时候会率先node去解析文件语法，如果发现你是ESModule的语法规范，它就会直接将你的ESModule规范进行替换变成commonJs规范。</p>
<h2 id="vite开发服务器搭建原理" tabindex="-1"><a class="header-anchor" href="#vite开发服务器搭建原理"><span>vite开发服务器搭建原理</span></a></h2>
<p>以及为什么vite可以让浏览器识别.vue文件解析</p>
<p><strong>搭建服务端项目</strong></p>
<ol>
<li>指令</li>
</ol>
<ul>
<li>yarn init
-yarn add koa:node端的一个框架</li>
</ul>
<h2 id="在vite中处理css" tabindex="-1"><a class="header-anchor" href="#在vite中处理css"><span>在vite中处理css</span></a></h2>
<p><strong>vite天生就支持对css文件的直接处理</strong></p>
<ol>
<li>vite在读取到main.js中引用到了Index.css</li>
<li>直接去使用fs模块去读取index.css中文件内容</li>
<li>直接创建一个style标签，将index.css中的文件内容直接copy进style标签里</li>
<li>将style标签直接插入到index.html的head标签中</li>
<li>将该css文件中的内容直接替换为js脚本（方便热更新或者css模块化），同时设置Content-Type为js 从而让浏览器以js脚本的形式来执行该css后缀的文件</li>
</ol>
<p><strong>cssmodule解决不同css文件类名样式重复的问题</strong></p>
<ol>
<li>module.css(module是一种约定，表示需要开启css模块化)</li>
<li>他会将你的所有类名进行一定规则的替换（将footer替换成_footer_i22st_1）</li>
<li>同时创建一个映射对象{footer: '_footer_i22st_1'}</li>
<li>将替换后的内容塞进style标签里然后放入到head标签中(能够读到index.html的文件内容)</li>
<li>将componentA.module.css内容进行全部抹除，替换成js脚本</li>
<li>将创建的映射对象在脚本中进行默认导出</li>
</ol>
</div></template>


