import { http } from "@/utils/http";

export interface StatementItem {
  name: string;
  url: string;
  value: number;
}

export interface Statement {
  success: boolean;
  data: Array<StatementItem>;
}

export function getIncomeStatement(ticker: string) {
  return http.get<Statement, Promise<Statement>>(
    `/company/income-statement/${ticker}/`
  );
}

export function getBalanceSheet(ticker: string) {
  return http.get<Statement, Promise<Statement>>(
    `/company/balance-sheet/${ticker}/`
  );
}

export function getCashflowStatement(ticker: string) {
  return http.get<Statement, Promise<Statement>>(
    `/company/cashflow-statement/${ticker}/`
  );
}
