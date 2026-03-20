# ✨ Tailwind + Shadcn-vue Modern Starter

<p align="center">
  <img src="./public/self.png" width="80" height="80" />
</p>

<p align="center">
  <strong>一款基于 Vue 3 + Vite + TypeScript + Shadcn-vue + Pinia + Vue Router 的极简且强大的现代化开发模版。</strong>
</p>

<p align="center">
  <a href="#-特性">特性</a> •
  <a href="#-技术栈">技术栈</a> •
  <a href="#-快速开始">快速开始</a> •
  <a href="#-项目结构">项目结构</a>
</p>

---

## 🚀 项目理念

本项目旨在通过采用最前沿的 Web 开发理念（如 **Tailwind CSS v4** 和 **Shadcn-vue**），彻底抛弃厚重的传统组件库与冗余的 CSS 文件。

- **原子化设计**: 利用 Tailwind v4 极大地减少 CSS 体积。
- **无头组件**: Shadcn-vue 提供高度可定制的 UI 基础，确保设计风格的灵活性。
- **极致体验**: 集成了流畅的动画效果、磨砂玻璃质感 (Glassmorphism) 以及响应式布局。

---

## ✨ 核心特性

- 🛠 **Tailwind CSS v4 & Vite 7**: 享受极速的构建体验与更强大的 CSS 工具集。
- 📦 **Shadcn-vue (ni-prefix)**: 预置了一系列精美的 UI 组件（Badge, Button, Card, Checkbox, ScrollArea）。
- 🏷 **@提及系统 (Mention System)**: 在 `AboutView` 中实现了一个极具创意的 `@` 提及功能，支持：
  - **图片一键插入**: 输入 `@` 调起菜单。
  - **动态预览**: 鼠标悬停显示缩略图，点击查看高清大图。
  - **富文本体验**: 基于 `contenteditable` 的拟合交互。
- 🍍 **Pinia 状态管理**: 简洁的模块化状态管理方案。
- 🎨 **现代美学**: 深度集成 Lucide 图标库，支持深色模式与动态渐变色。

---

## 🛠 技术栈

| 核心库              | 描述                                                  |
| :------------------ | :---------------------------------------------------- |
| **Vue 3.5+**        | 组合式 API (Composition API) 与 组合式 Script Setup。 |
| **Vite 7**          | 下一代前端工具链，极速热重载。                        |
| **TypeScript**      | 完备的类型安全检查。                                  |
| **Tailwind CSS v4** | 现代原子化 CSS 框架。                                 |
| **Shadcn-vue**      | 基于 Reka-ui 构建的无头 UI 组件库。                   |
| **Pinia**           | 现代化的 Vue 状态管理库。                             |
| **Lucide Vue Next** | 轻量级、精美的图标库。                                |
| **Oxlint**          | 最新一代极速 JavaScript/TypeScript 检查工具。         |

---

## 🧩 Shadcn-vue 使用指南

本项目深度集成了 [Shadcn-vue](https://www.shadcn-vue.com)，并进行了工程化优化。

### 1. 官方文档

访问 [shadcn-vue.com](https://www.shadcn-vue.com) 获取完整的组件列表和 API 参考。

### 2. 添加新组件

使用 shadcn-vue CLI 可以在项目中快速添加新组件：

```bash
npx shadcn-vue@latest add [组件名]
```

> **注意**: 组件会自动下载到 `src/components/ui` 目录下。

### 3. 组件自动导入与 `ni-` 前缀

为了保持代码整洁并提升开发效率，项目配置了 **组件自动导入** 功能：

- **无需手动 Import**: 直接在模板中使用即可。
- **自定义前缀**: 所有位于 `src/components/ui` 下的组件都已通过自定义解析器自动添加了 `ni-` (或 PascalCase 的 `Ni`) 前缀。
  - 例如：`Button` 组件在模板中使用为 `<ni-button>`。
  - 例如：`Card` 组件在模板中使用为 `<ni-card>`。

---

## 📂 项目结构

```bash
src/
├── assets/             # 静态资源 (图片, 全局样式)
├── components/         # 共享组件
│   ├── common/         # 通用组件 (Header, Footer, ThemeToggle)
│   └── ui/             # Shadcn-vue 基础组件库
├── views/              # 路由页面
│   ├── HomeView.vue    # 首页 (特性展示, 状态管理演示)
│   └── AboutView.vue   # 关于页 (@提及系统核心演示)
├── stores/             # Pinia 状态树
├── router/             # Vue Router 配置
└── lib/                # 工具函数与库配置
```

---

## 🏁 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 开发环境启动

```bash
npm run dev
```

### 3. 生产环境构建

```bash
npm run build
```

### 4. 代码质量检查

```bash
# 运行 ESLint 和 Oxlint 检查
npm run lint

# 自动格式化代码
npm run format
```

---

## 🔧 自定义配置

如需修改 Vite、TypeScript 或 Tailwind 的配置，请参考以下文件：

- `vite.config.ts`
- `tailwind.config.ts` (或在 CSS 中配置 v4)
- `tsconfig.json`

---

## 📄 许可证

本项目遵循 [MIT License](LICENSE) 协议。

---

<p align="center">
  Built with ❤️ by Developer
</p>
