<script setup lang="ts">
import { CheckCircle2, Globe, Cpu, Palette } from 'lucide-vue-next'

const stats = [
  { label: '性能', value: '100', icon: Cpu },
  { label: '可访问性', value: '100', icon: Globe },
  { label: '最佳实践', value: '100', icon: CheckCircle2 },
  { label: 'SEO', value: '100', icon: Palette },
]
</script>

<template>
  <div class="py-20 space-y-20">
    <!-- 关于介绍 -->
    <section class="text-center space-y-6 max-w-3xl mx-auto px-6">
      <ni-badge variant="outline" class="px-4 py-1 border-primary/20 bg-primary/5 text-primary">
        Project Mission
      </ni-badge>
      <h1 class="text-4xl md:text-5xl font-black tracking-tighter">
        打造下一代
        <br />
        <span
          class="bg-linear-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent italic"
          >Web 开发体验</span
        >
      </h1>
      <p class="text-lg text-muted-foreground leading-relaxed">
        该模板旨在为开发人员提供坚实的基础，以便构建 可扩展、高性能的应用程序，同时又不牺牲美观性。
      </p>
    </section>

    <!-- 数据 -->
    <section class="container mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        <ni-card
          v-for="stat in stats"
          :key="stat.label"
          class="bg-white/50 dark:bg-black/50 border-neutral-200 dark:border-neutral-800 backdrop-blur-sm rounded-3xl overflow-hidden group hover:border-primary/50 transition-all"
        >
          <ni-card-content class="p-8 text-center space-y-4">
            <div
              class="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto group-hover:scale-110 transition-transform"
            >
              <component :is="stat.icon" class="w-6 h-6" />
            </div>
            <div>
              <p class="text-3xl font-black">{{ stat.value }}</p>
              <p class="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                {{ stat.label }}
              </p>
            </div>
          </ni-card-content>
        </ni-card>
      </div>
    </section>

    <!-- 详细内容 -->
    <section
      class="container mx-auto max-w-5xl px-6 lg:px-8 bg-neutral-900 dark:bg-neutral-800/50 rounded-[40px] p-8 md:p-16 text-white overflow-hidden relative group"
    >
      <div
        class="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"
      ></div>

      <div class="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <h2 class="text-3xl font-bold tracking-tight">为什么选择这个技术栈？</h2>
          <ul class="space-y-4">
            <li
              v-for="item in [
                '使用 TypeScript 实现类型安全',
                '使用 Tailwind v4 的原子风格',
                '来自 Shadcn 的 UI 组件',
                '使用 Vite 快速开发和构建',
              ]"
              :key="item"
              class="flex items-center gap-3"
            >
              <div class="h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle2 class="h-3 w-3 text-emerald-400" />
              </div>
              <span class="text-neutral-300">{{ item }}</span>
            </li>
          </ul>
          <ni-button
            variant="secondary"
            size="lg"
            class="rounded-full px-8 bg-white text-black hover:bg-neutral-200"
          >
            Read Docs
          </ni-button>
        </div>
        <div class="hidden md:block">
          <div class="p-1 rounded-3xl bg-linear-to-br from-white/20 to-transparent">
            <div
              class="aspect-square bg-neutral-950 rounded-[22px] flex items-center justify-center text-6xl font-black italic text-neutral-800 select-none"
            >
              STACK
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
