<script setup lang="ts">
import { WritenContent } from "@/types";

const props = defineProps<{
  entry: WritenContent
}>()


const path = `/diccionario/${props.entry.slug}`;

</script>
<template>
  <article class="group widget-common-style">
    <NuxtLink :to="path" @click="saveTerm(entry.slug, entry.title)">
      <img alt="text" :src="entry.image"
        class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25" />

      <div class="p-4">
        <h3 class="text-lg font-medium text-gray-900 dark:text-white">
          {{ entry.title }}
        </h3>

        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
          {{ entry.resume }}
        </p>
      </div>
    </NuxtLink>

  </article>
</template>