<script setup lang="ts">
import MenuCategories from '@/components/menu/MenuCategories.vue'
import TeasList from '@/components/products/TeasList.vue'
import ProductList from '@/components/products/ProductList.vue'
import { nextTick, ref } from 'vue'
import CoffeeList from '@/components/products/CoffeeList.vue'
import JuiceList from '@/components/products/JuiceList.vue'
import SodasList from '@/components/products/SodasList.vue'

const productCategory = ref(0)

function changeCategory(index: number) {
  productCategory.value = index
  nextTick(() => scrollToTop())
}

function scrollToTop() {
  window.scrollTo({
    behavior: 'smooth',
    top: 0,
  })
}
</script>

<template>
  <h1 class="text-center text-4xl my-5">Meniu</h1>
  <MenuCategories @category-changed="(index: number) => changeCategory(index)" />
  <ProductList class="mb-8">
    <TeasList v-if="productCategory === 0" />
    <CoffeeList v-if="productCategory === 1" />
    <JuiceList v-if="productCategory === 2" />
    <SodasList v-if="productCategory === 3" />
  </ProductList>
</template>

<style scoped></style>
