export type Portfolio = {
  companies: string,
  budget: string,
}

export type PortfolioMovement = {
  name: string,
  amount: number,
  description: string,
  date: string,
  currency: string,
  is_recurrent: boolean,
  category: string,
}

export type Investment = {
  name: string,
  description: string,
  date: string,
  currency: number,
  is_recurrent: boolean,
  category: string,
  quantity: number;
  price: number;
  movement: "BUY" | "SELL";
};

export type NetWorthQuarter = {
    equity: number;
    incomes: number;
    investments: number;
    percent_investments: number;
    percent_savings: number;
    percent_spendings: number;
    period__period: string;
    period__year: number;
    savings: number;
    spendings: number;
}
