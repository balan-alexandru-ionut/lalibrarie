<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  title: String,
  icon: String,
  color: String,
  active: Boolean,
})

const isActive = computed(() => props.active)
</script>

<template>
  <div class="flex flex-col justify-center w-28 gap-1 items-center p-1">
    <div
      class="w-16 h-16 flex items-center justify-center rounded-xl"
      :style="'background-color: ' + props.color"
    >
      <font-awesome-icon :icon="['fas', props.icon]" size="xl" class="text-white" />
    </div>
    <span
      class="text-center font-medium"
      :class="{ 'border-b-2': isActive, 'border-accent': isActive }"
      >{{ props.title }}</span
    >
  </div>
</template>

<style scoped></style>
