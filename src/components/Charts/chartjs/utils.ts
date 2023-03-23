import { createColor } from "@/utils/general";

import { ChartData, ChartInformation, ChartDataDataset } from "./types";

function buildChartData(response): ChartData {
  const labels = [];
  const dataset = {
    data: [],
    backgroundColor: []
  } as ChartDataDataset;
  response.forEach(statementInfo => {
    Object.keys(statementInfo).forEach(key => {
      labels.push(key);
      dataset.data.push(statementInfo[key]);
      dataset.backgroundColor.push(createColor());
    });
  });
  return {
    labels: labels,
    datasets: [dataset]
  } as ChartData;
}

export function createChart(
  chartType: string,
  chartTitle: string,
  responseData: Array<any>
): ChartInformation {
  return {
    chartType: chartType,
    chartTitle: chartTitle,
    chartData: buildChartData(responseData),
    displayTitle: true,
    usePan: true,
    useWheel: true,
    usePinch: true
  } as ChartInformation;
}
