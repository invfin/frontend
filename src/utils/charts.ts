




export class ChartOptionsBuilder {
  chartId: string
  chartType: string
  height: string

  constructor(chartId: string, chartType: string, currentTheme: string, height: string) {
    this.chartId = chartId;
    this.chartType = chartType;
    this.height = height;
  }

  getOptions() {
    return {}
  }

  getSeriesData(): [] {
    return [];
  }

  updateTheme(mode: string) {

  }

  updateData() { }


}
