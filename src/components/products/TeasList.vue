<script setup lang="ts">
import { teas } from '@/components/products/data/tea.ts'
import TeaCategoryList from '@/components/products/TeaCategoryList.vue'
</script>

<template>
  <TeaCategoryList v-for="(teaCategory, index) in teas" :key="index" :category="teaCategory[0].category" :teas="teaCategory" />
</template>

<style scoped></style>
