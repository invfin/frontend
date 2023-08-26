<script setup lang="ts">
import { Company } from 'types';

let company = ref({} as Company);

onBeforeMount(async () => {
    const route = useRoute()
    await useFetch(`${useRuntimeConfig().public.apiPath}companies/${route.params.ticker}/`, {
        server: true,
        lazy: false,
        async onResponse({ request, response, options }) {
            company.value = response._data;
        },
    })
})

useSeoMeta({
    title: () => company.value.name,
    ogTitle: () => company.value.name,
    description: () => company.value.description,
    ogDescription: () => company.value.description,
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})
</script>

<template>
    <div>
        {{ company }}
    </div>
</template>
  