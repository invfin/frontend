export interface WidgetOption {
  title: string;
  fn: (widget) => voidOptionFunction;
}

export interface WidgetConfig {
  component: string;
  data: string;
}

export interface Widget {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  config: WidgetConfig;
}
