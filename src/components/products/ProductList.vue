<script setup lang="ts">
import type { Product } from '@/components/products/products.ts'
import { Tea } from '@/components/products/tea.ts'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed, ref } from 'vue'

const props = defineProps({
  productsPerCategory: {
    type: Map<string, Array<Product>>,
    required: true,
  },
  categorySubHeadings: Map<string, string>,
})

const categories = computed(() => Array.from(props.productsPerCategory.keys()))

const expandedDescriptions = ref(new Map<string, boolean>())

const truncateText = (text: string, wordCount: number = 20) => {
  const words = text.split(' ')
  if (words.length <= wordCount) {
    return text
  }
  return words.slice(0, wordCount).join(' ') + '...'
}

const toggleDescription = (teaName: string) => {
  expandedDescriptions.value.set(teaName, !expandedDescriptions.value.get(teaName))
}

const isExpanded = (teaName: string) => {
  return expandedDescriptions.value.get(teaName) ?? false
}
</script>

<template>
  <ul
    v-for="index in productsPerCategory.size"
    :key="index"
    class="list bg-amber-50 rounded-box shadow-md m-2 mt-8"
  >
    <li class="p-4 pb-2 text-2xl font-medium tracking-wide flex flex-col">
      {{ categories[index - 1] }}
      <span v-if="categorySubHeadings?.get(categories[index - 1])" class="text-base text-center">{{
        categorySubHeadings?.get(categories[index - 1])
      }}</span>
    </li>
    <li
      class="list-row grid-cols-1"
      v-for="product in productsPerCategory.get(categories[index - 1])"
      :key="product.name"
    >
      <div class="flex justify-between items-center">
        <h4 class="text-xl flex flex-col max-w-3/4">
          {{ product.name }}
          <span v-if="!product.quantity?.maximumUnit" class="text-xs"
            >{{ product.quantity?.minimum }}<span v-if="product.quantity?.maximum">/</span
            >{{ product.quantity?.maximum }} {{ product.quantity?.unit }}</span
          >
          <span v-else class="text-xs"
            >{{ product.quantity?.minimum }} {{ product.quantity?.unit }} /
            {{ product.quantity?.maximum }}
            {{ product.quantity.maximumUnit }}
          </span>
        </h4>
        <span class="badge">{{ product.price }} lei</span>
      </div>
      <div class="list-col-wrap flex flex-col gap-2 text-base">
        <div v-if="product instanceof Tea" class="flex flex-col justify-between gap-2">
          <p>
            {{ isExpanded(product.name) ? product.description : truncateText(product.description) }}
          </p>
          <button
            v-if="product.description.split(' ').length > 20"
            @click="toggleDescription(product.name)"
            class="mb-2"
          >
            <font-awesome-icon
              v-if="!isExpanded(product.name)"
              :icon="['fas', faChevronDown.iconName]"
            ></font-awesome-icon>
            <font-awesome-icon
              v-if="isExpanded(product.name)"
              :icon="['fas', faChevronUp.iconName]"
            ></font-awesome-icon>
          </button>
        </div>
        <span v-if="product instanceof Tea" class="badge badge-ghost"
          >Timp de preparare: {{ product.brewTime }} minute</span
        >
        <p class="text-sm" v-if="product.ingredients">
          <span class="font-medium">Ingrediente</span>: {{ product.ingredients?.join(', ') }}
        </p>
      </div>
    </li>
  </ul>
</template>

<style scoped></style>
