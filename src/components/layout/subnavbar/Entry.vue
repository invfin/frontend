<script setup lang="ts">
import { Visit } from "@/types";

defineProps<{
  visit: Visit
}>()

async function removeFromHistory() { } 
</script>

<template>
  <li id="badge-dismiss-dark">
    <span
      class="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-gray-800 bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-300">
      {{ visit.title }}
      <button type="button"
        class="inline-flex items-center p-1 ml-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300"
        data-dismiss-target="#badge-dismiss-dark" aria-label="Remove">
        <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
        <span class="sr-only">Remove badge</span>
      </button>
    </span>
  </li>
</template>