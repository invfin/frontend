<script setup lang="ts">
import { SimpleSuperinvestor } from "@/types/index";

let props = defineProps<{
  entry: SimpleSuperinvestor
}>()

function path(entry: SimpleSuperinvestor) {
  return `/superinvestors/${entry.slug}`
}

function getNameAndFundName(entry: SimpleSuperinvestor) {
  var parts = entry.name.split(" - ");
  return { name: parts[0], fundName: parts[1] };
}

let result = getNameAndFundName(props.entry)

</script>
<template>
  <NuxtLink :to="path(entry)" class="w-full shadow widget-common-style">
    <div class="flex flex-col items-center pb-10">
      <img class="w-24 h-24 mb-3 rounded-full shadow-lg mt-4" :src="entry.image" alt="Bonnie image" />
      <h4 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ result.name }}</h4>
      <span class="text-sm text-gray-500 dark:text-gray-400">{{ result.fundName }}</span>
      <div class="flex -space-x-2 mt-7">
        <img v-for="asset in entry.portfolio"
          class="w-10 h-10 border-2 border-white bg-white rounded-full dark:border-gray-800" :src="asset.image" alt="">
      </div>
    </div>
  </NuxtLink>
</template>