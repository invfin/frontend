<script setup>

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

definePageMeta({
  layout: 'default'
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
