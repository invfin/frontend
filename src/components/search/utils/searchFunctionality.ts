import { http } from "@/utils/http";
import { SearchResult, SearchItem } from "../types";

export class SearchEngine {
  searchResults: Array<SearchItem>;

  private callSearchEndpoint(data?: string) {
    return http.request<SearchResult>("get", "/search", { data });
  }
  private updateSearchResults(data?: SearchResult): void {
    this.searchResults = data.data;
  }
  search(query: string): Array<SearchItem> {
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
