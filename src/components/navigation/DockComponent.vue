<script setup lang="ts">
import { menuItems as menuData } from '@/components/navigation/MenuItem.ts'
import { onMounted, ref, watch } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useRoute, useRouter } from 'vue-router'

const menuItems = ref(menuData)
const route = useRoute()
const router = useRouter()

const activeMenuIndex = ref(-1)

onMounted(() => {
  activateMenuItemFromRoute(route.name?.toString())
})

watch(
  () => route.name,
  (name) => {
    if (activeMenuIndex.value !== -1) {
      menuItems.value[activeMenuIndex.value].isActive = false
    }

    activateMenuItemFromRoute(name?.toString())
  },
)

function activateMenuItemFromRoute(routeName?: string) {
  activeMenuIndex.value = menuItems.value.findIndex((menuItem) => menuItem.route === routeName)
  if (activeMenuIndex.value !== -1) {
    menuItems.value[activeMenuIndex.value].toggleActive()
  }
}

function navigateToRoute(routeName: string) {
  router.push({ name: routeName })
}
</script>

<template>
  <div class="dock dock-lg">
    <button
      v-for="menuItem in menuItems"
      :key="menuItem.title"
      :class="menuItem.isActive ? 'dock-active' : ''"
      @click="navigateToRoute(menuItem.route)"
    >
      <font-awesome-icon :icon="[menuItem.iconType, menuItem.icon]" size="lg" />
      <span class="dock-label prose">{{ menuItem.title }}</span>
    </button>
  </div>
</template>
