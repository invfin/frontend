<script setup lang="ts">
defineProps<{
  title: string,
  content: string,
  linkValue: string,
  linkPath: string,
}>()
</script>
<template>
  <div data-popover role="tooltip"
    class="absolute z-10 invisible inline-block text-sm font-light text-white0 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-black dark:border-gray-600 dark:text-white">
    <div class="p-3 space-y-2">
      <h3 class="font-semibold text-black dark:text-white">{{ title }}</h3>
      <p>{{ content }}</p>
      <NuxtLink :to="linkPath"
        class="flex items-center font-medium text-primary-600 dark:text-primary-500 dark:hover:text-primary-600 hover:text-primary-700">
        {{ linkValue }}
        <svg class="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"></path>
        </svg>
      </NuxtLink>
    </div>
    <div data-popper-arrow></div>
  </div>
</template>