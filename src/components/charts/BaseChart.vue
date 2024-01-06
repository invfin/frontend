<script setup lang="ts">
defineProps<{
    chart: ChartOptionsBuilder
}>()

let currentTheme = useTheme();


// const fullChart = new SimpleChartBuilder()


// watch(currentTheme, async (newcurrentTheme, oldcurrentTheme) => {
//    fullChart.updateTheme(newcurrentTheme);
// })

</script>

<template>
    <ClientOnly>

    </ClientOnly>
</template>
