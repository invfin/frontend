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
    <ChartType
      :id="uuidv4()"
      :options="chartOptions"
      :data="props.chartInformation.chartData"
    />
  </div>
</template>
