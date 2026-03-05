<script setup lang="ts"></script>

<template>
  <div class="min-h-screen bg-background font-sans text-foreground">
    <!-- 头部 -->
    <Header />

    <!-- 内容 -->
    <main>
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>

    <!-- 底部 -->
    <Footer />
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
