<script setup lang="ts">
import type { Visit } from "@/types";

let title = ref('My title');
let data = ref(null);
let path = ref(null);

console.log(path);

onBeforeMount(async () => {
  console.log("onBeforeMount");
  // component is rendered as part of the initial request
  // pre-fetch data on server as it is faster than on the client
  const route = useRoute()
  const url = useRequestURL()
  path.value = url.href;
  const { pending, data, error, execute, refresh } = await useFetch(`${useRuntimeConfig().public.apiPath}terms/${route.params.slug}`, {
    server: true,
    lazy: false,
    onResponse({ request, response, options }) {
      data.value = response._data;
    },
  })


})

onMounted(async () => {
  console.log("onMounted");
  if (path.value) {
    // if data is null on mount, it means the component
    // is dynamically rendered on the client. Perform a
    // client-side fetch instead.
    console.log(path);
    definePageMeta({
      visit: {
        path: path.value,
        title: "title",
        category: "blog",
      } as Visit
    })
  }
})

useSeoMeta({
  title,
  description: () => `description: ${title.value}`
})


</script>
<template>
  {{ data }}
</template>