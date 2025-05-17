<script setup lang="ts">
import { TeaCategory } from '@/components/products/tea.ts'
import { blackIndianTeas } from '@/components/products/data/tea.ts'
</script>

<template>
  <ul class="list bg-amber-50 rounded-box shadow-md m-2">
    <li class="p-4 pb-2 text-2xl tracking-wide">{{ TeaCategory.BlackIndia }}</li>
    <li class="list-row" v-for="tea in blackIndianTeas" :key="tea.name">
      <div class="flex justify-between items-center">
        <h4 class="text-lg">
          {{ tea.name }}
          <span class="text-xs"
            >{{ tea.quantity?.minimum }}/{{ tea.quantity?.maximum }} {{ tea.quantity?.unit }}</span
          >
        </h4>
        <span class="badge">{{ tea.price }} lei</span>
      </div>
      <div class="list-col-wrap flex flex-col gap-2">
        <p>{{ tea.description }}</p>
        <span class="badge badge-ghost">Timp de preparare: {{ tea.brewTime }} minute</span>
      </div>
    </li>
  </ul>
</template>

<style scoped></style>
