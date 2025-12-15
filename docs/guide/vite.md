# Vite知识

## 一、什么是构建工具

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

## 二、webpack的缺点

然而，当我们开始构建越来越大型的应用时，需要处理的 JavaScript 代码量也呈指数级增长。包含数千个模块的大型项目相当普遍。基于 JavaScript 开发的工具就会开始遇到性能瓶颈：通常需要很长时间（甚至是几分钟！）才能启动开发服务器，即使使用模块热替换（HMR），文件修改后的效果也需要几秒钟才能在浏览器中反映出来。如此循环往复，迟钝的反馈会极大地影响开发者的开发效率和幸福感。

因为webpack支持多种模块化，他一开始必须要统一模块化代码，所以意味着他需要将所有的依赖全部读一遍。

webpack的编译原理：AST抽象语法分析的工具，分析出你写的这个js文件有哪些导入和导出操作，构建工具是运行在服务端的
```js
//这一段代码最终回到浏览器里去运行
const lodash = require("lodash")
import Vue from "vue"
```
```js
//webpack的一个转换结果
const lodash = webpack_require("lodash")
const Vue = webpack_require("vue")
```
```js
(function(modules){
    function webpack_require(){}
    //入口是index.js
    //通过webpack的配置文件得来的：webpack.config.js ./src/index.js
    modules[entry](webpack_require);
},({
    "./src/index.js":(webpack_requie) => {
        const lodash = webpack_require("lodash");
        const Vue = webpack_require("vue")
    }
}))
```
因为webpack支持多种模块化，他一开始必须要统一模块化代码，所以意味着他需要将所有的依赖全部读一遍


## 三、vite脚手架和vite
  
当我们敲下 yarn create vite
1. 帮我们全局安装一个东西：create-vite（vite的脚手架）
2. 直接运行这个create-vite bin目录的下一个执行配置

很多同学会存在误区：认为官网中使用对应yarn create构建项目的过程也是vite在做的事情
实际上：create-vite内置了vite，使用vue-cli会内置webpack

## 四、Vite启动项目初体验

开箱即用：你不需要做任何额外的配置就可以使用vite来帮你处理构建工作

在默认情况下，我们的ESModule去导入资源的时候，要么是绝对路径，要么是相对路径

## 五、Vite预加载

**依赖预构建：** 首先vite会找到对应的依赖，然后调用esbuild（对js语法进行处理的一个库，基于Go语言，速度极快），将其他规范的代码转换成EsModule规范，然后放到当前目录下的node_modules/.vite/deps,同时对EsModule规范的各个模块进行统一集成。

他解决了3个问题：
1. 不同的第三方包会有不同的导出格式（这个是vite没法约束人家的事情）
2. 对路径的处理上可以直接使用./vite/deps，方便路径重写
3. 叫做网络多包传输的性能问题（也是原生EsModule规范不敢支持node_modules的原因之一）,有了依赖预构建以后，无论他有多少的额外export和import，vite都会尽可能的将他们进行集成最后只生成一个或者几个模块

## 六、Vite环境变量配置

环境变量：会根据当前的代码环境产生值的变化的变量就叫做环境变量

在vite中的环境变量处理：
vite内置了dotenv这个第三方库，dotenv会自动读取.env文件，并解析这个文件中的对应环境变量，并将其注入到process对象下（但是vite考虑到和其他配置的一些冲突问题，他不会直接注入到process对象下）

vite给我们提供了一些补偿措施：我们可以调用vite的loadEnv来手动确认env文件

process.cwd方法：返回当前node进程的工作目录

- **.env**：所有环境都需要用到的环境变量
- **.env.development**： 开发环境需要用到的环境变量(默认情况下vite将我们开发环境取名为development)
- **.env.production**：生产环境需要用到的环境变量(默认情况下vite将我们生产环境取名为production)

yarn dev --mode development 会将mode设置为development传递进来

当我们调用loadenv的时候，他会做如下几件事:
1. 直接找到.env文件不解释，并解析其中的环境变量，并放进一个对象里
2. 会将传进来的mode这个变量的值进行拼接：```.env.development```，并根据我们提供的目录去取对应的配置文件并进行解析，并放进一个对象

vite做了一个拦截，他为了防止我们将隐私性的变量直接送进import.meta.env中，所以他做了一层拦截，如果你的环境变量不是以VITE开头的，他就不会帮你注入到客户端中去。

补充一个小知识：为什么vite.config.js可以书写成ESModule的形式，这是因为vite他在读取这个vite.config.js的时候会率先node去解析文件语法，如果发现你是ESModule的语法规范，它就会直接将你的ESModule规范进行替换变成commonJs规范。

## 七、vite开发服务器搭建原理

以及为什么vite可以让浏览器识别.vue文件解析

**搭建服务端项目,实现一套简单的vite的开发服务器**
1. 指令
 - yarn init
 -yarn add koa:node端的一个框架   

## 八、在vite中处理css
**vite天生就支持对css文件的直接处理**
1. vite在读取到main.js中引用到了Index.css
2. 直接去使用fs模块去读取index.css中文件内容
3. 直接创建一个style标签，将index.css中的文件内容直接copy进style标签里
4. 将style标签直接插入到index.html的head标签中
5. 将该css文件中的内容直接替换为js脚本（方便热更新或者css模块化），同时设置Content-Type为js 从而让浏览器以js脚本的形式来执行该css后缀的文件 

**cssmodule解决不同css文件类名样式重复的问题**
1. 在node处理完文件，发现module.css(module是一种约定，表示需要开启css模块化)
2. 他会将你的所有类名进行一定规则的替换（将footer替换成_footer_i22st_1）
3. 同时创建一个映射对象{footer: '_footer_i22st_1'}
4. 将替换后的内容塞进style标签里然后放入到head标签中(能够读到index.html的文件内容)
5. 将componentA.module.css内容进行全部抹除，替换成js脚本
6. 将创建的映射对象在脚本中进行默认导出

less(预处理器):less给我们提供了一些方便且非常实用的方法

### 1、vite.config.js中css配置（mudules篇）
在vite.config.js中我们通过css属性去控制整个vite对于css的处理行为

- localConvention:修改生成的配置对象的key的展示形式（驼峰还是中划线形式）
- scopeBehaviour:配置当前的模块化行为是模块化还是全局化（有hash就是开启了模块化的一个标志，因为他可以产生不同的hash值来控制我们的样式类名不被覆盖）
- generateScopedName:生成的类名的规则（可以配置为函数，也可以配置成字符串规则）
- hashPrefix:生成hash会根据你的类名+一些其他的字符串(文件名+他内部随机生成的一个字符串)去进行生成，如果你想要你生成的hash更加独特一点，你可以配置hashPrefix，你配置的这个字符串会参与到最终的hash生成。
- globalModulePaths:[],代表你不想参与到css模块化的路径

### 2、vite.config.js中css配置流程（preprocessorOptions篇）
主要是用来配置css预处理的一些全局参数

### 3、sourceMap

文件之间的索引：假设我们的代码被压缩或者被编译过了，这个时候假设程序出错，他将不会产生正确的错误位置信息，如果设置了sourceMap，他就会有一个索引文件map

### 4、postcss
vite天生对postcss有非常良好的支持

postcss ---> 保证css在执行起来是万无一失的

**都对postcss有一个误区：他们认为postcss和less sass是差不多级别**

我们写的css代码（怎么爽怎么来） ---> postcss --->[去将语法进行编译（嵌套语法，函数，变量）成原生css]less sass等预处理器都可以做 ---> 再次对未来的高级css语法进行降级 ---> 前缀补全 ---> 浏览器客户端

目前来说，less和sass等一系列预处理器的postcss插件已经停止维护了，less插件 你自己去用less和sass编译完了，然后你把编译结果给我 **所以业内就产生了一个新的说法：postcss是后处理器**

babel   ---> 帮助我们让js执行起来万无一失

我们写的js代码（怎么爽怎么来） ---> babel --->将最新的ts进行转换js语法 ---> 做一次语法降级 --->浏览器客户端去执行


浏览器的兼容性你能考虑到吗？，预处理器并不能解决这些问题：
1. 对未来css属性的一些使用降级问题
2. 前缀补全：Google非常卷 --webkit

### 5、使用postcss

1. 安装依赖
```js
yarn add postcss-cli postcss -D
```

2. 书写描述文件
postcss配置文件的格式

- postcss.config.js
```js
//预设环境里面是会包含很多插件：语法降级、编译插件等等

const postcssPresetEnv = require("postcss-preset-env")

//预设就是帮你一次性的把这些必要的插件都给你装上了
//做语法的编译 less语法 sass语法 （语法嵌套 函数 变量）
module.exports = {
    plugins:[postcssPresetEnv(/* pluginOptions */)]
}
```
### 6、vite.config.js中css配置流程（postcss篇）

直接在css.postcss中进行配置，该属性直接配置的就是postcss的配置

```js
const postcssPresetEnv = rquire("postcss-preset-env")
export default defineConfig({
    optimizeDeps:{
        exclude:[],//将指定数组中的依赖不进行依赖预构建
    },
    envPrefix:"ENV_",
    css:{//对css的行为进行配置
        //modules配置最终会丢给postcss modules
        modules:{//是对css模块化的默认行为进行覆盖
            localsConvention:"camelCaseOnly", //修改生成的配置对象的key的展示形式（驼峰还是中划线形式）
            scopeBehaviour:"local",
            generateScopedName:"[name]_[local]_[hash:5]"
        },
        preprocessorOptions:{//key + config  key代表预处理器的名
            less:{ //整个的配置对象都会最终给到less的执行参数（全局参数）中去
                math:always,
                globalVars:{//全局变量
                    mainColor:"red"
                }
            }
        },
        devSourcemap:true,
        //vite的诞生一定会让postcss再火一次
        //基于postcss.config.js的配置
        postcss:{
            plugins:[postcssPresetEnv()]
        }
    },
    resolve:{
        alias:{//配置路径别名
            "@":path.resolve(__dirname,"./src")
        },
    }
})
```

## 九、vite加载静态资源

什么是静态资源？