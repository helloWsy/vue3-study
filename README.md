# vue3_study

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### tips
需要将源代码从 01_代码 文件夹中移出调整目录以运行

### Vue2和Vue3
2020年9月发布的正式版
Vue3支持大多数Vue2的特性
Vue3中设计了一套强大的组合API代替了Vue2中的option API,复用性更强了
更好的支持TS
最主要: Vue3中使用了Propxy配合Reflect 代替了 Vue2中的 Object.defineProperty()方法实现数据的响应式(数据代理)
重写了虚拟DOM,速度更快了
新的组件: Fragment(片段) / Teleport(瞬移) / Suspense(不确定)
设计了一个新的脚手架工具,vite