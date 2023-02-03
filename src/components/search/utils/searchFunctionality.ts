import { http } from "@/utils/http";

export type SearchResult = {
  success: boolean;
  data: {
    username: string;
    roles: Array<string>;
    accessToken: string;
    refreshToken: string;
    expires: Date;
  };
};

export class SearchEngine {
  searchResults: Array<SearchResult> = [];

  private callSearchEndpoint(data?: string) {
    return http.request<SearchResult>("get", "/search", { data });
  }
  private updateSearchResults(data?: SearchResult): void {
    this.searchResults.length = 0;
    this.searchResults.push(data);
  }
  search(query: string): Array<SearchResult> {
    const response = this.callSearchEndpoint(query);
    response.then(data => this.updateSearchResults(data));
    return this.searchResults;
  }
}
