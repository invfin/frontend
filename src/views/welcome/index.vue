<script setup lang="ts">
import BaseChart from "@/charts/chartjs/BaseChart.vue";

defineOptions({
  name: "Welcome"
});

const chartData = {
  labels: ["January", "February", "March"],
  datasets: [{ data: [40, 20, 12] }]
};
const chartInformation = { chartType: "Bar", chartData: chartData };
</script>

<template>
  <div class="ml-10">
    <h1>Pure-Admin-</h1>
    <div>
      <BaseChart :chartInformation="chartInformation" />
    </div>
  </div>
</template>
