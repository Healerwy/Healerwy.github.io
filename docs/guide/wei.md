# 微前端
## 一、qiankun

### 1. 搭建步骤
- 主应用
1. 安装 qiankun（核心依赖）: npm install qiankun@2.10.13 # 稳定版，适配 Vite 子应用
2. 新建 src/qiankun/index.js（注册子应用）
```js
import { registerMicroApps, start } from 'qiankun';

// 注册子应用配置
registerMicroApps([
  {
    name: 'subAppB', // 子应用唯一标识（必须和 B 的插件名称一致）
    entry: 'http://localhost:5175', // B 子应用的开发地址
    container: '#sub-app-b-container', // 挂载 B 的 DOM 容器 ID
    activeRule: '/sub-app-b', // 触发加载 B 的路由前缀（核心，和 B 路由前缀一致）
    esModule: true, // 关键：适配 Vite 子应用的 ES 模块
    scriptType: 'module', // 关键：强制以模块方式加载 B 的脚本
  },
]);

// 启动 qiankun（配置沙箱，避免冲突）
export function startQiankun() {
  start({
    sandbox: {
      strictStyleIsolation: true, // 样式隔离
      experimentalStyleIsolation: false, // 关闭实验性样式隔离（避免干扰）
    },
    singular: true, // 单例模式：同一时间只加载一个子应用
    prefetch: false, // 关闭预加载（适配 Vite 动态脚本）
  });
}
```
3. 主应用 A 的 src/main.js（启动 Qiankun）
```js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { startQiankun } from './qiankun';

const app = createApp(App);
app.use(router);
app.mount('#app');

// 启动 qiankun（主应用挂载后执行）
startQiankun();
```

4. 配置主应用 A 的路由（src/router/index.js）
```js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home }, // A 主应用首页
    { path: '/sub-app-b*', name: 'subAppB', component: () => import('../views/SubAppB.vue') }, // 匹配所有 /sub-app-b 开头的路径
  ],
});

export default router;
```
5. 创建挂载子应用 B 的容器组件（src/views/SubAppB.vue）
```js
<template>
  <!-- 子应用 B 的挂载容器（ID 必须和 qiankun 配置的 container 一致） -->
  <div id="sub-app-b-container" style="padding: 20px; min-height: 500px;"></div>
</template>

<script setup>
// 无需额外逻辑，qiankun 会自动将 B 挂载到该容器
</script>
```
6.  主应用 A 的首页（src/views/Home.vue，添加跳转链接）
```js
<template>
  <div class="home">
    <h1>主应用 A</h1>
    <nav style="margin: 20px 0;">
      <!-- 跳转到子应用 B 的路由 -->
      <router-link to="/sub-app-b" style="margin-right: 20px;">打开子应用 B</router-link>
    </nav>
  </div>
</template>
```
- 子应用
1. 安装 qiankun 适配插件（可选，但简化配置）：npm install vite-plugin-qiankun@1.0.11 -D
2. 配置 vite.config.js（跨域 + qiankun 插件）
```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import qiankun from 'vite-plugin-qiankun';

export default defineConfig({
  plugins: [
    vue(),
    // qiankun 插件：名称必须和主应用注册的 name 一致
    qiankun('subAppB', {
      useDevMode: true, // 开发环境启用
      devSandbox: true, // 开发环境沙箱
    }),
  ],
  server: {
    port: 5175, // 固定端口（和主应用配置的 entry 一致）
    strictPort: true, // 端口被占用时报错
    headers: {
      // 关键：跨域配置（主应用加载 B 必须）
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
  },
});
```
3. 子应用 B 的生命周期配置（src/main.js）
```js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';

let vueApp = null;

// 🔴 关键：顶层具名导出 mount（qiankun 必须识别）
export function mount(props) {
  const { container } = props;
  // 挂载容器：优先用主应用提供的容器，兜底用自身 #app
  const mountDom = container?.querySelector('#app') || document.querySelector('#app') || document.body;
  // 挂载前清空容器（避免重复挂载）
  mountDom.innerHTML = '';
  // 创建并挂载应用
  vueApp = createApp(App);
  vueApp.use(router).mount(mountDom);
}

// 🔴 关键：顶层具名导出 unmount（qiankun 必须识别）
export function unmount() {
  if (vueApp) {
    vueApp.unmount(); // 卸载应用
    vueApp = null; // 清空引用
  }
  // 清空容器（兜底）
  const mountDom = document.querySelector('#app');
  if (mountDom) mountDom.innerHTML = '';
}

// 独立运行时挂载（纯 URL 判断，无 qiankun 变量依赖）
const isEmbedInA = window.location.pathname.includes('/sub-app-b');
if (!isEmbedInA) {
  createApp(App).use(router).mount('#app');
}

// 可选：bootstrap 生命周期（初始化时执行一次）
export function bootstrap() {
  console.log('子应用 B 初始化');
}
```
4. 子应用 B 的路由配置（src/router/index.js，纯 URL 匹配）
```js
import { createRouter, createWebHistory } from 'vue-router';
import BHome from '../views/BHome.vue';
import BDetail from '../views/BDetail.vue';
import B404 from '../views/B404.vue';

// 核心：路由前缀（和主应用 activeRule 一致）
const QIANKUN_PREFIX = '/sub-app-b';
// 纯 URL 判断是否嵌入主应用
const isEmbedInA = window.location.pathname.includes(QIANKUN_PREFIX);
// 动态计算路由 base
const routerBase = isEmbedInA ? QIANKUN_PREFIX + '/' : '/';

// 初始化路由
const router = createRouter({
  history: createWebHistory(routerBase),
  routes: [
    { path: '/', name: 'BHome', component: BHome }, // 嵌入时对应 /sub-app-b，独立时对应 /
    { path: '/detail', name: 'BDetail', component: BDetail }, // 嵌入时对应 /sub-app-b/detail
    { path: '/:pathMatch(.*)*', name: 'B404', component: B404 }, // 404 兜底
  ],
});

// 路由守卫：路径匹配兜底
router.beforeEach((to, from, next) => {
  // 嵌入时，若直接访问 /sub-app-b 则跳转到 B 的首页
  if (isEmbedInA && to.path === QIANKUN_PREFIX) {
    next('/');
  }
  // 嵌入时，若路径是 /sub-app-b/xxx 则映射到 B 的 /xxx
  else if (isEmbedInA && to.path.startsWith(QIANKUN_PREFIX + '/')) {
    next(to.path.replace(QIANKUN_PREFIX, ''));
  } else {
    next();
  }
});

export default router;
```
### 2. 遇到的问题
1. 无法解决第二次访问子应用加载空白的问题
    > 有可能是因为路由，组件什么的没有卸载干净，解决不来
2. [dfsa]https://juejin.cn/post/7353447472557637695


## 二、micro-app
### 1. 搭建步骤
- 主应用
1. 安装micro-app核心包： pnpm install @micro-zoe/micro-app --save
2. src/main.js（初始化 micro-app）
```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 后续创建路由

// 引入micro-app并初始化
import microApp from '@micro-zoe/micro-app'

microApp.start({
  // 配置项：禁用沙箱（可选，根据需求）
  // disableSandbox: true,
  // 配置子应用基础路径
  globalAssets: {
    js: [], // 全局js
    css: [] // 全局css
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')
```
3. src/router/index.js（创建主应用路由）
```js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ChildApp from '../views/ChildApp.vue' // 加载子应用的页面

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/child', // 加载子应用的路由
    name: 'ChildApp',
    component: ChildApp
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
```
4. vite.config.js（配置端口和跨域）
```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 3000, // 主应用端口
    cors: true, // 允许跨域（子应用需要）
    open: true // 启动时自动打开浏览器
  }
})
```
5. src/views/Home.vue（主应用首页）
```js
<template>
  <div class="home">
    <h1>主应用（micro-app-main）</h1>
    <div class="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/child">加载子应用B</router-link>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 20px;
}
.nav {
  margin-top: 20px;
  display: flex;
  gap: 20px;
}
.nav a {
  text-decoration: none;
  color: #42b983;
  font-size: 16px;
}
.nav a.active {
  color: #000;
  font-weight: bold;
}
</style>
```
6. src/views/ChildApp.vue（加载子应用的页面）
```js
<template>
    <div class="child-app-container">
      <h2>子应用B容器</h2>
      <micro-app
        name="child-app"
        :src="url"
        :data="microAppData"
        iframe
        baseroute="/child-app"
        disable-memory-router
        @created="handleCreated"
        @beforemount="handleBeforeMount"
        @mounted="handleMounted"
        @unmount="handleUnmount"
        @error="handleError"
      ></micro-app>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const url = ref('')
  const microAppData = ref({ 
    msg: '来自主应用的数据' 
  })
  
  // 根据环境动态设置URL
  onMounted(() => {
    if (process.env.NODE_ENV === 'development') {
      url.value = 'http://localhost:3001/'
    } else {
      url.value = '/child-app/'  // 生产环境路径
    }
  })
  
  // 生命周期函数保持不变
  const handleCreated = () => console.log('子应用创建了')
  const handleBeforeMount = () => console.log('子应用即将被渲染')
  const handleMounted = () => console.log('子应用已经渲染完成')
  const handleUnmount = () => console.log('子应用已经卸载')
  const handleError = () => console.log('子应用加载出错了')
  </script>
```
- 子应用
1. vite.config.js（配置基础路径、端口、跨域）
```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/child/', // 必须与主应用中baseroute一致
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 3001, // 子应用端口（与主应用中url匹配）
    cors: true, // 允许跨域
    open: true
  }
})
```
2. src/main.js（适配 micro-app 挂载 / 卸载）
```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 子应用 src/main.js 极简版（仅注册生命周期）
console.log('【子应用】main.js 执行',window.__MICRO_APP_ENVIRONMENT__,window.microApp); // 看是否打印
window.__MICRO_APP_MOUNT__ = async (props) => {
  console.log('【子应用】__MICRO_APP_MOUNT__ 触发：', props);
  // 临时挂载到 #app，验证是否执行
  createApp(App).use(router).mount('#app');
};
window.__MICRO_APP_UNMOUNT__ = async () => {
  console.log('【子应用】__MICRO_APP_UNMOUNT__ 触发');
};

// 1. 启动时调用
export async function bootstrap() {
  console.log('子应用 bootstrap')
}

// 2. 挂载时调用
export async function mount(props) {
  console.log('子应用 mount', props)
}

// 3. 卸载时调用
export async function unmount() {
  console.log('子应用 unmount')
}

// 4. 更新时调用
export async function update(props) {
  console.log('子应用 update', props)
}
// 将生命周期函数挂载到window上，以便micro-app查找
window[`micro-app-${window .__MICRO_APP_NAME__}`] = {
  bootstrap,
  mount,
  unmount
}
const app = createApp(App).use(router)

app.mount('#app')

```
3. src/router/index.js（子应用路由配置）
```js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// 微前端适配：获取基础路径
const base = window.__MICRO_APP_ENVIRONMENT__ 
  ? window.__MICRO_APP_BASE_ROUTE__ 
  : import.meta.env.BASE_URL

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(base),
  routes
})

export default router
```
4. src/views/Home.vue（子应用首页）
```js
<template>
  <div class="child-home">
    <h1>子应用B（micro-app-child）</h1>
    <div class="nav">
      <router-link to="/">子应用首页</router-link>
      <router-link to="/about">子应用关于页</router-link>
    </div>
    
    <!-- 接收主应用传递的数据 -->
    <div v-if="mainData" class="main-data">
      <h3>主应用传递的消息：{{ mainData.msg }}</h3>
    </div>
    
    <!-- 向主应用发送消息按钮 -->
    <button @click="sendMsgToMain" class="send-btn">
      向主应用发送消息
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const mainData = ref(null)

// 监听主应用传递的数据
onMounted(() => {
  if (window.__MICRO_APP_ENVIRONMENT__) {
    // 获取初始数据
    mainData.value = window.__MICRO_APP_DATA__
    // 监听数据变化
    window.addEventListener('datachange', (e) => {
      mainData.value = e.detail
    })
  }
})

// 向主应用发送消息
const sendMsgToMain = () => {
  if (window.__MICRO_APP_ENVIRONMENT__) {
    window.__MICRO_APP_CHANNEL__.dispatch({
      type: 'child-send',
      data: '子应用B向主应用问好！'
    })
  }
}
</script>

<style scoped>
.child-home {
  padding: 20px;
}
.nav {
  margin: 20px 0;
  display: flex;
  gap: 20px;
}
.nav a {
  text-decoration: none;
  color: #f06;
  font-size: 16px;
}
.nav a.active {
  color: #000;
  font-weight: bold;
}
.main-data {
  margin: 20px 0;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 4px;
}
.send-btn {
  padding: 8px 16px;
  background: #42b983;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
```