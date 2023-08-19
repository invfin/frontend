<script setup lang="ts">
import { WritenContent } from "@/types/index";

defineProps<{
  entry: WritenContent
}>()
</script>

<template>
  <article class="mb-4 break-inside p-6 rounded-xl bg-white dark:bg-slate-800 flex flex-col bg-clip-border">
    <div class="flex pb-6 items-center justify-between">
      <div class="flex">
        <NuxtLink class="inline-block mr-4" :to="entry.author.slug">
          <img class="rounded-full max-w-none w-14 h-14" :src="entry.author.image" alt="user" />
        </NuxtLink>
        <div class="flex flex-col">
          <div class="flex items-center">
            <NuxtLink class="inline-block text-lg font-bold mr-2" :to="entry.author.slug">
              {{ entry.author.name }}
            </NuxtLink>
            <span>
              <svg class="fill-blue-500 dark:fill-slate-50 w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z">
                </path>
              </svg>
            </span>
          </div>
          <!-- <div class="text-slate-500 dark:text-slate-300">
            January 22, 2021
          </div> -->
        </div>
      </div>
    </div>
    <h2 class="text-3xl font-extrabold">
      {{ entry.title }}
    </h2>
    <div class="py-4">
      <a class="flex" href="#">
        <img class="max-w-full rounded-lg" :src="entry.image" />
      </a>
    </div>
    <p>
      {{ entry.resume }}
    </p>
    <div class="py-4">
      <a class="inline-flex items-center" href="#">
        <span class="mr-2">
          <svg class="fill-rose-600 dark:fill-rose-400" style="width: 24px; height: 24px;" viewBox="0 0 24 24">
            <path
              d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
            </path>
          </svg>
        </span>
        <span class="text-lg font-bold">{{ entry.views }}</span>
      </a>
    </div>
  </article>
</template>