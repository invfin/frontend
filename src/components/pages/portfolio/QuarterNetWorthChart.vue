<script setup lang="ts">


let props = defineProps<{
    entries: NetWorthQuarter[]
}>();


const categories = []; // quarters
const series = [
    {
        name: "",
        data: [] //values sorted
    }
];
const currentTheme = useTheme();


const chart = new ChartOptionsBuilder(
    "netWorthQuarterChart",
    "bar",
    currentTheme.value,
    "350"
);

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
            "name": "Gastos", "data": spendings,
        },
        {
            "name": "Ahorros", "data": savings,
        },
        {
            "name": "Inversiones", "data": investments,
        }
    ]
    return { categories, series }
};

watch(
    () => props.entries,
    (newEntries) => {
        const { categories, series } = cleanEntries(newEntries);
        console.log(categories);
        console.log(series);
        chart.updateData(categories, series);
    }
);

</script>


<template>
    <ChartsStackedColumns :chart="chart" class="widget-common-style" />
</template>
