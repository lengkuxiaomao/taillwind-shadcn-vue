<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import { Sun, Moon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const { mode, theme, toggleMode, setTheme } = useTheme()
</script>

<template>
  <div class="flex items-center gap-2 p-2 bg-card border rounded-xl shadow-lg backdrop-blur-md">
    <!-- Mode Toggle -->
    <Button
      variant="ghost"
      size="icon"
      class="rounded-lg transition-all duration-300 hover:bg-accent"
      @click="toggleMode"
    >
      <Sun v-if="mode === 'dark'" class="w-5 h-5 text-yellow-400 animate-in zoom-in spin-in-90" />
      <Moon v-else class="w-5 h-5 text-slate-700 animate-in zoom-in spin-in-90" />
    </Button>

    <div class="w-px h-6 bg-border mx-1" />

    <!-- Theme Selector -->
    <div class="flex gap-1.5">
      <button
        class="w-8 h-8 rounded-full border-2 transition-all hover:scale-110"
        :class="
          theme === 'default' ? 'border-primary ring-2 ring-primary/20' : 'border-transparent'
        "
        title="Default Theme"
        @click="setTheme('default')"
      >
        <div class="w-full h-full rounded-full bg-slate-900 dark:bg-slate-100" />
      </button>

      <button
        class="w-8 h-8 rounded-full border-2 transition-all hover:scale-110"
        :class="theme === 'rose' ? 'border-primary ring-2 ring-primary/20' : 'border-transparent'"
        title="Rose Theme"
        @click="setTheme('rose')"
      >
        <div class="w-full h-full rounded-full bg-rose-500" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.animate-in {
  animation-duration: 0.5s;
}
</style>
