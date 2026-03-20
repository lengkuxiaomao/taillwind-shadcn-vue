import { useColorMode, useStorage } from '@vueuse/core'
export type ColorTheme = 'default' | 'rose'

export function useTheme() {
  // 模式管理
  const mode = useColorMode({
    attribute: 'class',
    initialValue: 'light',
    modes: {
      dark: 'dark',
      light: '',
    },
  })

  // 主题色管理
  const theme = useStorage<ColorTheme>('app-theme', 'default')

  // 同步主题色到html根节点
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
