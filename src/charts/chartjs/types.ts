export interface ChartDataDataset {
  data: Array<number>;
}
export interface ChartData {
  labels: Array<string>;
  datasets: Array<ChartDataDataset>;
}

export interface ChartInformation {
  chartType: string;
}
