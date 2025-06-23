<script setup lang="ts">
import type { Product } from '@/components/products/products.ts'
import { Tea } from '@/components/products/tea.ts'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const props = defineProps({
  productsByCategory: {
    required: true,
    type: Map<string, Array<Product>>,
  },
})

const emit = defineEmits(['filter'])

function removeAccents(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

function standardize(str: string): string {
  return removeAccents(str.toLowerCase().trim())
}

function filter(searchTerm: string) {
  const term = standardize(searchTerm)
  const filteredProducts = new Map<string, Array<Product>>()

  if (term.length === 0) {
    emit('filter', null)
  }

  props.productsByCategory?.forEach((value, key) => {
    if (standardize(key).includes(term)) {
      filteredProducts.set(key, value)
    } else if (value[0] instanceof Tea) {
      const filtered = value.filter(
        (product) =>
          standardize(product.name).includes(term) ||
          standardize((product as Tea).description).includes(term),
      )
      if (filtered.length > 0) {
        filteredProducts.set(key, filtered)
      }
    } else {
      const filtered = value.filter((product) => standardize(product.name).includes(term))
      if (filtered.length > 0) {
        filteredProducts.set(key, filtered)
      }
    }
  })

  emit('filter', filteredProducts)
}
</script>

<template>
  <label
    class="input input-lg mx-auto w-10/11 -mt-4 rounded-box shadow-md bg-amber-50 focus:border-0 outline-0"
    for="search"
  >
    <font-awesome-icon :icon="['fas', faSearch.iconName]"></font-awesome-icon>
    <input
      @input="(e) => filter((e.target as HTMLInputElement).value)"
      id="search"
      type="search"
      placeholder="Cautǎ"
    />
  </label>
</template>

<style scoped></style>
