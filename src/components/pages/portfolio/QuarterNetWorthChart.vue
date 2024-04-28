<script setup lang="ts">


let props = defineProps<{
    entries: NetWorthQuarter[]
}>();

const currentTheme = useTheme();


const chart = new ChartOptionsBuilder(
    "netWorthQuarterChart",
    "bar",
    "Awensome title"
).stacked();

function cleanEntries(entries: NetWorthQuarter[]) {
    let spendings = [];
    let investments = [];
    let savings = [];

    const categories = entries.map((entry) => {
        spendings.push(parseFloat(entry["spendings"]));
        investments.push(parseFloat(entry["investments"]));
        savings.push(parseFloat(entry["savings"]));
        return entry["period__year"] + " Q" + entry["period__period"];
    });
    const series = [
        {
            label: "Gastos", data: spendings, backgroundColor: '#FF5722',
        },
        {
            label: "Ahorros", data: savings, backgroundColor: '#2196F3',
        },
        {
            label: "Inversiones", data: investments, backgroundColor: '#4CAF50',
        }
    ];
    return { labels: categories, datasets: series }
};

watch(
    () => props.entries,
    (newEntries) => {
        const data = cleanEntries(newEntries);
        chart.updateData(data);
    }
);

</script>


<template>
    <ChartsStackedColumns :chartData="chart.data" :chartOptions="chart.options" class="widget-common-style" />
</template>
