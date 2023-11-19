export interface SerieData {
  name: string;
  data: string[] | number[];
}

export interface ChartOption {
  chart: ChartOptionChart;
  responsive: ResponsiveBreakpoint[];
  xaxis: XAxisOptions;
  fill: FillOptions;
  legend: LegendOptions;
  grid: GridOptions;
}

export interface ChartOptionChart {
  type: string;
  height: number;
  stacked: boolean;
  stackType: string;
  id: string;
  foreColor: string;
  toolbar: ToolbarOptions;
  offsetX: number;
  offsetY: number;
}

export interface ToolbarOptions {
  show: boolean;
  offsetX: number;
  offsetY: number;
  tools: {
    download: boolean;
    selection: boolean;
    zoom: boolean;
    zoomin: boolean;
    zoomout: boolean;
    pan: boolean;
    // reset: boolean | string;
    customIcons: any[];
  };
  export?: ExportOptions;
  autoSelected: string;
}

export interface ExportOptions {
  csv: {
    filename?: string;
    columnDelimiter?: string;
    headerCategory?: string;
    headerValue?: string;
    dateFormatter?(timestamp: number): string;
  };
  svg: {
    filename?: string;
  };
  png: {
    filename?: string;
  };
}

export interface ResponsiveBreakpoint {
  breakpoint: number;
  options: ResponsiveOptions;
}

export interface ResponsiveOptions {
  legend: {
    position: string;
    offsetX: number;
    offsetY: number;
  };
}

export interface XAxisOptions {
  categories: string[];
}

export interface FillOptions {
  opacity: number;
}

export interface LegendOptions {
  show: boolean;
  position: string;
  offsetX: number;
  offsetY: number;
  labels: LegendLabelsOptions;
}

export interface LegendLabelsOptions {
  colors: string[];
  useSeriesColors: boolean;
}

export interface GridOptions {
  show: boolean;
  borderColor: string;
  strokeDashArray: number;
  position: 'back';
  xaxis: {
    lines: {
      show: boolean;
    };
  };
  yaxis: {
    lines: {
      show: boolean;
    };
  };
  row: {
    colors?: any; // Adjust the type as needed
    opacity: number;
  };
  column: {
    colors?: any; // Adjust the type as needed
    opacity: number;
  };
  padding: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}
