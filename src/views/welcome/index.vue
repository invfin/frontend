<script setup lang="ts">
import BaseChart from "@/charts/chartjs/BaseChart.vue";

defineOptions({
  name: "Welcome"
});

const chartData = {
  labels: ["January", "February", "March"],
  datasets: [{ data: [40, 20, 12] }]
};
const chartInformation = { chartType: "Bar" };
</script>

<template>
  <div class="ml-10">
    <h1>Pure-Admin-</h1>
    <div>
      <BaseChart :chartData="chartData" :chartInformation="chartInformation" />
    </div>
  </div>
</template>
