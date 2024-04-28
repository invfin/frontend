<script setup lang="ts">

defineProps<{
    title: string,
}>()
</script>
<template>
    <div class="widget-common-style">
        <div class="p-4">
            <h3>{{ title }}
                <GeneralPopoverButton :popoverId="title" />
            </h3>
        </div>
        <GeneralPopover :id="title" title="" content="" linkValue="" linkPath="" />
        <div class="relative overflow-x-auto">
            <table class="text-sm text-left w-full">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Actual
                        </th>
                        <th scope="col" class="px-6 py-3 text-center" colspan="2">
                            Estado
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td class="px-6 py-4">
                            Silver
                        </td>
                        <td class="px-6 py-4 text-center" colspan="2">
                            <GeneralProgressbar colour="green" percent=53 />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="flex items-center justify-between p-4">
            <div></div>
            <div class="flex-shrink-0">
                <a href="#"
                    class="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
                    Sales Report
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>

    </div>
</template>
