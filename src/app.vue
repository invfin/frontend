<script setup>
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

onMounted(() => {
  initFlowbite();
  useUser().value = useCookie("u").value;
  useVisits().value = useCookie("v").value;
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <LayoutSearchResult />
  </div>
</template>
