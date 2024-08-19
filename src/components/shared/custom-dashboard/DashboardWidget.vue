<script setup lang="ts">
import { ref } from 'vue';
import { VueDataUi } from 'vue-data-ui';
import { DotsVerticalIcon } from 'vue-tabler-icons';
import type { WidgetOption, Widget } from '@/types/custom-dashboard';

defineProps({
  widgetOptions: Array as () => WidgetOption[],
  widget: Object as () => Widget
});

const config = ref({
  responsive: false,
  style: {
    fontFamily: 'inherit',
    shape: 'bar',
    chart: {
      animation: { use: true, speed: 1, acceleration: 1 },

      color: '#CCCCCC',
      bar: { color: '#5f8bee', stroke: '#5f8bee', strokeWidth: 0.7, shadeColor: '#2D353C' },
      box: {
        stroke: '#CCCCCC',
        strokeWidth: 0.7,
        strokeDasharray: 2,
        dimensions: { width: 160, height: 326, top: 27, bottom: 9, left: 24, right: 24, perspective: 18 }
      },
      legend: {
        showDefault: true,
        fontSize: 10,
        color: '#CCCCCC',
        bold: false,
        roundingValue: 0,
        roundingPercentage: 0,
        prefix: '',
        suffix: 'k€',
        hideUnderPercentage: 3
      },
      dataLabel: { show: true, bold: true, color: '#5f8bee', fontSize: 12, rounding: 1 }
    }
  },
  userOptions: { show: false },
  table: {
    show: false,
    // responsiveBreakpoint: 300,
    columnNames: { series: 'Series', value: 'Value', percentage: 'Percentage' },
    th: { backgroundColor: '#2A2A2A', color: '#CCCCCC', outline: 'none' },
    td: { backgroundColor: '#2A2A2A', color: '#CCCCCC', outline: 'none', roundingValue: 0, roundingPercentage: 0 }
  }
});

const dataset = ref({
  series: [
    {
      name: 'Brazil',
      value: 153,
      color: '#42d392',
      breakdown: [
        { name: 'São Paulo', value: 90 },
        { name: 'Rio de Janeiro', value: 50 },
        { name: 'Brasilia', value: 13 }
      ]
    },
    {
      name: 'France',
      value: 255,
      color: '#6376DD',
      breakdown: [
        { name: 'Paris', value: 150 },
        { name: 'Lyon', value: 55 },
        { name: 'Marseille', value: 50 }
      ]
    },
    {
      name: 'India',
      value: 113,
      color: '#d98320',
      breakdown: [
        { name: 'Mumbai', value: 75 },
        { name: 'Delhi', value: 25 },
        { name: 'Bangalore', value: 13 }
      ]
    },
    {
      name: 'Japan',
      value: 290,
      color: '#d94126',
      breakdown: [
        { name: 'Tokyo', value: 220 },
        { name: 'Yokohama', value: 50 },
        { name: 'Osaka', value: 20 }
      ]
    },
    {
      name: 'Germany',
      value: 275,
      color: '#f5ee38',
      breakdown: [
        { name: 'Berlin', value: 100 },
        { name: 'Hamburg', value: 90 },
        { name: 'Munich', value: 85 }
      ]
    }
  ]
});
</script>

<template>
  <v-card elevation="0" class="grid-stack-item-content overflow-hidden bubble-shape m-2">
    <div class="d-flex align-center">
      <span class="text-h5 ml-3">Title</span>

      <v-spacer></v-spacer>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon style="z-index: 10" rounded="sm" size="small" variant="flat" v-bind="props">
            <DotsVerticalIcon stroke-width="1.5" size="22" />
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="option.fn(widget)" v-for="(option, i) in widgetOptions" :key="i">
            <v-list-item-title>{{ option.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <VueDataUi :component="widget.config.component" :dataset="dataset" :config="config"> </VueDataUi>
  </v-card>
</template>
