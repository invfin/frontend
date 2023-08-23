<script setup lang="ts">
import { initFlowbite } from 'flowbite';

onMounted(() => {
  initFlowbite();
})
const props = defineProps<{
  visit: Visit
}>()

const path = await getFullPath(props.visit);

</script>

<template>
  <li :id="visit.path">
    <span
      class="inline-flex items-center p-1 text-sm font-medium rounded bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
      <NuxtLink :to="path">{{ visit.title }}</NuxtLink>
      <button type="button" @click="remove(visit.path)"
        class="inline-flex items-center p-1 ml-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300"
        :data-dismiss-target="'#' + visit.path" aria-label="Remove">
        <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
        <span class="sr-only">Remove badge</span>
      </button>
    </span>
  </li>
</template>
