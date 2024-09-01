<script setup lang="ts">
import { ref } from 'vue';
import { VueUiQuickChart, VueDataUi, VueUiXy, VueUiSkeleton } from 'vue-data-ui';
const dialog = defineModel();

const config = ref({
  responsive: false,
  barAnimated: true,
  barGap: 12,
  barStrokeWidth: 1,
  blurOnHover: true,
  chartIsBarUnderDatasetLength: 6,
  color: '#CCCCCC',
  dataLabelFontSize: 14,
  dataLabelRoundingPercentage: 1,
  dataLabelRoundingValue: 1,
  donutHideLabelUnderPercentage: 3,
  donutLabelMarkerStrokeWidth: 1,
  donutRadiusRatio: 0.4,
  donutShowTotal: true,
  donutStrokeWidth: 2,
  donutThicknessRatio: 0.18,
  donutTotalLabelFontSize: 24,
  donutTotalLabelOffsetY: 0,
  donutTotalLabelText: 'Total',
  donutUseShadow: false,
  donutShadowColor: '#1A1A1A',
  fontFamily: 'inherit',
  legendFontSize: 12,
  legendIcon: 'circleFill',
  legendIconSize: 12,
  lineAnimated: true,
  lineSmooth: true,
  lineStrokeWidth: 2,
  paletteStartIndex: 0,
  showDataLabels: true,
  showLegend: true,
  showTooltip: true,
  showUserOptions: false,
  tooltipCustomFormat: null,
  tooltipBorderRadius: 4,
  tooltipBorderColor: '#3A3A3A',
  tooltipBorderWidth: 1,
  useCustomLegend: false,
  valuePrefix: '',
  valueSuffix: '',
  xyAxisStroke: '#4A4A4A',
  xyAxisStrokeWidth: 1,
  xyGridStroke: '#5A5A5A',
  xyGridStrokeWidth: 0.5,
  xyHighlighterColor: '#FFFFFF',
  xyHighlighterOpacity: 0.05,
  xyLabelsXFontSize: 8,
  xyLabelsYFontSize: 12,
  xyPaddingBottom: 48,
  xyPaddingLeft: 48,
  xyPaddingRight: 12,
  xyPaddingTop: 24,
  xyPeriods: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
  xyPeriodLabelsRotation: 0,
  xyScaleSegments: 10,
  xyShowAxis: true,
  xyShowGrid: true,
  xyShowScale: true,
  yAxisLabel: 'Quantity',
  xAxisLabel: 'Time',
  axisLabelsFontSize: 12,
  zoomXy: true,
  zoomColor: '#CCCCCC',
  zoomHighlightColor: '#4A4A4A',
  zoomFontSize: 14,
  zoomUseResetSlot: false
});
const component = ref('VueUiQuickChart');
const title = ref('default');
const dataset = ref([]);
const dataSources = [
  {
    title: 'bar',
    value: [
      {
        name: 'name',
        series: [1, 10, 20, 30, 25, 20, 12, 16, 19, 21],
        color: '#6376DD',
        type: 'line',
        shape: 'circle',
        useArea: false,
        useProgression: false,
        dataLabels: true,
        smooth: false,
        dashed: false,
        useTag: 'none'
      }
    ]
  },
  {
    title: 'line',
    value: [
      {
        name: 'name',
        series: [1, 16, 19, 21],
        color: '#6376DD',
        type: 'line',
        shape: 'circle',
        useArea: false,
        useProgression: false,
        dataLabels: true,
        smooth: false,
        dashed: false,
        useTag: 'none'
      }
    ]
  }
];
</script>
<template>
  <div>
    <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
      <perfect-scrollbar>
        <v-toolbar>
          <v-btn icon="mdi-close" @click="dialog = false"></v-btn>

          <v-toolbar-title>{{ title }}</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items>
            <v-btn text="Save" variant="text" @click="dialog = false"></v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container fluid>
          <v-row>
            <v-col cols="8">
              <v-card class="d-flex justify-center">
                <v-card-text style="width: 80%">
                  <VueUiXy v-if="dataset" :dataset="dataset" :config="config" />
                  <VueUiSkeleton v-else :config="config" />
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="4">
              <v-card prepend-icon="mdi-account" title="User Profile">
                <v-card-text>
                  <v-row dense>
                    <v-col cols="12" md="4" sm="6">
                      <v-select v-model="dataset" :items="dataSources" label="Sources"></v-select>
                    </v-col>
                  </v-row>
                  <small class="text-caption text-medium-emphasis">*indicates required field</small>
                </v-card-text>
                <v-divider></v-divider>
                {{ dataset }}
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </perfect-scrollbar>
    </v-dialog>
  </div>
</template>
