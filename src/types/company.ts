import { ResponseListResult } from "./generics"

export type CompaniesListResult = ResponseListResult<SimpleCompnay>

export type SimpleCompnay = {
  ticker: string,
  name: string,
  currency: string,
  industry: string,
  sector: string,
  website: string,
  state: string,
  country: string,
  ceo: string,
  image: string,
  city: string,
  employees: string,
  address: string,
  zip_code: string,
  cik: string,
  exchange: string,
  cusip: string,
  isin: string,
  description: string,
  ipoDate: string,
}