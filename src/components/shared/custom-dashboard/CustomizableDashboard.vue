<script setup lang="ts">
import { ref, onMounted, nextTick, type Ref } from 'vue';

import { GridStack } from 'gridstack';
import DashboardWidget from './DashboardWidget.vue';
import EditWidget from './EditWidget.vue';
import DashboardSubNavbar from './DashboardSubNavbar.vue';

import type { Widget } from '@/types/custom-dashboard';

function saveConfig() {
  const dataStr = JSON.stringify(items.value, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
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
  URL.revokeObjectURL(url);
}

const dialog = ref(false);
const title = ref('Inversiones');
const count = ref(0);
let grid: GridStack = null; // DO NOT use ref(null) as proxies GS will break all logic when comparing structures... see https://github.com/gridstack/gridstack.js/issues/2115
const items: Ref<Widget[]> = ref([]);

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
    margin: 6
  });

  grid.on('change', onChange);
});

function addNewWidget() {
  dialog.value = true;
  const node = { id: String(count.value++), x: 0, y: 0, w: 5, h: 5, config: { component: 'VueUi3dBar', data: 'income' } };
  items.value.push(node);
  nextTick(() => {
    grid.makeWidget(node.id);
  });
}

function remove(widgetId) {
  const index = items.value.findIndex((w) => w.id == widgetId);
  items.value.splice(index, 1);
  const selector = `#${widgetId}`;
  grid.removeWidget(selector, false);
}

function editWidget(widget) {}

function duplicateWidget(widget) {
  const node = { ...widget, id: String(count.value++) };
  items.value.push(node);
  nextTick(() => {
    grid.makeWidget(node.id);
  });
}
</script>

<template>
  <DashboardSubNavbar :title="title">
    <v-btn @click="addNewWidget">Add Widget</v-btn>
    <v-btn @click="saveConfig">Save</v-btn>
  </DashboardSubNavbar>
  <div class="grid-stack mb-4">
    <div
      v-for="widget in items"
      class="grid-stack-item"
      :gs-x="widget.x"
      :gs-y="widget.y"
      :gs-w="widget.w"
      :gs-h="widget.h"
      :gs-id="widget.id"
      :id="widget.id"
      :key="widget.id"
    >
      <DashboardWidget @remove="remove(widget.id)" @edit="editWidget(widget)" @duplicate="duplicateWidget(widget)" :widget="widget" />
    </div>
  </div>
  <EditWidget v-model="dialog" />
</template>
