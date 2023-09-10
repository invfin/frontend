<script setup lang="ts">
import { WritenContent } from "@/types/index";

defineProps<{
  entry: WritenContent
}>()
</script>

<template>
  <article class="max-w-xl widget-common-style rounded-lg shadow-md flex flex-col">
    <!-- Blog Image -->
    <img :src="entry.image" alt="Blog Image" class="w-full h-48 object-cover object-center rounded-md mb-4">

    <!-- Author Information -->
    <div class="flex items-center p-4">
      <img :src="entry.author.image" alt="Author Image" class="w-10 h-10 object-cover object-center rounded-full">
      <div class="ml-4">
        <p class="font-semibold">{{ entry.author.name }}</p>
        <!-- <p class="">Author Bio or Description</p> -->
      </div>
    </div>

    <div class="p-4 flex-grow">
      <!-- Blog Title -->
      <h2 class="text-2xl font-semibold mb-2">{{ entry.title }}</h2>

      <!-- Blog Resume -->
      <p class="mb-4">{{ entry.resume }}</p>


    </div>
    <!-- Blog Statistics (Views, Likes, Comments) -->
    <div class="flex items-center p-4">
      <div class="flex items-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M19 11a7 7 0 0 1-7 7m7-7H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2z" />
        </svg>
        <span>{{ entry.views }} Views</span>
      </div>
      <div class="flex items-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11a2 2 0 0 1-1.293 1.854l-5.5 2.75a2 2 0 0 1-1.414 0l-5.5-2.75A2 2 0 0 1 2 13V2zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 .293.768l5.5 2.75a1 1 0 0 0 .824 0l5.5-2.75A1 1 0 0 0 18 12V1a1 1 0 0 0-1-1H6z"
            clip-rule="evenodd" />
          <path d="M15 16h-2v-2h2v2zm0-4h-2V6h2v6z" />
        </svg>
        <span>500 Likes</span>
      </div>
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a8 8 0 0 1 8 8c0 4.418-3.582 8-8 8s-8-3.582-8-8a8 8 0 0 1 8-8zm1 12h2v-2h-2v2zm0-4h2V6h-2v4z" />
        </svg>
        <span>30 Comments</span>
      </div>
    </div>


  </article>
</template>
