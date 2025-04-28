<script setup lang="ts">
import DockComponent from '@/components/navigation/DockComponent.vue'
</script>

<template>
  <main class="m-4">
    <RouterView />
  </main>

  <footer>
    <DockComponent />
  </footer>
</template>
