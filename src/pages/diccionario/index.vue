<script setup lang="ts">
import { WritenContent, WritenContentListResult } from '@/types/index';

useSeoMeta({
  title: 'Diccionario',
  ogTitle: 'Diccionario',
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

const { pending, data, error, execute, refresh } = await useFetch("https://example.com:8000/api/v1/terms/", {
  query: query,
  server: false,
  lazy: true,
  onResponse({ request, response, options }) {
    // TODO: handle end of list
    let result = response._data as WritenContentListResult;
    entries.value.push(...result.results)
    firstRequest.value = false;
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
    execute();
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
  execute();
  //TODO: handle the results on the backend
}

</script>

<template>
  <div>
    <PagesTermsFilters v-model:modelValue="filters" class="mb-4 mt-4" @update:modelValue="handleFilters" />
    <div class="grid grid-cols-3 gap-4 mt-4">
      <!-- TODO: improve skeleton -->
      <div v-if="pending && firstRequest" v-for="_ in [0, 1, 2, 3, 4, 5]" class="
            relative block 
            overflow-hidden 
            rounded-lg border 
            common-colors p-4 sm:p-6 lg:p-8 mb-4">
        <GeneralSkeleton />
      </div>

      <PagesTermsEntry v-else v-for="entry in entries" :entry="entry" />
    </div>

  </div>
</template>
  