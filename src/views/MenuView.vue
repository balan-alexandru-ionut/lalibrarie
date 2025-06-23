<script setup lang="ts">
import MenuCategories from '@/components/menu/MenuCategories.vue'
import ProductList from '@/components/products/ProductList.vue'
import { computed, nextTick, ref } from 'vue'
import { teasPerCategory } from '@/components/products/data/tea.ts'
import { coffeesPerCategory } from '@/components/products/data/coffee.ts'
import { juicesPerCategory, sodasPerCategory } from '@/components/products/data/juice.ts'
import { categorySubHeading, drinksPerCategory } from '@/components/products/data/alcoholic.ts'
import { snacksPerCategory } from '@/components/products/data/snacks.ts'
import ProductSearch from '@/components/search/ProductSearch.vue'
import type { Product } from '@/components/products/products.ts'

const productCategory = ref(0)
const isFiltered = ref(false)
const searchableProducts = computed(() => {
  switch (productCategory.value) {
    case 0:
      return teasPerCategory()
    case 1:
      return coffeesPerCategory
    case 2:
      return juicesPerCategory
    case 3:
      return sodasPerCategory
    case 4:
      return drinksPerCategory
    case 5:
      return snacksPerCategory
    default:
      return new Map()
  }
})

const filteredProducts = ref(new Map<string, Array<Product>>())

function changeCategory(index: number) {
  isFiltered.value = false
  productCategory.value = index
  nextTick(() => scrollToTop())
}

function scrollToTop() {
  window.scrollTo({
    behavior: 'smooth',
    top: 0,
  })
}

function filter(filterResults: Map<string, Array<Product>>) {
  if (filterResults === null) {
    isFiltered.value = false
    return
  }

  console.log(filterResults)

  filteredProducts.value = filterResults
  isFiltered.value = true
}
</script>

<template>
  <h1 class="text-center text-4xl my-5">Meniu</h1>
  <div class="sticky top-0 z-50 flex flex-col gap-1 pb-4 bg-base-100">
    <MenuCategories @category-changed="(index: number) => changeCategory(index)" />
    <ProductSearch
      :products-by-category="searchableProducts"
      @filter="(filterResult) => filter(filterResult)"
    />
  </div>
  <ProductList
    v-if="productCategory === 0"
    :products-per-category="isFiltered ? filteredProducts : teasPerCategory()"
  />
  <ProductList
    v-if="productCategory === 1"
    :products-per-category="isFiltered ? filteredProducts : coffeesPerCategory"
  />
  <ProductList
    v-if="productCategory === 2"
    :products-per-category="isFiltered ? filteredProducts : juicesPerCategory"
  />
  <ProductList
    v-if="productCategory === 3"
    :products-per-category="isFiltered ? filteredProducts : sodasPerCategory"
  />
  <ProductList
    v-if="productCategory === 4"
    :products-per-category="isFiltered ? filteredProducts : drinksPerCategory"
    :category-sub-headings="categorySubHeading"
  />
  <ProductList
    v-if="productCategory === 5"
    :products-per-category="isFiltered ? filteredProducts : snacksPerCategory"
  />
</template>

<style scoped></style>
