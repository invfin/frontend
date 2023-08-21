import { ResponseListResult } from "./generics"

export type SuperinvestorListResult = ResponseListResult<SimpleSuperinvestor>

export type SimpleSuperinvestor = {
  name: string;
  slug: string;
  image: string;
  portfolio: SimpleSuperinvestorPortfolio[]
}

export type SimpleSuperinvestorPortfolio = {
  image: string,
  name: string,
}