# ✨ Tailwind + Shadcn-vue Modern Starter (Ni-V4 Edition)

<p align="center">
  <img src="./public/self.png" width="80" height="80" style="border-radius: 20%; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
</p>

<p align="center">
  <strong>一款基于 Vue 3 + Vite 7 + TypeScript + Tailwind v4 的极简且强大的“AI-Native”现代化开发模版。</strong>
</p>

<p align="center">
  <a href="#-核心要素优势分析">核心优势</a> •
  <a href="#-技术栈">技术栈</a> •
  <a href="#-快速开始">快速开始</a> •
  <a href="#-项目结构">项目结构</a> •
  <a href="#-开发规范">开发规范</a>
</p>

---

## 🚀 项目理念 (Philosophy)

本项目致力于通过采用最前沿的 Web 开发工具（如 **Tailwind CSS v4** 和 **Shadcn-vue**），构建一个体积小、速度快、且深度支持 **AI 辅助编码** 的现代化样板工程。

---

## ✨ 核心要素优势分析 (Core Advantages)

### ⚡ 1. 极致的开发效率与响应速度 (Performance & DX)
- **Vite 7 + Oxlint**: 采用行业顶尖构建与巡检工具。Oxlint 提速 50-100 倍，万行代码秒级热更新与校验。
- **Auto Import**: API 与 UI 组件按需自动导入。配合 **`ni-`** 前缀解析，告别繁琐 `import`，代码纯净如初。

### 🎨 2. 现代化的样式引擎 (Next-Gen Styling)
- **Tailwind CSS v4**: Next-Gen 纯 CSS 引擎。告别配置地狱，完全基于 CSS 变量驱动主题扩展与动态渲染。
- **Shadcn + Reka UI**: 顶级 Headless 组件方案。100% 逻辑掌控力，兼顾原子化样式的灵活性与深度定制需求。

### 🏗️ 3. 严谨且解耦的软件架构 (Architecture)
- **Service 层模式**: 强制业务与视图分离。Service 层统一收口接口请求，使 Store 专注状态，逻辑链路清晰透明。
- **Ky 现代请求系统**: 基于 Fetch API 的现代化请求流。深度封装拦截器与业务模型，轻松应对复杂的生产环境。

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
