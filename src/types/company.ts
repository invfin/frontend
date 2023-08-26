import { ResponseListResult } from "./generics"

export type CompaniesListResult = ResponseListResult<SimpleCompany>

export interface SimpleCompany {
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

export interface IncStatement {
  reported_currency: string | null;
  company: string;
  date: number;
  revenue: number;
  cost_of_revenue: number;
  gross_profit: number;
  rd_expenses: number;
  general_administrative_expenses: number;
  selling_marketing_expenses: number;
  sga_expenses: number;
  other_expenses: number;
  operating_expenses: number;
  cost_and_expenses: number;
  interest_expense: number;
  depreciation_amortization: number;
  ebitda: number;
  operating_income: number;
  net_total_other_income_expenses: number;
  income_before_tax: number;
  income_tax_expenses: number;
  net_income: number;
  weighted_average_shares_outstanding: number;
  weighted_average_diluated_shares_outstanding: number;
  // ... other properties
}

export interface BalanceSheet {
  reported_currency: string | null;
  company: string;
  date: number;
  cash_and_cash_equivalents: number;
  short_term_investments: number;
  cash_and_short_term_investments: number;
  net_receivables: number;
  inventory: number;
  other_current_assets: number;
  total_current_assets: number;
  property_plant_equipment: number;
  goodwill: number;
  intangible_assets: number;
  goodwill_and_intangible_assets: number;
  long_term_investments: number;
  tax_assets: number;
  other_non_current_assets: number;
  total_non_current_assets: number;
  other_assets: number;
  total_assets: number;
  accounts_payable: number;
  short_term_debt: number;
  tax_payables: number;
  deferred_revenue: number;
  other_current_liabilities: number;
  total_current_liabilities: number;
  long_term_debt: number;
  deferred_revenue_non_current: number;
  deferred_tax_liabilities_non_current: number;
  other_non_current_liabilities: number;
  total_non_current_liabilities: number;
  other_liabilities: number;
  total_liabilities: number;
  common_stocks: number;
  preferred_stocks: number;
  retained_earnings: number;
  accumulated_other_comprehensive_income_loss: number;
  othertotal_stockholders_equity: number;
  total_stockholders_equity: number;
  total_liabilities_and_total_equity: number;
  total_investments: number;
  total_debt: number;
  net_debt: number;
  // ... other properties
}

export interface CfStatement {
  reported_currency: string | null;
  company: string;
  date: number;
  net_income: number;
  depreciation_amortization: number;
  deferred_income_tax: number;
  stock_based_compensation: number;
  change_in_working_capital: number;
  accounts_receivable: number;
  inventory: number;
  accounts_payable: number;
  other_working_capital: number;
  other_non_cash_items: number;
  operating_activities_cf: number;
  investments_property_plant_equipment: number;
  acquisitions_net: number;
  purchases_investments: number;
  sales_maturities_investments: number;
  other_investing_activites: number;
  investing_activities_cf: number;
  debt_repayment: number;
  common_stock_issued: number;
  common_stock_repurchased: number;
  dividends_paid: number;
  other_financing_activities: number;
  financing_activities_cf: number;
  effect_forex_exchange: number;
  net_change_cash: number;
  cash_end_period: number;
  cash_beginning_period: number;
  operating_cf: number;
  capex: number;
  fcf: number;
  // ... other properties
}

export interface RentabilityRatio {
  reported_currency: string | null;
  company: string;
  date: number;
  roa: number;
  roe: number;
  roc: number;
  roce: number;
  rota: number;
  roic: number;
  nopat_roic: number;
  rogi: number;
  // ... other properties
}

export interface LiquidityRatio {
  reported_currency: string | null;
  company: string;
  date: number;
  cash_ratio: number;
  current_ratio: number;
  quick_ratio: number;
  operating_cashflow_ratio: number;
  debt_to_equity: number;
  // ... other properties
}

export interface Margin {
  reported_currency: string | null;
  company: string;
  date: number;
  gross_margin: number;
  ebitda_margin: number;
  net_income_margin: number;
  fcf_margin: number;
  fcf_equity_to_net_income: number;
  unlevered_fcf_to_net_income: number;
  unlevered_fcf_ebit_to_net_income: number;
  owners_earnings_to_net_income: number;
  // ... other properties
}

export interface FcfRatio {
  reported_currency: string | null;
  company: string;
  date: number;
  fcf_equity: number;
  unlevered_fcf: number;
  unlevered_fcf_ebit: number;
  owners_earnings: number;
  // ... other properties
}

export interface PerShareValue {
  reported_currency: string | null;
  company: string;
  date: number;
  sales_ps: number;
  book_ps: number;
  tangible_ps: number;
  fcf_ps: number;
  eps: number;
  cash_ps: number;
  operating_cf_ps: number;
  capex_ps: number;
  total_assets_ps: number;
  // ... other properties
}

export interface NonGaapFigure {
  reported_currency: string | null;
  company: string;
  date: number;
  normalized_income: number;
  effective_tax_rate: number;
  nopat: number;
  net_working_cap: number;
  average_inventory: number;
  average_accounts_payable: number;
  dividend_yield: number;
  earnings_yield: number;
  fcf_yield: number;
  income_quality: number;
  invested_capital: number;
  market_cap: number;
  net_current_asset_value: number;
  payout_ratio: number;
  tangible_assets: number;
  retention_ratio: number;
  // ... other properties
}

export interface OperationRiskRatio {
  reported_currency: string | null;
  company: string;
  date: number;
  asset_coverage_ratio: number;
  cash_flow_coverage_ratios: number;
  cash_coverage: number;
  debt_service_coverage: number;
  interest_coverage: number;
  operating_cashflow_ratio: number;
  debt_ratio: number;
  long_term_debt_to_capitalization: number;
  total_debt_to_capitalization: number;
  // ... other properties
}

export interface EvRatio {
  reported_currency: string | null;
  company: string;
  date: number;
  market_cap: number;
  enterprise_value: number;
  ev_fcf: number;
  ev_operating_cf: number;
  ev_sales: number;
  company_equity_multiplier: number;
  ev_multiple: number;
  // ... other properties
}

export interface GrowthRate {
  reported_currency: string | null;
  company: string;
  date: number;
  revenue_growth: number;
  cost_revenue_growth: number;
  operating_expenses_growth: number;
  net_income_growth: number;
  shares_buyback: number;
  eps_growth: number;
  fcf_growth: number;
  owners_earnings_growth: number;
  capex_growth: number;
  rd_expenses_growth: number;
  // ... other properties
}

export interface EfficiencyRatio {
  reported_currency: string | null;
  company: string;
  date: number;
  asset_turnover: number;
  inventory_turnover: number;
  fixed_asset_turnover: number;
  accounts_payable_turnover: number;
  cash_conversion_cycle: number;
  days_inventory_outstanding: number;
  days_payables_outstanding: number;
  days_sales_outstanding: number;
  free_cashflow_to_operating_cashflow: number;
  operating_cycle: number;
  cash_conversion_ratio: number;
  // ... other properties
}

export interface PriceToRatio {
  reported_currency: string | null;
  company: string;
  date: number;
  price_book: number;
  price_cf: number;
  price_earnings: number;
  price_earnings_growth: number;
  price_sales: number;
  price_total_assets: number;
  price_fcf: number;
  price_operating_cf: number;
  price_tangible_assets: number;
  // ... other properties
}

export interface Company {
  ticker: string;
  name: string;
  currency: string;
  industry: string;
  sector: string;
  website: string;
  state: string;
  country: string;
  ceo: string;
  image: string;
  city: string;
  employees: string;
  address: string;
  zip_code: string;
  cik: string;
  exchange: string;
  cusip: string;
  isin: string;
  description: string;
  ipoDate: string;
  inc_statements: IncStatement[];
  balance_sheets: BalanceSheet[];
  cf_statements: CfStatement[];
  rentability_ratios: RentabilityRatio[];
  liquidity_ratios: LiquidityRatio[];
  margins: Margin[];
  fcf_ratios: FcfRatio[];
  per_share_values: PerShareValue[];
  non_gaap_figures: NonGaapFigure[];
  operation_risks_ratios: OperationRiskRatio[];
  ev_ratios: EvRatio[];
  growth_rates: GrowthRate[];
  efficiency_ratios: EfficiencyRatio[];
  price_to_ratios: PriceToRatio[];
}
