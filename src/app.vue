<script setup>
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

onMounted(() => {
  initFlowbite();
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <SearchResult />
  </div>
</template>
