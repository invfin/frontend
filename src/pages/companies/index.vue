<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { CompaniesListResult, SimpleCompnay } from '@/types/index';

useSeoMeta({
    title: 'Companies',
    ogTitle: 'Companies',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})

const offset = ref(50);
const companies = ref([] as SimpleCompnay[]);
const filters = ref({});

const { pending, data, error, execute, refresh } = await useFetch("https://example.com:8000/api/v1/companies/", {
    query: { limit: 50, offset: offset },
    server: false,
    lazy: true,
    onResponse({ request, response, options }) {
        // TODO: handle end of list
        let result = response._data as CompaniesListResult;
        companies.value.push(...result.results)
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

</script>

<template>
    <div>
        <CompaniesFilters :modelValue="filters" class="mb-4 mt-4" />
        <div class="grid grid-cols-3 gap-4 mt-4">
            <!-- TODO: improve skeleton -->
            <div v-if="pending" v-for="_ in [0, 1, 2, 3, 4, 5]" class="
            relative block 
            overflow-hidden 
            rounded-lg border 
            common-colors p-4 sm:p-6 lg:p-8 mb-4">
                <GeneralSkeleton />
            </div>

            <CompaniesListEntry v-else v-for="company in companies" :company="company" />
        </div>
        <CompaniesFiltersModal :modelValue="filters" />
    </div>
</template>
  