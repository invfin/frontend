<script setup lang="ts">
import { ref } from "vue";

import BaseChart from "@/components/Charts/chartjs/BaseChart.vue";
import { getIncomeStatement } from "@/api/company";
import ChartSkeleton from "@/components/Skeletons/ChartSkeleton.vue";
import { RawChartInformation } from "@/components/Charts/chartjs/types";
// import statement from "@/components/Tables/Statement.vue";

const props = defineProps<{
  ticker: string;
}>();

const rawChartInformation = ref({} as RawChartInformation);
const loading = ref(true);
const fetchIncomeStatement = () => {
  getIncomeStatement(props.ticker)
    .then(value => {
      if (value.success) {
        rawChartInformation.value = {
          chartType: "Bar",
          chartTitle: "Income Statement",
          responseData: value.data
        } as RawChartInformation;
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
  <BaseChart v-else :rawChartInformation="rawChartInformation" />
</template>
