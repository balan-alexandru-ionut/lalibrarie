<script setup lang="ts">
import { sodas } from '@/components/products/data/juice.ts'
</script>

<template>
  <ul class="list bg-amber-50 rounded-box shadow-md m-2 mt-8">
    <li class="list-row grid-cols-1" v-for="soda in sodas" :key="soda.name">
      <div class="flex justify-between items-center">
        <h4 class="text-xl flex flex-col max-w-3/4">
          {{ soda.name }}
          <span class="text-xs">
            {{ soda.quantity?.minimum }}
            <span v-if="soda.quantity?.maximum">/</span>{{ soda.quantity?.maximum }}
            {{ soda.quantity?.unit }}
          </span>
        </h4>
        <span class="badge">{{ soda.price }} lei</span>
      </div>
    </li>
  </ul>
</template>

<style scoped></style>
