<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { CheckCircle2, Globe, Cpu, Palette, X } from 'lucide-vue-next'

const stats = [
  { label: '性能', value: '100', icon: Cpu },
  { label: '可访问性', value: '100', icon: Globe },
  { label: '最佳实践', value: '100', icon: CheckCircle2 },
  { label: 'SEO', value: '100', icon: Palette },
]

// 图片数组
const imageList = [
  { id: 1, name: '图片1', url: 'https://picsum.photos/seed/1/400/300' },
  { id: 2, name: '图片2', url: 'https://picsum.photos/seed/2/400/300' },
  { id: 3, name: '图片3', url: 'https://picsum.photos/seed/3/400/300' },
  { id: 4, name: '图片4', url: 'https://picsum.photos/seed/4/400/300' },
]

const editorRef = ref<HTMLElement | null>(null)
const showMenu = ref(false)
const menuPosition = ref({ top: 0, left: 0 })
let savedRange: Range | null = null

const previewImage = ref<{ url: string; name: string } | null>(null)
const hoverImage = ref<{ url: string; top: number; left: number } | null>(null)

// Check for @ when cursor moves or text changes
const checkMentionTrigger = () => {
  const selection = window.getSelection()
  if (!selection || selection.rangeCount === 0) return

  const range = selection.getRangeAt(0)
  const textNode = range.startContainer

  if (textNode.nodeType === Node.TEXT_NODE) {
    const text = textNode.textContent || ''
    const offset = range.startOffset

    // Check if the character right before the cursor is '@'
    if (text.charAt(offset - 1) === '@') {
      showMenu.value = true
      savedRange = range.cloneRange()

      const rect = range.getBoundingClientRect()
      menuPosition.value = {
        top: rect.top - 10,
        left: rect.left,
      }
    } else {
      showMenu.value = false
    }
  } else {
    showMenu.value = false
  }
}

const handleInput = () => {
  checkMentionTrigger()
}

const handleKeyUp = (e: KeyboardEvent) => {
  if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
    checkMentionTrigger()
  }
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (showMenu.value && e.key === 'Escape') {
    showMenu.value = false
  }
}

const insertImage = (img: (typeof imageList)[0]) => {
  if (!savedRange) return

  const selection = window.getSelection()
  if (!selection) return

  selection.removeAllRanges()
  selection.addRange(savedRange)

  // Delete the '@' character
  savedRange.setStart(savedRange.startContainer, savedRange.startOffset - 1)
  savedRange.deleteContents()

  // Create editable=false node
  const span = document.createElement('span')
  span.className =
    'inline-flex items-center gap-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 rounded-md px-2 py-0.5 mx-1 cursor-pointer align-middle mention-node transition-colors select-none'
  span.contentEditable = 'false'
  span.dataset.url = img.url
  span.dataset.name = img.name

  const imgEl = document.createElement('img')
  imgEl.src = img.url
  imgEl.className = 'w-5 h-5 rounded-sm object-cover pointer-events-none'

  const textNode = document.createTextNode(img.name)

  span.appendChild(imgEl)
  span.appendChild(textNode)

  savedRange.insertNode(span)

  // Move cursor after the inserted node
  savedRange.setStartAfter(span)
  savedRange.collapse(true)

  // Insert a zero-width space after to allow typing
  const space = document.createTextNode('\u200B')
  savedRange.insertNode(space)
  savedRange.setStartAfter(space)
  savedRange.collapse(true)

  selection.removeAllRanges()
  selection.addRange(savedRange)

  showMenu.value = false
  savedRange = null
  editorRef.value?.focus()
}

const handleGlobalClick = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  if (!target.closest('.mention-menu')) {
    showMenu.value = false
  }
}

const handleEditorClick = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  const mentionNode = target.closest('.mention-node') as HTMLElement
  if (mentionNode) {
    const url = mentionNode.dataset.url
    const name = mentionNode.dataset.name
    if (url && name) {
      previewImage.value = { url, name }
    }
  } else {
    // Handle click inside text to potentially show @ menu
    // Need a small timeout to let the cursor position update before checking
    setTimeout(() => {
      checkMentionTrigger()
    }, 0)
  }
}

let hoverTimer: ReturnType<typeof setTimeout> | null = null

const handleEditorMouseOver = (e: MouseEvent) => {
  if (hoverTimer) clearTimeout(hoverTimer)

  const target = e.target as HTMLElement
  const mentionNode = target.closest('.mention-node') as HTMLElement
  if (mentionNode) {
    const url = mentionNode.dataset.url
    if (url) {
      const rect = mentionNode.getBoundingClientRect()
      hoverImage.value = {
        url,
        top: rect.top - 160,
        left: rect.left + rect.width / 2,
      }
    }
  } else {
    hoverTimer = setTimeout(() => {
      hoverImage.value = null
    }, 100)
  }
}

onMounted(() => {
  document.addEventListener('click', handleGlobalClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleGlobalClick)
  if (hoverTimer) clearTimeout(hoverTimer)
})
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
              ref="editorRef"
              placeholder=""
              contenteditable="true"
              class="p-4 bg-neutral-950 rounded-[22px] text-sm font-normal text-neutral-100 h-100 focus:outline-none focus:ring-2 focus:ring-primary/50 overflow-y-auto whitespace-pre-wrap"
              @input="handleInput"
              @keyup="handleKeyUp"
              @keydown="handleKeyDown"
              @click="handleEditorClick"
              @mouseover="handleEditorMouseOver"
              @mouseout="handleEditorMouseOver"
            >
              <p>在此处输入内容，输入 @ 选择图片，点击图片预览大图，悬浮显示缩略图</p>
            </div>
          </div>
        </div>
      </div>

      <!-- @ 菜单 -->
      <Teleport to="body">
        <div
          v-if="showMenu"
          class="mention-menu fixed z-100 bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl p-2 w-48 text-neutral-100 flex flex-col gap-1 origin-bottom-left"
          :style="{
            top: `${menuPosition.top}px`,
            left: `${menuPosition.left}px`,
            transform: 'translateY(-100%)',
          }"
        >
          <div
            class="text-xs text-neutral-400 font-medium px-2 pb-1 border-b border-neutral-800 mb-1"
          >
            选择图片插入
          </div>
          <button
            v-for="img in imageList"
            :key="img.id"
            class="flex items-center gap-2 w-full p-2 hover:bg-neutral-800 rounded-lg transition-colors text-left"
            @click.stop="insertImage(img)"
          >
            <img :src="img.url" class="w-8 h-8 rounded shrink-0 object-cover" />
            <span class="text-sm truncate">{{ img.name }}</span>
          </button>
        </div>
      </Teleport>

      <!-- 鼠标悬浮图片预览 -->
      <Teleport to="body">
        <Transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 translate-y-2 scale-95"
          enter-to-class="opacity-100 translate-y-0 scale-100"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100 translate-y-0 scale-100"
          leave-to-class="opacity-0 translate-y-2 scale-95"
        >
          <div
            v-if="hoverImage"
            class="pointer-events-none fixed z-90 bg-neutral-900 border border-neutral-700 p-1.5 rounded-xl shadow-2xl origin-bottom"
            :style="{
              top: `${hoverImage.top}px`,
              left: `${hoverImage.left}px`,
              transform: 'translateX(-50%)',
            }"
          >
            <img
              :src="hoverImage.url"
              class="w-[140px] h-[140px] object-cover rounded-lg bg-neutral-800"
            />
            <!-- Arrow -->
            <div
              class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-900 border-b border-r border-neutral-700 rotate-45"
            ></div>
          </div>
        </Transition>
      </Teleport>

      <!-- 图片预览组件 -->
      <Teleport to="body">
        <Transition
          enter-active-class="transition ease-out duration-300"
          enter-from-class="opacity-0 backdrop-blur-none"
          enter-to-class="opacity-100 backdrop-blur-sm"
          leave-active-class="transition ease-in duration-200"
          leave-from-class="opacity-100 backdrop-blur-sm"
          leave-to-class="opacity-0 backdrop-blur-none"
        >
          <div
            v-if="previewImage"
            class="fixed inset-0 z-150 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
            @click="previewImage = null"
          >
            <div class="relative max-w-4xl w-full flex flex-col items-center gap-4" @click.stop>
              <div class="absolute -top-12 flex justify-between w-full items-center text-white">
                <span class="text-xl font-medium">{{ previewImage.name }}</span>
                <button
                  @click="previewImage = null"
                  class="p-2 hover:bg-white/20 rounded-full transition-colors bg-white/10"
                >
                  <X class="w-6 h-6" />
                </button>
              </div>
              <img
                :src="previewImage.url"
                class="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl ring-1 ring-white/10"
              />
            </div>
          </div>
        </Transition>
      </Teleport>
    </section>
  </div>
</template>
