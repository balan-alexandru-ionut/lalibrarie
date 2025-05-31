<script setup lang="ts">
import { freshPressedJuice, smoothies } from '@/components/products/data/juice.ts'

  const juiceCategories = ['Sucuri din Fructe Stoarse', 'Smoothie']
  const juiceList = [freshPressedJuice, smoothies]
</script>

<template>
  <ul v-for="index in juiceCategories.length" :key="index" class="list bg-amber-50 rounded-box shadow-md m-2 mt-8">
    <li class="p-4 pb-2 text-2xl font-medium tracking-wide">{{ juiceCategories[index - 1] }}</li>
    <li class="list-row grid-cols-1" v-for="juice in juiceList[index - 1]" :key="juice.name">
      <div class="flex justify-between items-center">
        <h4 class="text-xl flex flex-col max-w-3/4">
          {{ juice.name }}
          <span class="text-xs"
          >{{ juice.quantity?.minimum }}<span v-if="juice.quantity?.maximum">/</span
          >{{ juice.quantity?.maximum }} {{ juice.quantity?.unit }}</span
          >
        </h4>
        <span class="badge">{{ juice.price }} lei</span>
      </div>
      <div v-if="juice.ingredients" class="list-col-wrap flex flex-col gap-2 text-base">
        <p class="text-sm" v-if="juice.ingredients">
          <span class="font-medium">Ingrediente</span>: {{ juice.ingredients?.join(', ') }}
        </p>
      </div>
    </li>
  </ul>
</template>

<style scoped>

</style>
