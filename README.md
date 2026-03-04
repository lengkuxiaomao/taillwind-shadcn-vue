# 这是一个最新基于 Vue 3 + Vite + TypeScript + Shadcn-vue + Pinia + Vue Router 的 vue项目.

当前项目采用最新web最新的流行理念，抛弃了传统的scss/less 和elementui组件库，采用tailwind css 和shadcn-vue 无头组件，减少大项目css文件体积过大的问题，降低css的维护成本.
icon采用 lucide-vue-next 图标库.

## 推荐IDE设置

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## 推荐浏览器设置

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## 支持Vue3.5.29和完整的TS类型检查

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## 自定义配置

See [Vite Configuration Reference](https://vite.dev/config/).

## 项目起步

```sh
npm install
```

### 开发环境运行

```sh
npm run dev
```

### 生产打包

```sh
npm run build
```

### 运行ESLint检查

```sh
npm run lint
```
