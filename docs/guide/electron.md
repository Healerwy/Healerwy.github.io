# Electron知识

## 创建项目
```js
npm config set ELECTRON_MIRROR http://npmmirror.com/mirrors/electron/
npm init
npm install electron --save-dev //如果报错，使用npm install -g cnpm --registry=https://registry.npmmirror.com  cnpm install --save-dev electron
```

## 预加载脚本

Electron 的主进程是一个拥有着完全操作系统访问权限的 Node.js 环境。另一方面，出于安全原因，渲染进程默认跑在网页页面
上，而并非 Node.js里。为了将 Electron 的不同类型的进程桥接在一起，我们需要使用被称为 预加载 的特殊脚本。

### 什么是预加载脚本？
预加载脚本是在渲染进程（网页）加载前执行的脚本，运行在 Node.js 环境与渲染进程之间的中间上下文 中:
- 拥有有限的 Node.js 能力（可调用部分系统 API）；
- 能直接访问渲染进程的 window 对象，可向网页注入全局变量或方法。
它的核心作用是 在安全隔离的前提下，实现主进程（Main Process）与渲染进程（Renderer Process）的通信，或向网页暴露特定功能。

### 什么时候需要使用预加载脚本？
1. 需要在渲染进程中使用 Node.js 能力，但又想保持安全隔离
Electron 为了安全，默认在渲染进程中禁用了 Node.js（nodeIntegration: false）。若网页需要调用本地功能（如读取文件、获取系统信息），不能直接使用 require()，此时需通过预加载脚本作为 “桥梁”：
```js
// 预加载脚本（preload.js）
const { contextBridge, ipcRenderer } = require('electron');

// 向网页暴露有限的 API（而非直接暴露 ipcRenderer）
contextBridge.exposeInMainWorld('electronAPI', {
  readFile: (path) => ipcRenderer.invoke('read-file', path)
});
```
网页中即可安全使用：
```js
// 网页脚本
window.electronAPI.readFile('/data.txt').then(data => console.log(data));
```

2. 需要在网页加载前执行初始化操作
例如：设置全局变量、初始化通信监听、注入自定义样式等。

3. 遵循 Electron 安全最佳实践
官方强烈建议禁用 nodeIntegration: true（避免网页脚本直接调用系统 API 导致安全风险），此时预加载脚本是安全扩展功能的首选方式。

### 什么时候可以不使用
1. 纯静态网页，无需与本地系统交互
若你的应用只是简单包裹一个静态网页（如仅展示内容，无需调用文件、网络等系统能力），则不需要预加载脚本。
2. 开发调试阶段，临时开启 Node.js 集成
调试时可临时设置 nodeIntegration: true 并关闭 contextIsolation（不推荐用于生产环境），此时渲染进程可直接使用 Node.js API，无需预加载脚本：
```js
// 仅用于调试，生产环境禁用
new BrowserWindow({
  webPreferences: {
    nodeIntegration: true,
    contextIsolation: false
  }
});
```
### 总结
- **非必须，但强烈推荐使用：** 尤其是生产环境的应用，预加载脚本是平衡功能扩展与安全性的最佳实践
- **核心场景：** 当需要在网页中使用系统功能（如文件操作、主进程通信）时，必须通过预加载脚本实现（而非直接开启 nodeIntegration）。
- **简单场景：** 纯展示型应用可省略预加载脚本，但仍建议保持默认的安全配置（禁用 Node.js 集成）。


[官方文档](https://www.electronjs.org/zh/docs/latest/tutorial/%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B)