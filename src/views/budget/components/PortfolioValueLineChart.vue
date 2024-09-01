<script setup lang="ts">
import { ref, computed } from 'vue';

// chart 1
const chartOptions1 = computed(() => {
  return {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [5, 7, 5],
      curve: 'straight',
      dashArray: [0, 8, 5]
    },
    title: {
      text: 'Page Statistics',
      align: 'left'
    },
    legend: {
      tooltipHoverFormatter: function (val, opts) {
        return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>';
      }
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6
      }
    },
    xaxis: {
      categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan']
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + ' (mins)';
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + ' per session';
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val;
            }
          }
        }
      ]
    },
    grid: {
      borderColor: '#f1f1f1'
    }
  };
});

// chart 1
const lineChart1 = {
  series: [
    {
      name: 'Current Value',
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
    {
      name: 'Personal stimated value',
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    },
    {
      name: 'Elerem estimated value',
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
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
          <apexchart type="line" height="480" :options="chartOptions1" :series="lineChart1.series"> </apexchart>
        </div>
      </v-card-text>
    </v-card>
  </v-card>
</template>
