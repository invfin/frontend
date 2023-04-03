import { createColor } from "@/utils/general";
import { StatementItem } from "@/api/company";

import { ChartData, ChartInformation, ChartDataDataset } from "./types";
import {
  Bar,
  Doughnut,
  Line,
  Pie,
  PolarArea,
  Radar,
  Bubble,
  Scatter
} from "vue-chartjs";

import {
  Chart as ChartJS,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  Decimation,
  Filler,
  Legend,
  SubTitle,
  Title,
  Tooltip,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale
} from "chart.js";

ChartJS.register(
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  Decimation,
  Filler,
  Legend,
  SubTitle,
  Title,
  Tooltip,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale
);

export default class BuildChartData {
  public static getChartTypeAndChartData(rawInfo): [any, ChartInformation] {
    let ChartType: any;
    let chartDatMethod: Function;
    switch (rawInfo.chartType) {
      case "Bar":
        ChartType = Bar;
        chartDatMethod = BuildChartData.buildBarChartData;
        break;
      case "Doughnut":
        ChartType = Doughnut;
        chartDatMethod = BuildChartData.buildChartData;
        break;
      case "Line":
        ChartType = Line;
        chartDatMethod = BuildChartData.buildChartData;
        break;
      case "Pie":
        ChartType = Pie;
        chartDatMethod = BuildChartData.buildChartData;
        break;
      case "PolarArea":
        ChartType = PolarArea;
        chartDatMethod = BuildChartData.buildChartData;
        break;
      case "Radar":
        ChartType = Radar;
        chartDatMethod = BuildChartData.buildChartData;
        break;
      case "Bubble":
        ChartType = Bubble;
        chartDatMethod = BuildChartData.buildChartData;
        break;
      case "Scatter":
        ChartType = Scatter;
        chartDatMethod = BuildChartData.buildChartData;
        break;
    }
    return [
      ChartType,
      BuildChartData.createChart(
        rawInfo.chartTitle,
        rawInfo.responseData,
        chartDatMethod
      )
    ];
  }

  private static buildChartData(response: StatementItem): ChartData {
    const datasets = [];
    response.fields.forEach(statementInfo => {
      const dataset = {
        label: statementInfo.title,
        data: statementInfo.values,
        backgroundColor: createColor()
      } as ChartDataDataset;
      datasets.push(dataset);
    });
    return {
      labels: response.labels,
      datasets: datasets
    } as ChartData;
  }

  private static buildBarChartData(response: StatementItem): ChartData {
    // When using labels in a BarChart, the labels are the ones at the bottom
    // of the chart. And the label in datasets are the ones at the top.
    // The label in the datasets could be used to show each year.
    const labels = [];
    const preDatasets = {};
    response.fields.forEach(statementInfo => {
      labels.push(statementInfo.title);
      statementInfo.values.forEach((value, index) => {
        const year = response.labels[index];
        if (preDatasets[year] !== undefined) {
          preDatasets[year].push(value);
        } else {
          preDatasets[year] = [value];
        }
      });
    });
    const datasets = [];
    Object.keys(preDatasets).forEach(key => {
      datasets.push({
        label: key,
        data: preDatasets[key],
        backgroundColor: createColor()
      } as ChartDataDataset);
    });
    return {
      labels: labels,
      datasets: datasets
    } as ChartData;
  }

  private static createChart(
    chartTitle: string,
    responseData: StatementItem,
    buildChartMethod: Function
  ): ChartInformation {
    return {
      chartTitle: chartTitle,
      chartData: buildChartMethod(responseData),
      displayTitle: true,
      usePan: true,
      useWheel: true,
      usePinch: true
    } as ChartInformation;
  }
}
