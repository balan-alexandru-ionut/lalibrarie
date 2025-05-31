<script setup lang="ts">
import { Tea, TeaCategory } from '@/components/products/tea.ts'
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const props = defineProps({
  category: TeaCategory,
  teas: Array<Tea>,
})

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
  <ul class="list bg-amber-50 rounded-box shadow-md m-2 mt-8">
    <li class="p-4 pb-2 text-2xl font-medium tracking-wide">{{ props.category }}</li>
    <li class="list-row" v-for="tea in props.teas" :key="tea.name">
      <div class="flex justify-between items-center">
        <h4 class="text-xl flex flex-col">
          {{ tea.name }}
          <span class="text-xs"
            >{{ tea.quantity?.minimum }}/{{ tea.quantity?.maximum }} {{ tea.quantity?.unit }}</span
          >
        </h4>
        <span class="badge">{{ tea.price }} lei</span>
      </div>
      <div class="list-col-wrap flex flex-col gap-2 text-base">
        <div class="flex flex-col justify-between gap-2">
          <p>{{ isExpanded(tea.name) ? tea.description : truncateText(tea.description) }}</p>
          <button
            v-if="tea.description.split(' ').length > 20"
            @click="toggleDescription(tea.name)"
            class="mb-2"
          >
            <font-awesome-icon v-if="!isExpanded(tea.name)" :icon="['fas', faChevronDown.iconName]"></font-awesome-icon>
            <font-awesome-icon v-if="isExpanded(tea.name)" :icon="['fas', faChevronUp.iconName]"></font-awesome-icon>
          </button>
        </div>
        <span class="badge badge-ghost">Timp de preparare: {{ tea.brewTime }} minute</span>
        <p class="text-sm" v-if="tea.ingredients">
          <span class="font-medium">Ingrediente</span>: {{ tea.ingredients?.join(', ') }}
        </p>
      </div>
    </li>
  </ul>
</template>

<style scoped></style>
