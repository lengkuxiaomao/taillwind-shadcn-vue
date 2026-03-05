<script setup lang="ts">
import { CheckCircle2, Globe, Cpu, Palette } from 'lucide-vue-next'

const stats = [
  { label: 'Performance', value: '100', icon: Cpu },
  { label: 'Accessibility', value: '100', icon: Globe },
  { label: 'Best Practices', value: '100', icon: CheckCircle2 },
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
        Building the next generation of <br />
        <span
          class="bg-linear-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent italic"
          >Web Experiences</span
        >
      </h1>
      <p class="text-lg text-muted-foreground leading-relaxed">
        This boilerplate is designed to provide developers with a rock-solid foundation for building
        scalable, high-performance applications without compromising on aesthetic quality.
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
          <h2 class="text-3xl font-bold tracking-tight">Why this stack?</h2>
          <ul class="space-y-4">
            <li
              v-for="item in [
                'Type-safety with TypeScript',
                'Atomic styling with Tailwind v4',
                'UI Components from Shadcn',
                'Fast HMR with Vite',
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
