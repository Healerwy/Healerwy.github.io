# webpack面试题
## 1. 说说你对webpack的理解？解决了什么问题？
### 一、背景
> Webpack 最初的目标是实现前端项目的模块化，旨在更高效地管理和维护项目中的每一个资源

**模块化**

> 最早的时候，我们会通过文件划分的形式实现模块化，也就是将每个功能及其相关状态数据各自单独放到不同的JS 文件中，约定每个文件是一个独立的模块，然后再将这些js文件引入到页面，一个script标签对应一个模块，然后调用模块化的成员
```html
<script src="module-a.js"></script>
<script src="module-b.js"></script>
```
> 但这种模块弊端十分的明显，**模块都是在全局中工作，大量模块成员污染了环境**，模块与模块之间并没有依赖关系、维护困难、没有私有空间等问题。项目一旦变大，上述问题会尤其明显。随后，就出现了命名空间方式，规定每个模块只暴露一个全局对象，然后模块的内容都挂载到这个对象中
```js
window.moduleA = {
  method1: function () {
    console.log('moduleA#method1')
  }
}
```
> 这种方式也存在命名空间冲突的问题。再后来，我们使用立即执行函数为模块提供私有空间，通过参数的形式作为依赖声明，如下：
```js
// module-a.js
(function ($) {
  var name = 'module-a'

  function method1 () {
    console.log(name + '#method1')
    $('body').animate({ margin: '200px' })
  }

  window.moduleA = {
    method1: method1
  }
})(jQuery)
```
> 这种方式实现了模块化但语法复杂，依赖维护成本高。上述的方式都是早期解决模块的方式，但是仍然存在一些没有解决的问题。例如，我们是用过script标签在页面引入这些模块的，这些模块的加载并不受代码的控制，时间一久维护起来也十分的麻烦。**理想的解决方式是，在页面中引入一个JS入口文件，其余用到的模块可以通过代码控制，按需加载进来。除了模块加载的问题以外，还需要规定模块化的规范，如今流行的则是CommonJS、ES Modules**

### 二、问题

从后端渲染的JSP、PHP，到前端原生JavaScript，再到jQuery开发，再到目前的三大框架Vue、React、Angular。开发方式，也从javascript到后面的es5、es6、7、8、9、10，再到typescript，包括编写CSS的预处理器less、scss等。

现代前端开发已经变得十分的复杂，所以我们开发过程中会遇到如下的问题：
- 需要通过模块化的方式来开发
- 使用一些高级的特性来加快我们的开发效率或者安全性，比如通过ES6+、TypeScript开发脚本逻辑，通过sass、less等方式来编写css样式代码
- 监听文件的变化来并且反映到浏览器上，提高开发的效率
- JavaScript 代码需要模块化，HTML 和 CSS 这些资源文件也会面临需要被模块化的问题
- 开发完成后我们还需要将代码进行压缩、合并以及其他相关的优化

而webpack恰巧可以解决以上问题

### 三、是什么
webpack 是一个用于现代JavaScript应用程序的静态模块打包工具
**静态模块：**这里的静态模块指的是开发阶段，可以被 webpack 直接引用的资源（可以直接被获取打包进bundle.js的资源）。当 webpack处理应用程序时，它会在内部构建一个依赖图，此依赖图对应映射到项目所需的每个模块（不再局限js文件），并生成一个或多个 bundle
**webpack的能力：**编译代码能力，提高效率，解决浏览器兼容问题；**模块整合能力**，提高性能，可维护性，解决浏览器频繁请求文件的问题；**万物皆可模块能力**，项目维护性增强，支持不同种类的前端模块类型，统一的模块化方案，所有资源文件的加载都可以通过代码控制

## 2. 说说webpack的构建流程?
### 运行流程
webpack 的运行流程是一个串行的过程，它的工作流程就是将各个插件串联起来。在运行过程中会广播事件，插件只需要监听它所关心的事件，就能加入到这条webpack机制中，去改变webpack的运作，使得整个系统扩展性良好
从启动到结束会依次执行以下三大步骤：
- 初始化流程：从配置文件和 Shell 语句中读取与合并参数，并初始化需要使用的插件和配置插件等执行环境所需要的参数
- 编译构建流程：从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找到该 Module 依赖的 Module，递归地进行编译处理
- 输出流程：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统

### 一、初始化流程
从配置文件和 Shell 语句中读取与合并参数，得出最终的参数。配置文件默认下为`webpack.config.js`，也或者通过命令的形式指定配置文件，主要作用是用于激活webpack的加载项和插件
> a）配置文件读取：Webpack 会先读取项目根目录下的 `webpack.config.js`（或其他自定义配置文件），从中获取构建所需的配置参数，像入口文件、输出路径、加载器（loader）、插件（plugin）等信息。如果没有提供配置文件，Webpack 会使用默认配置。

>b）命令行参数合并：Webpack 也支持通过命令行传递参数，这些参数会与配置文件中的参数进行合并，命令行参数的优先级更高。例如，使用 `webpack --mode production` 可以指定构建模式为生产环境。
关于文件配置内容分析，如下注释：
```js
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

module.exports = {
  // 入口文件，是模块构建的起点，同时每一个入口文件对应最后生成的一个 chunk。
  entry: './path/to/my/entry/file.js'，
  // 文件路径指向(可加快打包过程)。
  resolve: {
    alias: {
      'react': pathToReact
    }
  },
  // 生成文件，是模块构建的终点，包括输出文件与输出路径。
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  // 这里配置了处理各模块的 loader ，包括 css 预处理 loader ，es6 编译 loader，图片处理 loader。
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],
    noParse: [pathToReact]
  },
  // webpack 各插件对象，在 webpack 的事件流中执行对应的方法。
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
```
`webpack` 将 `webpack.config.js` 中的各个配置项拷贝到 `options` 对象中，并加载用户配置的 `plugins`。完成上述步骤之后，则开始初始化`Compiler`编译对象，该对象掌控者`webpack`声明周期，不执行具体的任务，只是进行一些调度工作
> compiler对象创建：基于初始化得到的参数，Webpack 会创建一个 `Compiler` 对象。`Compiler` 对象是 Webpack 的核心对象之一，它包含了整个构建过程的配置信息和方法，负责统筹和管理整个构建流程。

> 初始化插件：`Compiler` 对象会遍历配置中指定的所有插件，并调用插件的 `apply` 方法，将 `Compiler` 对象作为参数传递给插件。这样插件就可以在不同的构建阶段监听事件并执行相应的操作。
```js
class Compiler extends Tapable {
    constructor(context) {
        super();
        this.hooks = {
            beforeCompile: new AsyncSeriesHook(["params"]),
            compile: new SyncHook(["params"]),
            afterCompile: new AsyncSeriesHook(["compilation"]),
            make: new AsyncParallelHook(["compilation"]),
            entryOption: new SyncBailHook(["context", "entry"])
            // 定义了很多不同类型的钩子
        };
        // ...
    }
}

function webpack(options) {
  var compiler = new Compiler();
  ...// 检查options,若watch字段为true,则开启watch线程
  return compiler;
}
```
`Compiler` 对象继承自 `Tapable`，初始化时定义了很多钩子函数
### 二、编译构建流程
根据配置中的 `entry` 找出所有的入口文件
```js
module.exports = {
    entry: './src/file.js'
}
```
初始化完成后会调用Compiler的run来真正启动webpack编译构建流程，主要流程如下：
- compile 开始编译
- make 从入口点分析模块及其依赖的模块，创建这些模块对象
- build-module 构建模块
- seal 封装构建结果
- emit 把各个chunk输出到结果文件

1. compile 编译
执行了`run`方法后，首先会触发`compile`，主要是构建一个`Compilation`对象
该对象是编译阶段的主要执行者，主要会依次下述流程：执行模块创建、依赖收集、分块、打包等主要任务的对象

2. make 编译模块
> 入口模块解析：Webpack 从配置的入口文件开始，调用对应的加载器（loader）对入口模块进行处理。加载器可以将不同类型的文件转换为 Webpack 能够处理的模块格式，例如，`babel-loader` 可以将 ES6+ 代码转换为向后兼容的 JavaScript 代码。

当完成了上述的`compilation`对象后，就开始从`Entry`入口文件开始读取，主要执行`_addModuleChain()`函数，如下：
```js
_addModuleChain(context, dependency, onModule, callback) {
   ...
   // 根据依赖查找对应的工厂函数
   const Dep = /** @type {DepConstructor} */ (dependency.constructor);
   const moduleFactory = this.dependencyFactories.get(Dep);
   
   // 调用工厂函数NormalModuleFactory的create来生成一个空的NormalModule对象
   moduleFactory.create({
       dependencies: [dependency]
       ...
   }, (err, module) => {
       ...
       const afterBuild = () => {
        this.processModuleDependencies(module, err => {
         if (err) return callback(err);
         callback(null, module);
           });
    };
       
       this.buildModule(module, false, null, null, err => {
           ...
           afterBuild();
       })
   })
}
```
过程如下：
`_addModuleChain`中接收参数`dependency`传入的入口依赖，使用对应的工厂函数`NormalModuleFactory.create`方法生成一个空的`module`对象
回调中会把此`module`存入`compilation.modules`对象和`dependencies.module`对象中，由于是入口文件，也会存入`compilation.entries`中
随后执行`buildModule`进入真正的构建模块`module`内容的过程

3. build module 完成模块编译
> 递归解析依赖：在处理模块的过程中，Webpack 会分析模块中的依赖关系，找出模块中引入的其他模块（如 `import` 或 `require` 语句）。然后对这些依赖模块进行递归处理，重复调用加载器进行转换，并继续解析它们的依赖，直到所有模块都被处理完毕。

这里主要调用配置的`loaders`，将我们的模块转成标准的`JS`模块
在用`Loader` 对一个模块转换完后，使用 `acorn` 解析转换后的内容，输出对应的抽象语法树（`AST`），以方便 `Webpack`后面对代码的分析
从配置的入口模块开始，分析其 `AST`，当遇到`require`等导入其它模块语句时，便将其加入到依赖的模块列表，同时对新找出的依赖模块递归分析，最终搞清所有模块的依赖关系

### 三、输出流程
1. seal输出资源
> a）构建模块关系图:在解析模块的过程中，Webpack 会构建一个模块图（Module Graph），记录各个模块之间的依赖关系和引用顺序。模块图是一个有向无环图（DAG），它描述了整个项目的模块结构。

> b）模块优化:Webpack 会对模块图进行优化，例如去除重复的模块、合并可以合并的模块等，以减少打包后的文件大小。

> c）Chunk生成：根据模块图，Webpack 会将模块分割成不同的代码块（Chunk）。代码块是 Webpack 打包后的基本单位，可以是一个或多个模块的集合。Webpack 会根据配置和模块的依赖关系，将相关的模块打包到同一个代码块中。

> d）代码生成：Webpack 会将每个代码块中的模块代码进行合并和处理，生成最终的 JavaScript 代码。在生成代码的过程中，Webpack 会添加一些必要的运行时代码，用于处理模块的加载和执行。

`seal`方法主要是要生成`chunks`，对`chunks`进行一系列的优化操作，并生成要输出的代码。
`webpack` 中的 `chunk` ，可以理解为配置在 `entry` 中的模块，或者是动态引入的模块
根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 `Chunk`，再把每个 `Chunk` 转换成一个单独的文件加入到输出列表

2. emit输出完成
> a）文件写入：Webpack 将生成的代码块写入到配置指定的输出路径中，生成最终的打包文件。默认情况下，Webpack 会将所有代码打包到一个文件中，但也可以通过配置实现代码分割，生成多个文件。

> b）资源处理：除了 JavaScript 文件，Webpack 还可以处理其他类型的资源文件，如 CSS、图片等。对于这些资源文件，Webpack 会根据配置使用相应的加载器进行处理，并将处理后的文件输出到指定的目录中。
在确定好输出内容后，根据配置确定输出的路径和文件名
```js
output: {
    path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
}
```
在 `Compiler` 开始生成文件前，钩子 `emit` 会被执行，这是我们修改最终文件的最后一个机会

从而`webpack`整个打包过程则结束了

## 3. 说说webpack中常见的Plugin？解决了什么问题?

### 一、是什么
`Plugin`（Plug-in）是一种计算机应用程序，它和主应用程序互相交互，以提供特定的功能

是一种遵循一定规范的应用程序接口编写出来的程序，只能运行在程序规定的系统下，因为其需要调用原纯净系统提供的函数库或者数据

`webpack`中的`plugin`也是如此，`plugin`赋予其各种灵活的功能，例如打包优化、资源管理、环境变量注入等，它们会运行在 `webpack` 的不同阶段（钩子 / 生命周期），贯穿了`webpack`整个编译周期