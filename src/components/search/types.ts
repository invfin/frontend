export interface SearchItem {
  path: string;
  meta?: {
    icon?: string;
    title?: string;
  };
}

export interface SearchResponse {
  success: boolean;
  data: Array<SearchItem>;
}
