<script setup lang="ts">
let user = useUser();

</script>

<template>
    <div class="p-4 widget-common-style sm:p-6">
        <!-- Card header -->
        <div class="items-center justify-between lg:flex">
            <div class="mb-4 lg:mb-0">
                <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">Transactions</h3>
                <span class="text-base font-normal text-gray-500 dark:text-gray-400">This is a list of latest
                    transactions</span>
            </div>
            <div class="items-center sm:flex">
                <div class="flex items-center">
                    <NuxtLink to="" class="mb-4 sm:mb-0 mr-4 inline-flex items-center common-button">
                        Ir al portfolio
                    </NuxtLink>

                </div>
            </div>
        </div>
        <PagesHomePortfolioFull v-if="user && user.hasPortfolio" />
        <PagesHomePortfolioEmpty v-else />
    </div>
</template>