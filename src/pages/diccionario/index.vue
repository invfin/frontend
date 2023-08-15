<script setup lang="ts">
useSeoMeta({
  title: 'Companies',
  ogTitle: 'Companies',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <GeneralEntryListWithFilter dataUrl="">
    <!-- Pass filters to the "listFilter" slot -->
    <template #listFilter="{ modelValue: filters }">
      <YourFilterComponent />
    </template>

    <!-- Pass values to the "listEntries" slot -->
    <template #listEntries="{ value }" v-for="value in values" :key="value">
      <YourEntryComponent :value="value" />
    </template>
  </GeneralEntryListWithFilter>
</template>