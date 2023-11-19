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
