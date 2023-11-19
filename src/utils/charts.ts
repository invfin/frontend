import type {
  ChartOption,
  ChartOptionChart,
  GridOptions,
  LegendLabelsOptions,
  LegendOptions,
  ExportOptions,
  ToolbarOptions,
  ResponsiveBreakpoint,
  ResponsiveOptions,
  XAxisOptions,
  SerieData,
  FillOptions,
} from "types";

function deepMerge(target: any, source: any) {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (source[key] instanceof Object && key in target && target[key] instanceof Object) {
        deepMerge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}


export class SimpleChartBuilder {
  chartType = "bar"
  height = "350"
  series = [{
    name: 'PRODUCT A',
    data: [44, 55, 41, 67, 22, 43, 21, 49]
  }, {
    name: 'PRODUCT B',
    data: [13, 23, 20, 8, 13, 27, 33, 12]
  }, {
    name: 'PRODUCT C',
    data: [11, 17, 15, 15, 21, 14, 15, 13]
  }]

  chartOptions = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      stackType: '100%'
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    xaxis: {
      categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2',
        '2012 Q3', '2012 Q4'
      ],
    },
    fill: {
      opacity: 1
    },
    legend: {
      show: false,
      position: 'right',
      offsetX: -40,
      offsetY: 50
    },
  }

  getOptions() {
    return this.chartOptions
  }
}


export class ChartOptionsBuilder {
  chartId: string
  chartType: string
  height: string
  private series: SerieData[]

  private chartOptionChart: ChartOptionChart

  private exportOptions: ExportOptions = {
    csv: {
      filename: undefined,
      columnDelimiter: ',',
      headerCategory: 'category',
      headerValue: 'value',
      dateFormatter(timestamp) {
        return new Date(timestamp).toDateString()
      }
    },
    svg: {
      filename: undefined,
    },
    png: {
      filename: undefined,
    }
  }
  private toolbar: ToolbarOptions = {
    show: false,
    offsetX: 0,
    offsetY: 0,
    tools: {
      download: true,
      selection: true,
      zoom: true,
      zoomin: true,
      zoomout: true,
      pan: true,
      // reset: true | '<img src="/static/icons/reset.png" width="20">',
      customIcons: []
    },
    autoSelected: 'zoom',
    export: undefined
  }

  private legend: LegendOptions = {
    show: true,
    position: 'right',
    offsetX: -40,
    offsetY: 50,
    labels: {
      colors: ["ffffff", '#000000'],
      useSeriesColors: false
    }
  }

  private xaxis: XAxisOptions = {
    categories: [],
  }

  private fill: FillOptions = {
    opacity: 1
  }

  private responsive: ResponsiveBreakpoint[] = [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }]

  private gridOptions: GridOptions = {
    show: true,
    borderColor: '#90A4AE',
    strokeDashArray: 0,
    position: 'back',
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: true
      }
    },
    row: {
      // colors: ['#e5e5e5', 'transparent'],
      opacity: 0.5
    },
    column: {
      // colors: ['#f8f8f8', 'transparent'],
      opacity: 0.5
    },
    padding: {
      top: 0,
      right: 50,
      bottom: 0,
      left: 0
    },
  }

  constructor(apiUrl: string, chartId: string, chartType: string, currentTheme: string, height: string) {
    this.chartId = chartId;
    this.chartType = chartType;
    this.height = height;
    this.chartOptionChart = {
      type: chartType,
      height: parseInt(height),
      stacked: true,
      stackType: '100%',
      id: chartId,
      foreColor: currentTheme === 'dark' ? '#000000' : '#ffffff',
      toolbar: this.toolbar,
      offsetX: 0,
      offsetY: 0,
    }
  }

  setToolbarOptions(toolbarOptions: ToolbarOptions): ChartOptionsBuilder {
    this.toolbar.export = this.exportOptions;
    this.toolbar = deepMerge(this.toolbar, toolbarOptions);
    return this
  }

  getOptions(): ChartOption {
    return {
      chart: this.chartOptionChart,
      responsive: this.responsive,
      xaxis: this.xaxis, //this will surely be always the year or the date
      fill: this.fill,
      legend: this.legend,
      grid: this.gridOptions
    }
  }

  getSeriesData(): SerieData[] {
    return [];
  }

  updateTheme(mode: string) {
    ApexCharts.exec(this.chartId, 'updateOptions', {
      theme: {
        mode: mode
      },
      chart: {
        foreColor: mode === 'dark' ? '#ffffff' : '#000000',
      },
      tooltip: {
        theme: mode
      }
    })
  }

  updateData() { }

  async fetchData() {
    const { pending, data, error, execute, refresh } = await useFetch(`${useRuntimeConfig().public.apiPath}blogs/`, {
      query: query,
      server: false,
      lazy: true,
      watch: [query],
      onResponse({ request, response, options }) {
        response._data;
      },
    })
  }

}
