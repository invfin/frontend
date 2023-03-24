<script lang="ts" setup>
import { getCSSStyle } from "@/components/Skeletons/utils";

const props = defineProps<{
  animate?: boolean;
}>();

const animated: string = getCSSStyle("chart", props.animate);
</script>
<template>
  <div
    role="status"
    class="item-card p-4 border border-gray-200 rounded shadow md:p-6 dark:border-gray-700"
  >
    <div :class="animated">
      <div class="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700" />
      <div class="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-gray-700" />
      <div class="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700" />
      <div class="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-700" />
      <div class="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-700" />
      <div class="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700" />
      <div class="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-700" />
    </div>
    <span class="sr-only">Loading...</span>
  </div>
</template>
