<script setup lang="ts">
import { BatteryFull } from 'lucide-vue-next'
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md transition-all duration-300"
  >
    <div class="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
      <div class="flex items-center gap-2">
        <div
          class="h-8 w-8 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20"
        >
          <span class="text-primary-foreground font-bold text-lg select-none">V</span>
        </div>
        <span
          class="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-primary via-primary/80 to-primary/60"
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
        <ThemeToggle />
        <a
          href="https://github.com/lengkuxiaomao/taillwind-shadcn-vue"
          target="_blank"
          rel="noreferrer"
          class="hidden sm:inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium border border-border bg-transparent hover:bg-accent transition-all active:scale-95 shadow-sm"
        >
          <BatteryFull class="h-4 w-4" />
          GitHub
        </a>
      </div>
    </div>
  </header>
</template>
