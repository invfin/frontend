<script setup lang="ts">
import { WritenContent } from "@/types/index";

defineProps<{
  entry: WritenContent
}>()

</script>
<template>
  <article class="group">
    <img alt="text" :src="entry.image"
      class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25" />

    <div class="p-4">
      <a href="#">
        <h3 class="text-lg font-medium text-gray-900 dark:text-white">
          {{ entry.title }}
        </h3>
      </a>

      <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
        {{ entry.resume }}
      </p>
    </div>
  </article>
</template>