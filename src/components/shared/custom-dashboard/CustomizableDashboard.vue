<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';

import { GridStack } from 'gridstack';

import DashboardSubNavbar from './DashboardSubNavbar.vue';

import { VueDataUi } from 'vue-data-ui';
import 'vue-data-ui/style.css';
import { DotsVerticalIcon } from 'vue-tabler-icons';

const config = ref({
  responsive: true,
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
    responsiveBreakpoint: 300,
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

function saveConfig() {
  // Convert the JSON data to a string
  const dataStr = JSON.stringify(items.value, null, 2);

  // Create a Blob object with the data
  const blob = new Blob([dataStr], { type: 'application/json' });

  // Create a URL for the Blob object
  const url = URL.createObjectURL(blob);

  // Create an anchor element and trigger a download
  // const link = document.createElement('a');
  // link.href = url;
  // link.download = 'data.json';

  // // Append the anchor to the document, click it, and then remove it
  // document.body.appendChild(link);
  // link.click();
  // document.body.removeChild(link);

  window.open(url, '_blank');

  // Release the Blob object
  URL.revokeObjectURL(url);
}

const title = ref('Inversiones');

const count = ref(0);
let grid: GridStack = null; // DO NOT use ref(null) as proxies GS will break all logic when comparing structures... see https://github.com/gridstack/gridstack.js/issues/2115
const items = ref([{ id: 'w_5', x: 0, y: 0, w: 5, h: 5, component: 'VueUi3dBar' }]);
const currentChart = ref(null);

function onChange(event, changeItems) {
  changeItems.forEach((item) => {
    const widget = items.value.find((w) => w.id == item.id);
    if (!widget) {
      alert('Widget not found: ' + item.id);
      return;
    }
    widget.x = item.x;
    widget.y = item.y;
    widget.w = item.w;
    widget.h = item.h;
  });
}

onMounted(() => {
  grid = GridStack.init({
    margin: 6,
    marginBottom: 3
  });

  grid.on('change', onChange);
});

function addNewWidget() {
  const node = items[count.value] || { x: 0, y: 0, w: 5, h: 5, component: 'VueUi3dBar' };
  node.id = 'w_' + count.value++;
  items.value.push(node);
  nextTick(() => {
    grid.makeWidget(node.id);
  });
}

function remove(widget) {
  const index = items.value.findIndex((w) => w.id == widget.id);
  items.value.splice(index, 1);
  const selector = `#${widget.id}`;
  grid.removeWidget(selector, false);
}

function generatePdf(widget) {
  widget.generatePdf();
}

function generateImage(widget) {
  widget.generateImage();
}

function generateCsv(widget) {
  widget.generateCsv();
}

function toggleLabels(widget) {
  widget.toggleLabels();
}

function toggleTable(widget) {
  widget.toggleTable();
}

function editWidget() {}

const chartOptions = [
  { title: 'Remove', fn: remove },
  { title: 'generatePdf', fn: generatePdf },
  { title: 'generateImage', fn: generateImage },
  { title: 'generateCsv', fn: generateCsv },
  { title: 'toggleLabels', fn: toggleLabels },
  { title: 'toggleTable', fn: toggleTable },
  { title: 'editWidget', fn: editWidget }
];
</script>

<template>
  <DashboardSubNavbar :title="title">
    <v-btn @click="addNewWidget()">Add Widget</v-btn>
    <v-btn @click="saveConfig()">Save config</v-btn>
  </DashboardSubNavbar>
  <div class="grid-stack mb-4">
    <div
      v-for="item in items"
      class="grid-stack-item"
      :gs-x="item.x"
      :gs-y="item.y"
      :gs-w="item.w"
      :gs-h="item.h"
      :gs-id="item.id"
      :id="item.id"
      :key="item.id"
    >
      <v-card elevation="0" class="grid-stack-item-content overflow-hidden bubble-shape m-2">
        <div class="d-flex align-center">
          <span class="text-h5">Title</span>

          <v-spacer></v-spacer>

          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn icon style="z-index: 10" rounded="sm" size="small" variant="flat" v-bind="props">
                <DotsVerticalIcon stroke-width="1.5" size="22" />
              </v-btn>
            </template>

            <v-list>
              <v-list-item @click="option.fn(item)" v-for="(option, i) in chartOptions" :key="i">
                <v-list-item-title>{{ option.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <VueDataUi :component="item.component" :dataset="dataset" :config="config"> </VueDataUi>
      </v-card>
    </div>
  </div>
</template>

<style>
.grid-stack .grid-stack-placeholder > .placeholder-content {
  left: 2px;
  right: 2px;
}
.grid-stack > .grid-stack-item > .grid-stack-item-content {
  left: 2px;
  right: 2px;
}
</style>
