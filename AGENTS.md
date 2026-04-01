# 🏗️ 项目架构与开发者指南 (agents.md)

本文件详细说明了 **Tailwind + Shadcn-vue Modern Starter** 的技术框架、代码规范、最佳实践以及组件使用指南，旨在指导开发者（及 AI 代理）保持代码高质量与一致性。

---

## 🚀 1. 技术架构 (Technology Framework)

- **核心框架**: Vue 3.5+ (Composition API, `<script setup>`), Vite 7, TypeScript.
- **样式方案**: **Tailwind CSS v4** (纯 CSS 引擎，不再依赖 `tailwind.config.js`，通过 CSS 变量配置)。
- **UI 组件**: **Shadcn-vue** (底层基于 `reka-ui` 无头组件库), Lucide Vue Next 图标。
- **状态 & 路由**: Pinia (现代状态管理), Vue Router 5+.
- **工程化构建**:
  - **Oxlint**: 极速代码检查，比 ESLint 快 50-100 倍。
  - **Auto Import**: 自动导入 Vue API 与 组件，减少冗余代码。

### 🍍 1.1 状态管理规范 (Pinia)

- **风格模式**: 强制使用 **Setup Store** 模式（即 `defineStore('id', () => { ... })`），保持与 Vue Composition API 风格一致。
- **模块化要求**: **必须**根据业务场景进行模块化拆分。严禁将所有业务逻辑和状态挤在单个 Store 中。
- **目录结构**: 所有 Store 存放于 `src/stores/`，每个 Store 对应一个独立文件，以最大限度减少模块间耦合。
- **持久化**: 确需持久化时，优先使用 `@vueuse/core` 的 `useStorage` 手动实现。

---

## 🧩 2. Shadcn UI 组件使用指引

项目中的 UI 组件库位于 `src/components/ui`，它是整个应用视觉一致性的基础。

### 📜 优先级与选型原则

本项目旨在作为 **AI 辅助编码 (AI-Native)** 的最佳实践，UI 组件的选择必须遵循以下严格优先级：

1.  **第一优先级：Shadcn UI 组件**
    - 当需要基础或通用 UI 组件（如弹窗、选择器、进度条等）时，**必须优先**查找 [Shadcn UI 组件库](https://www.shadcn-vue.com/docs/components)。
    - 通过 CLI `npx shadcn-vue@latest add` 获取，确保代码在本地可见且可由 AI 深度定制。
2.  **第二优先级：AI 生成或手写的业务组件**
    - 存放于 `src/components/common`。
    - 当 Shadcn 无法满足特定业务需求时，利用 AI 或手动编写本地化组件，保持对逻辑的完全掌控。
3.  **最低优先级：第三方重型组件库**
    - **严禁**随意引入 Element Plus 或 Ant Design 等完整组件库。
    - 仅在 Shadcn 和本地实现均无法满足极端复杂的特定场景时才考虑，旨在保持项目轻量与高度定制化。

### 🛠️ 添加新组件

使用 Shadcn 官方 CLI 保持目录结构一致：

```bash
npx shadcn-vue@latest add [组件名]
```

> **注意**: 组件会自动下载到 `@/components/ui/` 目录下。

### 🏷️ 智能自动导入与 `ni-` 前缀

项目配置了自定义解析器 (`scripts/resolver.ts`):

- **自动前缀**: 所有位于 `src/components/ui` 下的组件在模板中会自动添加 **`ni-`** 前缀（PascalCase 下为 **`Ni`**）。
  - 示例: `Button.vue` 导出的 `Button` 组件在模板中使用为 `<ni-button>`。
  - 示例: `Card.vue` 导出的 `Card` 组件在模板中使用为 `<ni-card>`。
- **无需手动 Import**: 由于 `unplugin-vue-components` 的作用，无需在 `<script setup>` 中手动引入组件。

### 📂 强约束目录结构

为了确保 `scripts/resolver.ts` 能够正确扫描并自动导入组件，所有组件必须遵循以下结构：

- `src/components/ui/[ComponentName]/index.ts` (负责导出组件及变体定义)
- `src/components/ui/[ComponentName]/[ComponentName].vue` (组件主文件)
- **注意**: 严禁在 `components/ui` 根目录下直接放置 `.vue` 文件。

---

## 💎 3. 代码规范与最佳实践

### 📂 目录定义

- **`src/lib/utils.ts`**: 核心工具函数（包含 `cn` 合并 Tailwind 类名的关键工具）。
- **`src/composables/`**: 业务逻辑抽离（Hook），命名统一以 `use` 开头（如 `useMention.ts`）。
- **`src/components/common/`**: 存放业务强相关组件（Header, ThemeToggle）或通用布局组件。
- **`src/views/`**: 存放页面级组件。

### ✍️ 命名与开发习惯

1.  **组件命名**: 组件文件及导出统一使用 **PascalCase** (大驼峰)。
2.  **Vue 标准**: 强力强制使用 `<script setup lang="ts">`。
3.  **属性定义**: 使用 `defineProps` 和 `defineEmits` 并配合 TypeScript 接口，确保类型安全。
4.  **Tailwind 编写**:
    - 使用 `@/lib/utils` 中的 `cn()` 函数处理动态类名。
    - 优先使用 Tailwind v4 的 CSS 变量自定义颜色或主题。

### 🎨 3.1 样式与主题扩展 (Tailwind v4)

- **配置入口**: 所有主题扩展、颜色预设、半径定义均在 `src/assets/styles/main.css` 中完成。
- **CSS 变量**: 优先使用 `@theme` 指令结合 CSS 变量扩展主题，而非传统的 `tailwind.config.js`。
- **原子化优先**: 尽量直接使用 Tailwind 工具类，仅在 CSS 中定义核心 Tokens（如主要颜色、圆角）。

---

## 🛠️ 4. 工具链维护

- **代码检查**:
  - `npm run lint`: 同时运行 Oxlint 和 ESLint。Oxlint 负责逻辑与性能，ESLint 负责 Vue/TS 兼容。
- **格式化**: `npm run format` (基于 Prettier)。
- **类型定义库**: 严禁手动修改 `src/auto-imports.d.ts` 和 `src/components.d.ts`。如果发现类型未更新，请重启 Vite 开发服务器。
- **路径引用**: 全局强制使用 **`@/`** 前缀引用 `src` 下的内容。
- **环境要求**: Node.js v20.19.0+ 或 v22.12.0+。

---

_本指南确保了项目在扩展过程中的代码质量。在进行任何代码修改或功能开发时，请严格遵守上述约定。_
