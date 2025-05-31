<script setup lang="ts">
import { coffees, gourmetCoffees, hotChocolate } from '@/components/products/data/coffee.ts'

const coffeeCategories = ['Cafea', 'Cafea Gourmet', 'Ciocolatǎ Caldǎ']
const coffeeList = [coffees, gourmetCoffees, hotChocolate]
</script>

<template>
  <ul v-for="index in 3" :key="index" class="list bg-amber-50 rounded-box shadow-md m-2 mt-8">
    <li class="p-4 pb-2 text-2xl font-medium tracking-wide">{{ coffeeCategories[index - 1] }}</li>
    <li class="list-row grid-cols-1" v-for="coffee in coffeeList[index - 1]" :key="coffee.name">
      <div class="flex justify-between items-center">
        <h4 class="text-xl flex flex-col">
          {{ coffee.name }}
          <span class="text-xs"
            >{{ coffee.quantity?.minimum }}<span v-if="coffee.quantity?.maximum">/</span
            >{{ coffee.quantity?.maximum }} {{ coffee.quantity?.unit }}</span
          >
        </h4>
        <span class="badge">{{ coffee.price }} lei</span>
      </div>
      <div v-if="coffee.ingredients" class="list-col-wrap flex flex-col gap-2 text-base">
        <p class="text-sm" v-if="coffee.ingredients">
          <span class="font-medium">Ingrediente</span>: {{ coffee.ingredients?.join(', ') }}
        </p>
      </div>
    </li>
  </ul>
</template>

<style scoped></style>
