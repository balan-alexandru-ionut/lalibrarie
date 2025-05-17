<script setup lang="ts">
import CategoryItem from '@/components/menu/CategoryItem.vue'
import {
  faBottleWater,
  faCookieBite,
  faLemon,
  faMugHot,
  faMugSaucer,
  faWineGlass,
} from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'

const categories = ref([
  {
    title: 'Ceaiuri',
    icon: faMugSaucer,
    color: '#A4B465',
    active: true,
  },
  {
    title: 'Cafea',
    icon: faMugHot,
    color: '#706D54',
    active: false,
  },
  {
    title: 'Sucuri',
    icon: faLemon,
    color: '#DDA853',
    active: false,
  },
  {
    title: 'Rǎcoritoare',
    icon: faBottleWater,
    color: '#5F99AE',
    active: false,
  },
  {
    title: 'Alcool',
    icon: faWineGlass,
    color: '#BDB395',
    active: false,
  },
  {
    title: 'Gustǎri',
    icon: faCookieBite,
    color: '#E5989B',
    active: false,
  },
])

let activeIndex = 0

function toggleActive(index: number) {
  console.log('click', index)
  categories.value[activeIndex].active = false
  categories.value[index].active = true
  activeIndex = index
}
</script>

<template>
  <div class="bg-amber-50 p-6 m-2 rounded-box overflow-hidden">
    <span class="text-2xl">Produse</span>
    <div class="grid grid-flow-col auto-cols-max overflow-x-auto snap-x gap-2 p-4 no-scrollbars">
      <div class="snap-start" v-for="(category, index) in categories" :key="category.title">
        <CategoryItem
          :title="category.title"
          :icon="category.icon.iconName"
          :color="category.color"
          :active="category.active"
          @click="toggleActive(index)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbars {
  scrollbar-width: none;
}
.no-scrollbars::-webkit-scrollbar {
  display: none;
}
</style>
