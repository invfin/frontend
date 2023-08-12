<script setup lang="ts">
import { EntryOption } from "../types/index";

defineProps<{
    title: string
    entries: Array<EntryOption>
}>()
</script>

<template>
    <button type="button"
        class="flex items-center w-full p-2 text-base text-black transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
        aria-controls="dropdown-layouts" data-collapse-toggle="dropdown-layouts">
        <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black dark:text-white dark:group-hover:text-white"
            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
                d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z">
            </path>
        </svg>
        <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>{{ title }}</span>
        <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
        </svg>
    </button>
    <ul id="dropdown-layouts" class="hidden py-2 space-y-2">
        <li v-for="entry in entries">
            <NuxtLink :to="entry.path" class="
            flex items-center p-2 text-base
             text-black transition duration-75
              rounded-lg pl-11 group hover:bg-gray-100
               dark:text-gray-200 dark:hover:bg-gray-700">

                {{ entry.title }}
            </NuxtLink>
        </li>
    </ul>
</template>
