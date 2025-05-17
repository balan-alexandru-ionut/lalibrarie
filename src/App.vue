<script setup lang="ts">
import DockComponent from '@/components/navigation/DockComponent.vue'
</script>

<template>
  <main>
    <RouterView />
  </main>

  <footer>
    <DockComponent />
  </footer>
</template>
