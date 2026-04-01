# ✨ Tailwind + Shadcn-vue Modern Starter (Ni-V4 Edition)

<p align="center">
  <img src="./public/self.png" width="80" height="80" style="border-radius: 20%; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
</p>

<p align="center">
  <strong>一款基于 Vue 3 + Vite 7 + TypeScript + Tailwind v4 的极简且强大的“AI-Native”现代化开发模版。</strong>
</p>

<p align="center">
  <a href="#-核心特性">核心特性</a> •
  <a href="#-技术栈">技术栈</a> •
  <a href="#-快速开始">快速开始</a> •
  <a href="#-项目结构">项目结构</a> •
  <a href="#-开发规范">开发规范</a>
</p>

---

## 🚀 项目理念 (Philosophy)

本项目致力于通过采用最前沿的 Web 开发工具（如 **Tailwind CSS v4** 和 **Shadcn-vue**），构建一个体积小、速度快、且深度支持 **AI 辅助编码** 的现代化样板工程。

- **原子化设计**: 利用 Tailwind v4 的极速 CSS 引擎，抛弃沉重的配置，拥抱原生 CSS 变量。
- **AI-Native**: 为开发者（及 AI 代理）量身定制，通过统一组件库 (Shadcn-vue) 和 自动导入 (Auto Imports) 机制，极大提升开发效率。
- **沉浸式 UI**: 深度集成玻璃质感 (Glassmorphism)、流畅的微交互与响应式动态布局。

---

## ✨ 核心特性 (Features)

### 🎨 1. Tailwind CSS v4 & Vite 7 (The Speed)
- **零配置体验**: 告别 `tailwind.config.js`，通过 CSS 指令直接在项目样式中扩展主题。
- **高性能引擎**: 极致的响应速度，利用全新的编译技术使构建和刷新快如闪电。

### 📦 2. Shadcn-vue (Unified Components)
- **`ni-` 前缀**: 深度定制组件解析器。位于 `src/components/ui` 下的组件可直接使用 `<ni-[component]>` 前缀（如 `<ni-button>`、`<ni-card>`）。
- **零配置导入**: 基于 `unplugin-vue-components` 实现组件级自动按需导入，无需手动引用。


### ⚡ 3. 极致工程化 (Tooling)
- **Oxlint**: 使用高性能 Oxlint 取代部分 ESLint 规则，带来 50-100 倍的代码检查提速。
- **Auto Import**: 自动导入 Vue、Vue Router、Pinia、VueUse 等基础 API。
- **TypeScript**: 完备的类型安全增强，配合 `vue-tsc` 进行严格静态检查。

---

## 🛠 技术栈 (Tech Stack)

| 核心库 | 描述 | 版本 |
| :--- | :--- | :--- |
| **Vue 3.5+** | 组合式 API (Setup Script) 核心框架 | Latest |
| **Vite 7** | 下一代前端构建工具 (Vite 7) | ^7.3.1 |
| **TypeScript** | 工业级类型检查 | ^5.9.3 |
| **Tailwind v4** | 现代原子化 CSS 引擎 | ^4.2.1 |
| **Shadcn-vue** | 基于 Reka-ui 的无头 UI 组件体系 | ^2.9.2 |
| **Ky** | 现代、微型且基于 Promise 的 HTTP 客户端 | ^1.14.3 |
| **Pinia** | 设置感十足的 Setup Store 状态库 | ^3.0.4 |
| **Lucide Vue** | 像素完美的轻量图标库 | ^0.576.0 |
| **Oxlint** | 极速 JavaScript 静态检查工具 | ^1.50.0 |

---

## 🏁 快速开始 (Quick Start)

### 1. 检出与安装

```bash
# 建议使用 pnpm 以获得更好的性能
npm install
```

### 2. 开发模式

```bash
npm run dev
```

### 3. 构建与预览

```bash
# 构建生产版本 (包含静态检查)
npm run build

# 本地预览构建产物
npm run preview
```

### 4. 代码质量管理

```bash
# 运行 Lint 检查 (Oxlint + ESLint 并行)
npm run lint

# 运行代码格式化 (Prettier)
npm run format
```

---

## 📂 项目目录结构 (Project Layout)

```text
src/
├── assets/             # 全局样式 (styles/main.css)、字体与多媒体资源
├── components/         # 级联组件目录
│   ├── common/         # 业务强相关通用组件 (ThemeToggle, Layouts)
│   └── ui/             # Shadcn-vue 基础组件库 (已开启 ni- 前缀自动导入)
├── composables/        # 共享逻辑 Hooks (useTheme 等)
├── http/               # 基于 Ky 封装的 HTTP 模块 (拦截器、业务响应处理)
├── lib/                # 核心库二次封装与工具函数 (utils.ts / cn 助手)
├── router/             # 扁平化的路由管理
├── services/           # 业务接口 Service 层 (数据接入与聚合)
├── stores/             # Pinia Setup Store 状态树 (模块化拆分)
├── views/              # 页面容器级组件
└── App.vue             # 入口组件
```

---

## 💎 开发规范 (Guidelines)

> [!IMPORTANT]
> 为了维持项目的代码整洁度与视觉一致性，请务必遵循以下规范：

1. **组件前缀**: 使用 UI 组件时，强制使用 **`ni-`** 前缀（例如：`<ni-button variant="outline">`）。
2. **状态管理**: 强制使用 **Setup Store** 模式编写 Pinia Store。
3. **样式处理**: 优先使用 Tailwind 工具类。如有自定义需求，应在 `src/assets/styles/main.css` 中配置 `@theme`。
4. **组件添加**: 必须通过 CLI 命令 `npx shadcn-vue@latest add [name]` 添加新组件，严禁手动复制。
5. **AI 协作**: 本项目是 **AI-Native** 设计。推荐在 AI 指令中引用 `agents.md` 以获得最高质量的代码补全。

---

## 📄 开源许可证

本项目基于 [MIT License](LICENSE) 协议发布。

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/Lengkuxiaomao">Lengkuxiaomao</a>
</p>
