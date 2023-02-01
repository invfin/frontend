import type { App } from "vue";
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart, BarChart, LineChart } from "echarts/charts";
import {
  GridComponent,
  TitleComponent,
  LegendComponent,
  GraphicComponent,
  ToolboxComponent,
  TooltipComponent,
  DataZoomComponent,
  VisualMapComponent
} from "echarts/components";

const { use } = echarts;

use([
  PieChart,
  BarChart,
  LineChart,
  CanvasRenderer,
  GridComponent,
  TitleComponent,
  LegendComponent,
  GraphicComponent,
  ToolboxComponent,
  TooltipComponent,
  DataZoomComponent,
  VisualMapComponent
]);

export function useEcharts(app: App) {
  app.config.globalProperties.$echarts = echarts;
}

export default echarts;
