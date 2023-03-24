<script setup lang="ts">
import { ref } from "vue";

import { createChart } from "@/components/Charts/chartjs/utils";
import BaseChart from "@/components/Charts/chartjs/BaseChart.vue";
import { getIncomeStatement } from "@/api/company";
import ChartSkeleton from "@/components/Skeletons/ChartSkeleton.vue";
// import statement from "@/components/Tables/Statement.vue";

const props = defineProps<{
  ticker: string;
}>();

const chartInformation = ref({});
const loading = ref(true);
const fetchIncomeStatement = () => {
  getIncomeStatement(props.ticker)
    .then(value => {
      if (value.success) {
        chartInformation.value = createChart(
          "Bar",
          "Income Statement",
          value.data
        );
        loading.value = false;
      }
    })
    .catch(error => {
      console.error(error);
    });
};

fetchIncomeStatement();
</script>

<template>
  <ChartSkeleton v-if="loading" />
  <BaseChart v-else :chartInformation="chartInformation" />
</template>
