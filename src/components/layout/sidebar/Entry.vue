<script setup lang="ts">
import type { SidebarMenu } from "@/types";

defineProps<{
    entry: SidebarMenu
}>()

let currentTheme = useTheme();

</script>

<template>
    <NuxtLink :to=entry.path :data-tooltip-target="entry.title.replace(/\s+/g, '-')" data-tooltip-placement="right" class="
            flex items-center p-2 
            text-base text-black 
            transition duration-75 rounded-lg 
            hover:bg-gray-100 group 
            dark:text-gray-200 
            dark:hover:bg-gray-700">

        <img :src='currentTheme === "dark" ? entry.logos.black : entry.logos.white'
            class="flex-shrink-0 w-6 h-6 text-white0 transition duration-75 group-hover:text-black dark:text-white dark:group-hover:text-white"
            alt="icon" />

        <span class="ml-3 hiddeWithSidebar hidden" sidebar-toggle-item>{{ entry.title }}</span>
    </NuxtLink>
    <div :id="entry.title.replace(/\s+/g, '-')" role="tooltip"
        class="absolute z-40 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-black rounded-lg shadow-sm opacity-0 tooltip hiddeWithSidebar">
        {{ entry.title }}
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
</template>