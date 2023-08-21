<script setup lang="ts">
import { SuperinvestorListResult, SimpleSuperinvestor } from '@/types/index';

useSeoMeta({
  title: 'Superinversores',
  ogTitle: 'Superinversores',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

const offset = ref(0);
const entries = ref([] as SimpleSuperinvestor[]);
const filters = ref({});
const firstRequest = ref(true);
const query = ref({ limit: 50, offset: offset });

const { pending, data, error, execute, refresh } = await useFetch(`${useRuntimeConfig().public.apiPath}superinvestors/`, {
  query: query,
  server: false,
  lazy: true,
  watch: [query],
  onResponse({ request, response, options }) {
    handleEndOfList<SuperinvestorListResult, SimpleSuperinvestor>(response._data, entries, firstRequest);
  },
})

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
})

function handleScroll() {
  if (
    window.scrollY + window.innerHeight >=
    document.body.scrollHeight - 50
  ) {
    offset.value += 50;
  }
}

</script>

<template>
  <div>
    <!-- <PagesSuperinvestorsFilters v-model:modelValue="filters" class="mb-4 mt-4"
      @update:modelValue="handleFilters(offset, filters, query, execute)" /> -->
    <div class="list-grid gap-4 mt-4">
      <!-- TODO: improve skeleton -->
      <div v-if="pending && firstRequest || error" v-for="_ in [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]">
        <PagesSuperinvestorsSkeleton />
      </div>

      <PagesSuperinvestorsEntry v-else v-for="entry in entries" :entry="entry" />
      <PagesSuperinvestorsSkeleton />
    </div>
  </div>
</template>
