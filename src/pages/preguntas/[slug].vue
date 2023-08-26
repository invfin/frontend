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
<template></template>