<script setup lang="ts">
import { WritenContent, WritenContentListResult } from '@/types/index';

useSeoMeta({
  title: 'Blogs',
  ogTitle: 'Blogs',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

const offset = ref(0);
const entries = ref([] as WritenContent[]);
const filters = ref({});
const firstRequest = ref(true);
const query = ref({ limit: 50, offset: offset });

const { pending, data, error, execute, refresh } = await useFetch(`${useRuntimeConfig().public.apiPath}blogs/`, {
  query: query,
  server: false,
  lazy: true,
  watch: [query],
  onResponse({ request, response, options }) {
    handleEndOfList<WritenContentListResult, WritenContent>(response, entries, firstRequest);
  },
})

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
})


function handleScroll() {
  if (
    window.scrollY + window.innerHeight >=
    document.body.scrollHeight - 100
  ) {
    offset.value = offset.value + 50;
  }
}

function handleFilters() {
  const mergedObject = {
    ...{ limit: 50, offset: offset.value },
    ...Object.keys(filters.value).reduce((acc, key) => {
      if (filters.value[key] !== '') {
        acc[key] = filters.value[key];
      }
      return acc;
    }, {})
  };
  query.value = mergedObject;
}

</script>

<template>
  <div>
    <PagesBlogsFilters v-model:modelValue="filters" class="mb-4 mt-4" @update:modelValue="handleFilters" />
    <div class="list-grid gap-4 mt-4">
      <div v-if="pending && firstRequest" v-for="_ in [0, 1, 2, 3, 4, 5]" class="
            relative block 
            overflow-hidden 
            rounded-lg border 
            common-colors p-4 sm:p-6 lg:p-8 mb-4">
        <PagesBlogsSkeleton />
      </div>

      <PagesBlogsEntry v-else v-for="entry in entries" :entry="entry" />
      <PagesBlogsSkeleton />
    </div>
  </div>
</template>
  
