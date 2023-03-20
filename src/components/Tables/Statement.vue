<script setup lang="ts">
import { ref } from "vue";
// import { onBeforeMount } from 'vue'

import { getIncomeStatement } from "@/api/company";

const props = defineProps<{
  ticker: string;
}>();

const data = ref(null);
// var loading = ref(true);

const fetchIncomeStatement = async () => {
  getIncomeStatement(props.ticker)
    .then(value => {
      data.value = value;
      console.log(value);
    })
    .catch(error => {
      console.error(error);
    });
};

fetchIncomeStatement();
</script>

<template>
  <div
    class="max-w-[45rem] p-6 h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  />
</template>
