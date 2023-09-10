<script setup lang="ts">
import { Company } from 'types';

let company = ref({} as Company);

onBeforeMount(async () => {
    const route = useRoute()
    await useFetch(`${useRuntimeConfig().public.apiPath}companies/${route.params.ticker}/`, {
        server: true,
        lazy: false,
        async onResponse({ response }) {
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
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
        <div class="col-span-full">
            <PagesCompaniesCompanyHeader :company="company" />
        </div>

        <div class="col-span-1 space-y-4">
            <PagesCompaniesCompanyComparatifTable title="RentabilityRatio" />
            <PagesCompaniesCompanyComparatifTable title="LiquidityRatio" />
            <PagesCompaniesCompanyComparatifTable title="Margins" />
        </div>
        <div class="col-span-1 space-y-4">
            <PagesCompaniesCompanyComparatifTable title="FcfRatio" />
            <PagesCompaniesCompanyComparatifTable title="PerShareValue" />
            <PagesCompaniesCompanyComparatifTable title="OperationRiskRatio" />
        </div>
        <div class="col-span-1 space-y-4">
            <PagesCompaniesCompanyComparatifTable title="GrowthRate" />
            <PagesCompaniesCompanyComparatifTable title="EvRatio" />
            <PagesCompaniesCompanyComparatifTable title="EfficiencyRatio" />
            <PagesCompaniesCompanyComparatifTable title="PriceToRatio" />
        </div>
    </div>
</template>
