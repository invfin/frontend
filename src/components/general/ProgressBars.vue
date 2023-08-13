<template>
    <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-black">
        <div class="w-full">
            <h3 class="mb-2 text-base font-normal text-white0 dark:text-white">Audience by age</h3>
            <div class="flex items-center mb-2">
                <div class="w-16 text-sm font-medium dark:text-white">50+</div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500" style="width: 18%"></div>
                </div>
            </div>
            <div class="flex items-center mb-2">
                <div class="w-16 text-sm font-medium dark:text-white">40+</div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500" style="width: 15%"></div>
                </div>
            </div>
            <div class="flex items-center mb-2">
                <div class="w-16 text-sm font-medium dark:text-white">30+</div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500" style="width: 60%"></div>
                </div>
            </div>
            <div class="flex items-center mb-2">
                <div class="w-16 text-sm font-medium dark:text-white">20+</div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500" style="width: 30%"></div>
                </div>
            </div>
        </div>
        <div id="traffic-channels-chart" class="w-full"></div>
    </div>
</template>