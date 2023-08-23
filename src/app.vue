<script setup>
import { initFlowbite } from 'flowbite';

onMounted(() => {
  //TODO: check if we can do it with only one
  initFlowbite();
})


onBeforeMount(() => {
  const currentUser = useCookie("u").value;
  if (currentUser !== undefined || currentUser !== null) {
    useUser().value = useCookie("u").value;
  };

  const currentVisists = useCookie("v").value;
  if (currentVisists !== undefined || currentVisists !== null) {
    useVisits().value = currentVisists
  };

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
