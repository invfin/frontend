<script setup lang="ts">
import { ChartInformation } from "./types";
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
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  Decimation,
  Filler,
  Legend,
  SubTitle,
  Title,
  Tooltip,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale
} from "chart.js";
import { ref } from "vue";

ChartJS.register(
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  Decimation,
  Filler,
  Legend,
  SubTitle,
  Title,
  Tooltip,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale
);

const props = defineProps<{
  chartInformation: ChartInformation;
  loading: boolean;
}>();

const loading = ref(props.loading);

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
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: props.chartInformation.displayTitle,
      text: props.chartInformation.chartTitle
    },
    zoom: {
      pan: {
        enabled: props.chartInformation.usePan
      },
      zoom: {
        wheel: {
          enabled: props.chartInformation.useWheel
        },
        pinch: {
          enabled: props.chartInformation.usePinch
        },
        mode: "x"
      }
    }
  }
};
</script>

<template>
  <div class="item-card">
    <div v-if="loading">
      <div
        role="status"
        class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
      >
        <div
          class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"
        />
        <div class="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700" />
        <div class="flex items-baseline mt-4 space-x-6">
          <div class="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700" />
          <div class="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-gray-700" />
          <div class="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700" />
          <div class="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-700" />
          <div class="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-700" />
          <div class="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700" />
          <div class="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-700" />
        </div>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <ChartType
      v-else
      :id="uuidv4()"
      :options="chartOptions"
      :data="props.chartInformation.chartData"
    />
  </div>
</template>
