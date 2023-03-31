import { createColor } from "@/utils/general";

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

  private static buildChartData(response): ChartData {
    const labels = [];
    const dataset = {
      data: [],
      backgroundColor: []
    } as ChartDataDataset;
    response.forEach(statementInfo => {
      Object.keys(statementInfo).forEach(key => {
        labels.push(key);
        dataset.data.push(statementInfo[key]);
        if (typeof dataset.backgroundColor !== "string") {
          dataset.backgroundColor.push(createColor());
        }
      });
    });
    return {
      labels: labels,
      datasets: [dataset]
    } as ChartData;
  }

  private static buildBarChartData(response): ChartData {
    // When using labels in a BarChart, the labels are the ones at the bottom
    // of the chart. And the label in datasets are the ones at the top.
    // The label in the datasets could be used to show each year.
    const labels = [];
    const datasets = [];
    response.forEach(statementInfo => {
      const dataset = {
        label: "",
        data: [],
        backgroundColor: ""
      } as ChartDataDataset;
      Object.keys(statementInfo).forEach(key => {
        if (key != "year" && key != "is_ttm") {
          if (key === "date") {
            dataset.label = statementInfo[key];
            dataset.backgroundColor = createColor();
          } else {
            if (!labels.includes(key)) {
              labels.push(key);
            }
            dataset.data.push(statementInfo[key]);
          }
        }
      });
      datasets.push(dataset);
    });
    return {
      labels: labels,
      datasets: datasets
    } as ChartData;
  }

  private static createChart(
    chartTitle: string,
    responseData: Array<any>,
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
