import { ref } from 'vue'
import { APIKey, APIBaseEndpoint } from '../../env'

export class DataFetcher {
  private apiKey: string
  private baseUrl = APIBaseEndpoint + '/api/v1/'
  private retryAttempts = 3

  constructor() {
    this.apiKey = this.getAPIKey()
  }

  public async get(
    path: string,
    queryParams: Record<string, string>
  ): Promise<any> {
    const url = this.createEndpoint(path, queryParams)
    return this.handleRequest(url)
  }

  private async handleRequest(url: string): Promise<any> {
    try {
      const response = await fetch(url)
      return await this.handleResponse(response)
    } catch (error) {
      return this.handleError(error, url)
    }
  }

  private async handleResponse(response: Response): Promise<any> {
    if (response.ok) {
      return response.json()
    }
    throw new Error(response.statusText)
  }

  private async handleError(error: any, url: string): Promise<any> {
    if (this.retryAttempts > 0) {
      this.retryAttempts--
      return this.handleRequest(url)
    }
    throw error
  }

  private createEndpoint(
    path: string,
    queryParams: Record<string, string>
  ): string {
    const queryString = this.createQueryString(queryParams)
    return `${this.baseUrl}${path}?api_key=${this.apiKey}${queryString}`
  }

  private createQueryString(queryParams: Record<string, string>): string {
    const params = new URLSearchParams(queryParams)
    return params.toString() ? `&${params.toString()}` : ''
  }

  public getSessionIdFromCookies(): string {
    const cookies = document.cookie.split(';')
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=').map((c) => c.trim())
      if (name === 'session_id') {
        return value
      }
    }
    return ''
  }

  private getAPIKey(): string {
    let apiKey = this.getSessionIdFromCookies()
    if (!apiKey) {
      apiKey = APIKey
    }
    return apiKey
  }
}

export const fetchData = () => {
  const error: any = ref(null)
  const loading = ref(true)
  const data = ref(null)
  const fetcher = new DataFetcher()

  const performRequest = async (
    path: string,
    queryParams: Record<string, string>
  ) => {
    try {
      loading.value = true
      data.value = await fetcher.get(path, queryParams)
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  return {
    error,
    loading,
    data,
    performRequest,
  }
}
