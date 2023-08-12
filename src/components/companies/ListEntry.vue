<script setup lang="ts">
import { SimpleCompnay } from "../types/index";

defineProps<{
    company: SimpleCompnay
}>()
</script>
<template>
    <NuxtLink to="#" class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 mb-4">

        <div class="sm:flex sm:justify-between sm:gap-4">
            <div>
                <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                    {{ company.name }}
                </h3>

                <p class="mt-1 text-xs font-medium text-gray-600">{{ company.ticker }}</p>
            </div>

            <div class="hidden sm:block sm:shrink-0">
                <img :alt="company.ticker" :src="company.image" class="h-16 w-16 rounded-lg object-cover shadow-sm" />
            </div>
        </div>

        <div class="mt-4">
            <p class="max-w-[40ch] text-sm text-gray-500">
                {{ company.description }}
            </p>
        </div>

        <dl class="mt-6 flex gap-4 sm:gap-6">
            <div class="flex flex-col-reverse">
                <dt class="text-sm font-medium text-gray-600">Published</dt>
                <dd class="text-xs text-gray-500">31st June, 2021</dd>
            </div>

            <div class="flex flex-col-reverse">
                <dt class="text-sm font-medium text-gray-600">Reading time</dt>
                <dd class="text-xs text-gray-500">3 minute</dd>
            </div>
        </dl>
    </NuxtLink>
</template>