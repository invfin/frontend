<script setup lang="ts">
import { CompaniesListResult, SimpleCompany } from '@/types/index';

useSeoMeta({
    title: 'Companies',
    ogTitle: 'Companies',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})

const offset = ref(0);
const entries = ref([] as SimpleCompany[]);
const filters = ref({});
const firstRequest = ref(true);
const query = ref({ limit: 50, offset: offset });

const { pending, data, error, execute, refresh } = await useFetch(`${useRuntimeConfig().public.apiPath}companies/`, {
    query: query,
    server: false,
    lazy: true,
    watch: [query],
    onResponse({ request, response, options }) {
        handleEndOfList<CompaniesListResult, SimpleCompany>(response, entries, firstRequest);
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
        <PagesCompaniesFiltersMain v-model:modelValue="filters" class="mb-4 mt-4" @update:modelValue="handleFilters" />
        <div class="list-grid gap-4 mt-4">
            <!-- TODO: improve skeleton -->
            <div v-if="pending && firstRequest" v-for="_ in [0, 1, 2, 3, 4, 5]" class="
            relative block 
            overflow-hidden 
            rounded-lg border 
            common-colors p-4 sm:p-6 lg:p-8 mb-4">
                <PagesCompaniesSkeleton />
            </div>

            <PagesCompaniesEntry v-else v-for="entry in entries" :entry="entry" />
            <PagesCompaniesSkeleton />
        </div>
        <PagesCompaniesFiltersModal v-model:modelValue="filters" @update:modelValue="handleFilters" />
    </div>
</template>
  
