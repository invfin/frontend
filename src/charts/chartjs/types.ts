export interface ChartDataDataset {
  data: Array<number>;
  backgroundColor: Array<string>;
}
export interface ChartData {
  labels: Array<string>;
  datasets: Array<ChartDataDataset>;
}

export interface ChartInformation {
  chartType: string;
  chartTitle: string;
  displayTitle: boolean;
  usePan: boolean;
  useWheel: boolean;
  usePinch: boolean;
  chartData: ChartData;
}
