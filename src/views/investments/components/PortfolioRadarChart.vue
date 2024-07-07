<script setup lang="ts">
import { ref, computed } from 'vue';

const select = ref({ state: 'Today', abbr: 'FL' });
const items = [
  { state: 'Today', abbr: 'FL' },
  { state: 'This Month', abbr: 'GA' },
  { state: 'This Year', abbr: 'NE' }
];

// chart 1
const chartOptions1 = computed(() => {
  return {
    chart: {
      height: 480,
      type: 'radar'
    },
    title: {
      text: 'Basic Radar Chart'
    },
    yaxis: {
      stepSize: 20
    },
    xaxis: {
      categories: ['Profitability', 'Growth', 'Financial Strength', 'Value', 'Momentum', 'Liquidity']
    }
  };
});

// chart 1
const lineChart1 = {
  series: [
    {
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20]
    }
  ]
};
</script>

<template>
  <v-card elevation="0">
    <v-card variant="outlined">
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="9">
            <span class="text-subtitle-2 text-disabled font-weight-bold">Total Growth</span>
            <h3 class="text-h3 mt-1">$2,324.00</h3>
          </v-col>
          <v-col cols="12" sm="3"> </v-col>
        </v-row>
        <div class="mt-4">
          <apexchart type="radar" height="480" :options="chartOptions1" :series="lineChart1.series"> </apexchart>
        </div>
      </v-card-text>
    </v-card>
  </v-card>
</template>
