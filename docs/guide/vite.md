# Vite知识

## 什么是构建工具

浏览器只能识别html、css、js，其他文件浏览器无法识别。比如我们写ts代码需要使用tsc将其转换为js代码...构建工具能够把tsc,react-compiler,less,babel,uglifyjs全部集成在一起，将文件编译成浏览器可以识别的文件

1. typescript：如果遇到ts文件我们需要使用tsc将typescript转化为js代码
2. React/Vue：安装react-complier / vue-complier,将我们写的jsx或vue文件转换为render函数
3. less/sass/postcss/component-style：需要使用less-loader/sass-loader等一系列编译工具将less/sass文件转换为css文件
4. 语法降级：babel ---->将es的新语法转换旧版浏览器可以接受的语法
5. 体积优化：uglifyjs ----> 将我们的代码进行压缩变成体积更小性能更高的文件
6. ...

打包：将我们写的浏览器不认识的代码，交给构建工具进行编译处理的过程就叫做打包，打包完成以后会给我们一个浏览器可以认识的文件

构建工具的作用：
1. 模块化开发支持：支持直接从node_modules中引入模块 + 多种模块化支持
2. 处理代码兼容性：比如babel语法降级，less，ts语法转换(不是构建工具做的，构建工具将这些语法对应的处理工具集成进来自动化处理)
3. 提高项目性能：压缩文件，代码分割
4. 优化开发体验：
- 构建工具会帮你自动监听文件的变化，当文件变化以后自动帮你调用对应的集成工具重新进行打包,然后在浏览器重新运行
- 开发服务器：跨域的问题，用react-cli,create-react-element,vue-cli解决跨域的问题

## webpack的缺点

然而，当我们开始构建越来越大型的应用时，需要处理的 JavaScript 代码量也呈指数级增长。包含数千个模块的大型项目相当普遍。基于 JavaScript 开发的工具就会开始遇到性能瓶颈：通常需要很长时间（甚至是几分钟！）才能启动开发服务器，即使使用模块热替换（HMR），文件修改后的效果也需要几秒钟才能在浏览器中反映出来。如此循环往复，迟钝的反馈会极大地影响开发者的开发效率和幸福感。

因为webpack支持多种模块化，他一开始必须要统一模块化代码，所以意味着他需要将所有的依赖全部读一遍。

## vite脚手架和vite
  
当我们敲下 yarn create vite
1. 帮我们全局安装一个东西：create-vite（vite的脚手架）
2. 直接运行这个create-vite bin目录的下一个执行配置

很多同学会存在误区：认为官网中使用对应yarn create构建项目的过程也是vite在做的事情
实际上：create-vite内置了vite

## Vite启动项目初体验