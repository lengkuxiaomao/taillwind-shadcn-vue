import path from 'node:path'
import fs from 'node:fs'

/**
 * 组件解析器：用于扫描组件库并建立导出映射，提升 Vite 开发性能
 */
export function createComponentResolver() {
  const componentMap: Record<string, { name?: string; from: string }> = {}
  const componentsRoot = path.resolve(process.cwd(), 'src/components')

  /**
   * 更加健壮的导出解析：支持多行导出和 default as 模式
   */
  const parseIndexExports = (indexPath: string, relBase: string, prefix = '') => {
    try {
      const content = fs.readFileSync(indexPath, 'utf-8')
      // 正则支持：export { ... } from '...' 结构，捕获大写开头的组件名
      const matches = content.matchAll(
        /export\s+\{[\s\S]*?\b(?:as\s+)?([A-Z][a-zA-Z0-9]+)\b[\s\S]*?\}\s+from/g,
      )
      for (const match of matches) {
        const componentName = match[1]
        if (componentName) {
          const finalName = `${prefix}${componentName}`
          componentMap[finalName] = {
            name: componentName,
            from: `@/components/${relBase}`,
          }
        }
      }
    } catch (e) {
      console.warn(`[Vite Resolver] 无法解析组件导出: ${indexPath}`, e)
    }
  }

  if (fs.existsSync(componentsRoot)) {
    // 1. 解析 common (业务组件)
    const commonRoot = path.join(componentsRoot, 'common')
    if (fs.existsSync(commonRoot)) {
      const dirs = fs.readdirSync(commonRoot)
      dirs.forEach((dir) => {
        const fullPath = path.join(commonRoot, dir)
        if (fs.statSync(fullPath).isDirectory()) {
          const indexPath = path.join(fullPath, 'index.ts')
          if (fs.existsSync(indexPath)) {
            parseIndexExports(indexPath, `common/${dir}`)
          }
        }
      })
    }

    // 2. 解析 ui (Shadcn-vue 组件库)
    const uiRoot = path.join(componentsRoot, 'ui')
    if (fs.existsSync(uiRoot)) {
      const dirs = fs.readdirSync(uiRoot)
      dirs.forEach((dir) => {
        const indexPath = path.join(uiRoot, dir, 'index.ts')
        if (fs.existsSync(indexPath)) {
          parseIndexExports(indexPath, `ui/${dir}`, 'Ni')
        }
      })
    }
  }

  return (name: string) => {
    if (componentMap[name]) return componentMap[name]
  }
}
