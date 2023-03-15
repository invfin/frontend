<script setup lang="ts">
import { ChartData, ChartInformation } from "./types";
import { uuidv4 } from "@/utils/general";

import {
  Bar,
  Doughnut,
  Line,
  Pie,
  PolarArea,
  Radar,
  Bubble,
  Scatter
} from "vue-chartjs";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const props = defineProps<{
  chartData: ChartData;
  chartInformation: ChartInformation;
}>();
function getChartType(chartType) {
  switch (chartType) {
    case "Bar":
      return Bar;
    case "Doughnut":
      return Doughnut;
    case "Line":
      return Line;
    case "Pie":
      return Pie;
    case "PolarArea":
      return PolarArea;
    case "Radar":
      return Radar;
    case "Bubble":
      return Bubble;
    case "Scatter":
      return Scatter;
  }
}

const ChartType = getChartType(props.chartInformation.chartType);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
};
</script>

<template>
  <div
    class="max-w-[45rem] p-6 h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <ChartType :id="uuidv4()" :options="chartOptions" :data="props.chartData" />
  </div>
</template>
