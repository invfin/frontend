<script setup lang="ts">
import { ref, onMounted } from 'vue';

defineProps<{
  dataUrl: string
}>()

const offset = ref(50);
const values = ref([]);
const filters = ref({});

const { data, error, execute, refresh } = await useFetch(dataUrl, {
  query: { limit: 50, offset: offset },
  server: false,
  lazy: true,
  onResponse({ request, response, options }) {
    // TODO: handle end of list
    let responseData = response._data;
    values.value.push(...responseData.results)
  },
})

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
})


function handleScroll() {
  if (
    window.scrollY + window.innerHeight >=
    document.body.scrollHeight - 100
  ) {
    offset.value = offset.value + 50;
    execute();
  }
}

</script>

<template>
  <div>
    <slot name="listFilter" :modelValue="filters" class="mb-4 mt-4"></slot>
    <div class="grid grid-cols-3 gap-4 mt-4">
      <slot name="listEntries" v-for="value in values" :value="value"></slot>
    </div>
  </div>
</template>
  