<template>
  <NavBar />
  <slot />
  <SideBar />
</template>

<script lang="ts">
import NavBar from '@/components/navbar/NavBar.vue'
import SideBar from '@/components/sidebar/SideBar.vue'

export default {
  name: 'DashBoard',
  components: {
    NavBar,
    SideBar,
  },
  setup() {
    return {}
  },
}
</script>
