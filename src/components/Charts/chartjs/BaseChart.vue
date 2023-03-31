<script setup lang="ts">
import { RawChartInformation } from "./types";
import { uuidv4 } from "@/utils/general";
import BuildChartData from "@/components/Charts/chartjs/utils";

const props = defineProps<{
  rawChartInformation: RawChartInformation;
}>();

const [ChartType, chartData] = BuildChartData.getChartTypeAndChartData(
  props.rawChartInformation
);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: chartData.displayTitle,
      text: chartData.chartTitle
    },
    zoom: {
      pan: {
        enabled: chartData.usePan
      },
      zoom: {
        wheel: {
          enabled: chartData.useWheel
        },
        pinch: {
          enabled: chartData.usePinch
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
      :data="chartData.chartData"
    />
  </div>
</template>
