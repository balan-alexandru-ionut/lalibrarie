<script setup lang="ts">
import DockComponent from '@/components/navigation/DockComponent.vue'
</script>

<template>
  <main>
    <RouterView />
    <DockComponent />
  </main>

  <footer class="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 mb-16">
    <aside class="grid-flow-col items-center">
      <p>Copyright © {{ new Date().getFullYear() }} - All right reserved</p>
    </aside>
  </footer>
</template>
