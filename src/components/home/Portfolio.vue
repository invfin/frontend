<script setup lang="ts">
const user = useUser()

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
                    <NuxtLink to=""
                        class="mb-4 sm:mb-0 mr-4 inline-flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        Ir al portfolio
                    </NuxtLink>

                </div>
            </div>
        </div>
        <HomePortfolioFull v-if="user.loged && user.isFull" />
        <HomePortfolioEmpty v-else />


    </div>
</template>