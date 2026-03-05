import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import { createComponentResolver } from './scripts/resolver'

const componentResolver = createComponentResolver()

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'

  return {
    plugins: [
      vue(),
      vueDevTools(),
      tailwindcss(),
      AutoImport({
        // 自动导入 Vue/Router
        imports: ['vue', 'vue-router'],
        dts: 'src/auto-imports.d.ts',
      }),
      Components({
        dirs: [], // 全部通过 resolver 实现精确按需加载
        dts: 'src/components.d.ts',
        resolvers: [componentResolver],
      }),
    ],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    // 开发服务器配置
    server: {
      host: true, // 支持局域网地址访问
      port: 5999,
    },

    // 生产环境优化
    esbuild: {
      // 移除 console.log 和 debugger
      drop: isProd ? ['console', 'debugger'] : [],
    },

    build: {
      // 分包策略：降低单个 chunk 大小，优化浏览器并发加载
      rollupOptions: {
        output: {
          manualChunks: {
            'vue-vendors': ['vue', 'vue-router', 'pinia', '@vueuse/core'],
            'ui-vendors': ['reka-ui', 'lucide-vue-next', 'clsx', 'tailwind-merge'],
          },
        },
      },
      chunkSizeWarningLimit: 1000,
    },
  }
})
