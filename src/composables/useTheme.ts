import { useColorMode, useStorage } from '@vueuse/core'
import { watch } from 'vue'

export type ColorTheme = 'default' | 'rose'

export function useTheme() {
  // Light/Dark mode management
  const mode = useColorMode({
    attribute: 'class',
    modes: {
      dark: 'dark',
      light: '',
    },
  })

  // Specific color theme management (e.g., rose, blue, etc.)
  const theme = useStorage<ColorTheme>('app-theme', 'default')

  // Sync theme class to html element
  watch(
    theme,
    (newTheme, oldTheme) => {
      const html = document.documentElement
      if (oldTheme && oldTheme !== 'default') {
        html.classList.remove(`theme-${oldTheme}`)
      }
      if (newTheme && newTheme !== 'default') {
        html.classList.add(`theme-${newTheme}`)
      }
    },
    { immediate: true },
  )

  return {
    mode,
    theme,
    toggleMode: () => {
      mode.value = mode.value === 'dark' ? 'light' : 'dark'
    },
    setTheme: (newTheme: ColorTheme) => {
      theme.value = newTheme
    },
  }
}
