<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { Rocket, Layers, ShieldCheck, Zap, ArrowRight } from 'lucide-vue-next'

const counter = useCounterStore()

const features = [
  {
    title: 'Vue 3 + Vite',
    description: 'The progressive JavaScript framework with the fastest build tool.',
    icon: Rocket,
    color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
  {
    title: 'TypeScript',
    description: 'Type safety out of the box for scalable development.',
    icon: ShieldCheck,
    color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  },
  {
    title: 'Tailwind CSS v4',
    description: 'A utility-first CSS framework for rapid UI development.',
    icon: Zap,
    color: 'bg-sky-500/10 text-sky-600 dark:text-sky-400',
  },
  {
    title: 'Shadcn-vue',
    description: 'Beautifully designed components built with Radix-vue.',
    icon: Layers,
    color: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
  },
]
</script>

<template>
  <div class="space-y-24 pb-20 overflow-hidden">
    <!-- Hero Section -->
    <section class="relative pt-20 pb-16 md:pt-32 md:pb-24">
      <div class="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          class="absolute top-[0%] left-[50%] -translate-x-1/2 w-[1000px] h-[600px] bg-linear-to-b from-primary/10 via-transparent to-transparent blur-[120px] rounded-full opacity-60"
        ></div>
        <div
          class="absolute bottom-[-10%] right-[10%] w-[300px] h-[300px] bg-sky-500/20 blur-[100px] rounded-full"
        ></div>
      </div>

      <div class="container mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-8">
        <div class="flex justify-center">
          <Badge
            variant="secondary"
            class="px-3 py-1 text-xs tracking-wider uppercase font-semibold bg-neutral-200/50 dark:bg-neutral-800/50 backdrop-blur-sm border-neutral-300 dark:border-neutral-700"
          >
            Now with Tailwind CSS v4 & Shadcn-vue
          </Badge>
        </div>

        <h1
          class="text-5xl md:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.1]"
        >
          Modern Vue Stack <br />
          <span
            class="bg-linear-to-r from-primary to-indigo-500 bg-clip-text text-transparent italic"
            >Redefined</span
          >
        </h1>

        <p
          class="mx-auto max-w-2xl text-xl text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed"
        >
          Crafting premium web experiences with Vue 3, Vite, TypeScript, and the power of atomic
          styling.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4 mt-12">
          <Button
            size="lg"
            class="shadow-xl shadow-primary/30 h-12 px-8 text-md font-semibold rounded-full group transition-all active:scale-95"
          >
            Get Started
            <ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            class="h-12 px-8 text-md font-semibold bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-full border-neutral-300 dark:border-neutral-700 transition-all active:scale-95"
          >
            Documentation
          </Button>
        </div>
      </div>
    </section>

    <!-- State Management Demo -->
    <section class="container mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-stretch gap-12">
        <div class="flex-1 space-y-6 flex flex-col justify-center">
          <h2 class="text-3xl font-bold tracking-tight">Reactive State Management</h2>
          <p class="text-lg text-muted-foreground leading-relaxed">
            Experience the seamless integration of Pinia stores with our design system. Real-time
            reactivity paired with beautiful animations.
          </p>
          <div class="flex items-center gap-6 pt-4">
            <div class="space-y-2">
              <span class="text-xs font-mono uppercase tracking-widest text-neutral-400"
                >Current Count</span
              >
              <p class="text-4xl font-black tabular-nums font-mono text-primary">
                {{ counter.count }}
              </p>
            </div>
            <div class="h-12 w-px bg-neutral-200 dark:bg-neutral-800"></div>
            <div class="space-y-2">
              <span class="text-xs font-mono uppercase tracking-widest text-neutral-400"
                >Computed ×2</span
              >
              <p class="text-4xl font-black tabular-nums font-mono text-indigo-400">
                {{ counter.doubleCount }}
              </p>
            </div>
          </div>
          <div class="pt-4 flex gap-3">
            <Button
              @click="counter.increment()"
              class="rounded-xl px-6 py-6 h-auto transition-all active:scale-90"
            >
              Increment Count
            </Button>
          </div>
        </div>

        <div class="flex-1">
          <Card
            class="h-full bg-white/40 dark:bg-black/40 backdrop-blur-xl border-neutral-200 dark:border-neutral-800 shadow-2xl rounded-[32px] p-8"
          >
            <pre
              class="bg-neutral-900 text-neutral-100 p-8 rounded-2xl overflow-x-auto text-[13px] leading-relaxed font-mono shadow-inner select-none"
            >
<code><span class="text-indigo-400">export const</span> <span class="text-emerald-400">useCounterStore</span> = <span class="text-amber-400">defineStore</span>('<span class="text-sky-400">counter</span>', () => {
  <span class="text-indigo-400">const</span> count = <span class="text-sky-400">ref</span>(0)
  <span class="text-indigo-400">const</span> doubleCount = <span class="text-sky-400">computed</span>(() => <span class="text-emerald-400">count</span>.value * 2)
  <span class="text-indigo-400">function</span> <span class="text-amber-400">increment</span>() {
    <span class="text-emerald-400">count</span>.value++
  }

  <span class="text-indigo-400">return</span> { count, doubleCount, increment }
})</code></pre>
            <div class="mt-6 flex items-center justify-between">
              <span class="text-xs text-muted-foreground">src/stores/counter.ts</span>
              <Badge variant="outline" class="font-mono text-[10px] opacity-70">typescript</Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="container mx-auto max-w-7xl px-6 lg:px-8 pt-12">
      <div class="text-center mb-16 space-y-4">
        <h2 class="text-3xl font-bold tracking-tight">The Tech Stack</h2>
        <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
          Built with selection of industry-leading tools for the best developer experience.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          v-for="feature in features"
          :key="feature.title"
          class="group hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-3xl"
        >
          <CardHeader>
            <div
              :class="[
                'w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-500',
                feature.color,
              ]"
            >
              <component :is="feature.icon" class="w-6 h-6" />
            </div>
            <CardTitle class="text-xl font-bold">{{ feature.title }}</CardTitle>
            <CardDescription class="text-base leading-relaxed pt-2">
              {{ feature.description }}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  </div>
</template>
