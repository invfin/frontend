<script setup lang="ts">
import { Tab } from "@/types/index";

defineProps<{
    name: string,
    tabs: Tab[],
}>()

const initialStyle = "inline-block w-full p-4 rounded-tl-lg hover:bg-gray-100 focus:outline-none common-colors dark:hover:bg-gray-100";
const middleStyle = "inline-block w-full p-4 hover:bg-gray-100 focus:outline-none common-colors dark:hover:bg-gray-100";
const lastStyle = "inline-block w-full p-4 rounded-tr-lg hover:bg-gray-100 focus:outline-none common-colors dark:hover:bg-gray-100";

function correctClassStyle(index: number, tabs: Tab[]): string {
    switch (index) {
        case 0:
            return initialStyle;
        case tabs.length - 1:
            return lastStyle;
        default:
            return middleStyle;
    }
}

</script>
<template>
    <div class="sm:hidden">
        <!-- TODO: Maybe need to be fixed -->
        <label for="tabs" class="sr-only">Select tab</label>
        <select id="tabs"
            class="bg-white border-0 border-b border-gray-200 text-black text-sm rounded-t-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
            <option v-for="tab in tabs">{{ tab.name }}</option>
        </select>
    </div>
    <ul class="hidden text-sm font-medium text-center text-white0 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-white"
        id="fullWidthTab" :data-tabs-toggle="'#' + name" role="tablist">
        <li v-for="(tab, index) in tabs" class="w-full">
            <button :id="'#' + tab.slug" :data-tabs-target="'#' + tab.slug" type="button" role="tab"
                :aria-controls="tab.slug" :class="correctClassStyle(index, tabs)"
                :aria-selected="(index === 0) ? true : false">{{ tab.name }}</button>
        </li>
    </ul>
    <div :id="name" class="border-t border-gray-200 dark:border-gray-600">
        <slot />
    </div>
</template>