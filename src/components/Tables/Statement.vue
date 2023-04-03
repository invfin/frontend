<script setup lang="ts">
import { ref } from "vue";

import BaseChart from "@/components/Charts/chartjs/BaseChart.vue";
import { getIncomeStatement, Statement } from "@/api/company";
import ChartSkeleton from "@/components/Skeletons/ChartSkeleton.vue";
import { RawChartInformation } from "@/components/Charts/chartjs/types";
import FixedFirstRowColumnTable from "@/components/Tables/FixedFirstRowColumnTable.vue";

const props = defineProps<{
  ticker: string;
}>();

const rawChartInformation = ref({} as RawChartInformation<Statement>);
const tableInformation = ref({}); // TODO fix
const loading = ref(true);
const fetchIncomeStatement = () => {
  getIncomeStatement(props.ticker)
    .then(value => {
      if (value.success) {
        rawChartInformation.value = {
          chartType: "Bar",
          chartTitle: "Income Statement",
          responseData: value.data
        } as RawChartInformation<Statement>;
        tableInformation.value = value.data;
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
  <ChartSkeleton v-if="loading" />
  <FixedFirstRowColumnTable v-else :tableInformation="tableInformation" />
</template>
