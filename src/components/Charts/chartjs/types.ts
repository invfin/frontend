export interface ChartDataDataset {
  label?: string;
  data: Array<number>;
  backgroundColor: Array<string> | string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  borderSkipped?: boolean;
}
export interface ChartData {
  labels: Array<string>;
  datasets: Array<ChartDataDataset>;
}

export interface ChartInformation {
  chartTitle: string;
  displayTitle: boolean;
  usePan: boolean;
  useWheel: boolean;
  usePinch: boolean;
  chartData: ChartData;
}

export interface RawChartInformation<T> {
  chartType: string;
  chartTitle: string;
  responseData: T.data;
}
