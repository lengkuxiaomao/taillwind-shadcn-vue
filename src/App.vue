<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Github } from 'lucide-vue-next'
</script>

<template>
  <div
    class="min-h-screen bg-neutral-50 dark:bg-neutral-900 font-sans text-neutral-900 dark:text-neutral-100"
  >
    <!-- Premium Header -->
    <header
      class="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md transition-all duration-300"
    >
      <div class="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div class="flex items-center gap-2">
          <div
            class="h-8 w-8 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20"
          >
            <span class="text-primary-foreground font-bold text-lg select-none">V</span>
          </div>
          <span
            class="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-neutral-900 via-neutral-600 to-neutral-400 dark:from-white dark:via-neutral-300 dark:to-neutral-500"
          >
            Vitesse Vue
          </span>
        </div>

        <nav class="hidden md:flex items-center gap-8">
          <RouterLink
            to="/"
            class="text-sm font-medium transition-colors hover:text-primary active-link group relative"
          >
            Home
            <span
              class="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"
            ></span>
          </RouterLink>
          <RouterLink
            to="/about"
            class="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground group relative"
          >
            About
            <span
              class="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"
            ></span>
          </RouterLink>
        </nav>

        <div class="flex items-center gap-4">
          <a
            href="https://github.com/shadcn-vue"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium border border-neutral-200 dark:border-neutral-800 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all active:scale-95 shadow-sm"
          >
            <Github class="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </header>

    <!-- Page Content -->
    <main>
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>

    <!-- Footer -->
    <footer class="border-t py-12 bg-white dark:bg-neutral-900 mt-20">
      <div class="container mx-auto max-w-7xl px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <p class="text-sm text-neutral-foreground">
            © 2026 Vitesse Vue. All rights reserved. Built with ❤️ and Shadcn-vue.
          </p>
          <div class="flex items-center gap-6">
            <span class="text-xs font-mono text-neutral-400 uppercase tracking-widest"
              >Vue 3 + Vite + Tailwind v4</span
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.router-link-active {
  color: var(--color-primary) !important;
}
</style>
