<script setup lang="ts">

type Entry = {
  name: string,
  image: string,
  link: string,
  price: number,
  up: number,
}

const props = defineProps<{
  asset: string,
}>()

let entries = ref([] as Entry[]);

const API_URL = "https://example.com:8000/api/v1/valuations-list/"

useFetch(async () => {
  try {
    const response = await fetch(API_URL)
    if (response.ok) {
      const data = await response.json()
      entries.value = data // Update the fetchedData variable with the received data
    } else {
      throw new Error('Failed to fetch data')
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    // Handle errors if needed
  }
})

</script>
<template>
  <ul role="list" class="divide-y divide-gray-200 list-none dark:divide-gray-700">
    <li v-for="entry in entries" class="py-3 sm:py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center min-w-0">
          <img class="flex-shrink-0 w-10 h-10" :src="entry.image" alt="imac image">
          <div class="ml-3">
            <p class="font-medium text-black truncate dark:text-white">
              {{ entry.name }}
            </p>
            <div class="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true">
                <path clip-rule="evenodd" fill-rule="evenodd"
                  d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z">
                </path>
              </svg>
              {{ entry.up }}%
              <span class="ml-2 text-white0">vs last month</span>
            </div>
          </div>
        </div>
        <div class="inline-flex items-center text-base font-semibold text-black dark:text-white">
          ${{ entry.price }}
        </div>
      </div>
    </li>

  </ul>
</template>
