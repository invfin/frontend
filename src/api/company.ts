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
