<script setup lang="ts">
import { ref } from "vue";

import BaseChart from "@/components/Charts/chartjs/BaseChart.vue";
import { getIncomeStatement } from "@/api/company";
// import statement from "@/components/Tables/Statement.vue";

const props = defineProps<{
  ticker: string;
}>();

const data = ref({});
const loading = ref(true);
const fetchIncomeStatement = () => {
  getIncomeStatement(props.ticker)
    .then(value => {
      console.log(value);
      data.value = value;
      loading.value = false;
    })
    .catch(error => {
      console.error(error);
    });
};

// function buildChartInfo(response) {
//   response.data.forEach(statementInfo => {
//     statementInfo.forEach(statement => {
//       statement;
//     });
//   });
// }

fetchIncomeStatement();
</script>

<template>
  <div>
    <BaseChart :chartInformation="data" :loading="loading" />
  </div>
</template>
