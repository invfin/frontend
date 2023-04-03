import { http } from "@/utils/http";

export interface StatementItemField {
  title: string;
  url: string;
  percent: string;
  short: string;
  values: Array<number>;
}

export interface StatementItem {
  currency?: string;
  labels: Array<string>;
  fields: Array<StatementItemField>;
}

export interface Statement {
  success: boolean;
  data: StatementItem;
}

export async function getIncomeStatement(ticker: string) {
  return await http.get<Statement, Promise<Statement>>(
    `/company/income-statement/${ticker}/`
  );
}

export async function getBalanceSheet(ticker: string) {
  return await http.get<Statement, Promise<Statement>>(
    `/company/balance-sheet/${ticker}/`
  );
}

export async function getCashflowStatement(ticker: string) {
  return await http.get<Statement, Promise<Statement>>(
    `/company/cashflow-statement/${ticker}/`
  );
}
