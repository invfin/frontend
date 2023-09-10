<script setup lang="ts">
defineProps<{
  colour: string,
  percent: number,
}>()

function getColour(colour: string) {
  switch (colour) {
    case "red":

      return "bg-yellow-400 h-2.5 rounded-full";
    case "green":
      return "bg-green-600 h-2.5 rounded-full dark:bg-green-500";
    case "red":

      return "bg-red-600 h-2.5 rounded-full dark:bg-red-500";

    default:
      return "bg-gray-600 h-2.5 rounded-full dark:bg-gray-300";
  }
}

</script>
<template>
  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
    <div :class="getColour(colour)" :style="'width: ' + percent + '%'"></div>
  </div>
</template>