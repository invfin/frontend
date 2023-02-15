import { http } from "@/utils/http";
import { SearchResponse, SearchItem } from "../types";

export class SearchEngine {
  searchResults: Array<SearchItem>;

  private callSearchEndpoint(data?: string) {
    return http.request<SearchResponse>("get", "/search", { data });
  }
  private updateSearchResults(data?: SearchResponse): void {
    this.searchResults = data.data;
  }
  search(query: string): void {
    const response = this.callSearchEndpoint(query);
    response
      .then(data => this.updateSearchResults(data))
      .catch(err => {
        console.error(err);
        return this.search(query);
      })
      .finally(() => {
        return this.searchResults;
      });
  }
}
