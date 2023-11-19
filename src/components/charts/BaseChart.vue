<script setup lang="ts">
let props = defineProps<{
  apiUrl: string,
  chartId: string,
  chartType: string,
  height: string
}>()

let currentTheme = useTheme();

const chart = new ChartOptionsBuilder(props.apiUrl, props.chartId, props.chartType, currentTheme.value, props.height);

watch(currentTheme, async (newcurrentTheme, oldcurrentTheme) => {
  chart.updateTheme(newcurrentTheme);
})

const series = [{
  name: 'Income',
  type: 'column',
  data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
}, {
  name: 'Cashflow',
  type: 'column',
  data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
}, {
  name: 'Revenue',
  type: 'line',
  data: [20, 29, 37, 36, 44, 45, 50, 58]
}]

const fullChart = new SimpleChartBuilder()
</script>

<template>
  <ClientOnly>
    <apexchart :type="fullChart.chartType" :height="fullChart.height" :options="fullChart.getOptions()"
      :series="fullChart.series"></apexchart>
  </ClientOnly>
</template>