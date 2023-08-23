<script setup lang="ts">
import type { Term } from "@/types";

let term = ref({} as Term);

onBeforeMount(async () => {
  const route = useRoute()
  await useFetch(`${useRuntimeConfig().public.apiPath}terms/${route.params.slug}`, {
    server: true,
    lazy: false,
    async onResponse({ request, response, options }) {
      term.value = response._data;
    },
  })
})

useSeoMeta({
  title: () => term.value.title,
  description: () => term.value.resume
})
//TODO: finish adding seo things
//TODO: finish adding things on the right side
//TODO: maybe add comments
//TODO: add different title colors so it's nicer
//TODO: add a different footer
</script>
<template>
  <div class="grid grid-cols-1 sm:grid-cols-4 gap-8 ml-4 mt-4">

    <article class="col-span-3 whitespace-break-spaces">
      <header>
        <h1 class="text-5xl font-bold subpixel-antialiased inline-block
							bg-clip-text text-transparent
							bg-gradient-to-br from-purple-600 to-blue-500">{{ term.title }}
        </h1>
      </header>
      <PagesTermsTermPart v-for="termPart in term.term_parts" :termPart="termPart" />
      <footer>

      </footer>
    </article>


    <!-- Right side -->
    <div>

      <a href="#" class="fixed max-w-sm widget-common-style p-6">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
          acquisitions 2021</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions
          of
          2021 so far, in reverse chronological order.</p>
      </a>

    </div>
  </div>
</template>
