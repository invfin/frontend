<script setup lang="ts">
import { ref, computed } from 'vue';

const select = ref({ state: 'Today', abbr: 'FL' });
const items = [
  { state: 'Today', abbr: 'FL' },
  { state: 'This Month', abbr: 'GA' },
  { state: 'This Year', abbr: 'NE' }
];

const series = [
  {
    data: [
      {
        x: 'INTC',
        y: 1.2
      },
      {
        x: 'GS',
        y: 0.4
      },
      {
        x: 'CVX',
        y: -1.4
      },
      {
        x: 'GE',
        y: 2.7
      },
      {
        x: 'CAT',
        y: -0.3
      },
      {
        x: 'RTX',
        y: 5.1
      },
      {
        x: 'CSCO',
        y: -2.3
      },
      {
        x: 'JNJ',
        y: 2.1
      },
      {
        x: 'PG',
        y: 0.3
      },
      {
        x: 'TRV',
        y: 0.12
      },
      {
        x: 'MMM',
        y: -2.31
      },
      {
        x: 'NKE',
        y: 3.98
      },
      {
        x: 'IYT',
        y: 1.67
      }
    ]
  }
];
const chartOptions = {
  legend: {
    show: false
  },
  chart: {
    height: 480,
    type: 'treemap'
  },
  title: {
    text: 'Treemap with Color scale'
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: '12px'
    },
    formatter: function (text: string, op) {
      return [text, op.value];
    },
    offsetY: -4
  },
  plotOptions: {
    treemap: {
      enableShades: true,
      shadeIntensity: 0.5,
      reverseNegativeShade: true,
      colorScale: {
        ranges: [
          {
            from: -6,
            to: 0,
            color: '#CD363A'
          },
          {
            from: 0.001,
            to: 6,
            color: '#52B12C'
          }
        ]
      }
    }
  }
};
</script>

<template>
  <v-card elevation="0">
    <v-card variant="outlined">
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="11">
            <span class="text-subtitle-2 text-disabled font-weight-bold">Portfolio</span>
          </v-col>
          <v-col cols="12" sm="1">
            <h3 class="text-h3 mt-1">$2,324.00</h3>
          </v-col>
        </v-row>
        <div id="chart">
          <apexchart type="treemap" height="480" :options="chartOptions" :series="series"></apexchart>
        </div>
      </v-card-text>
    </v-card>
  </v-card>
</template>
