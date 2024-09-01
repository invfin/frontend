export interface User {
  username: string;
  image: string | null;
  token: string;
  anonymous: boolean;
  currencyId: number;
  role: string;
  email: string;
}

export interface AddInformationModalProps {
  subtitle: string;
  title: string;
  category: string;
}

export interface ItemVisited {
  path: string;
  title: string;
}

export interface WidgetConfig {
  component: string;
  data: string;
}

export interface Widget {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  config: WidgetConfig;
}

export interface Amount {
  name: string;
  recurrence: string;
  amount: number;
  percentage: boolean;
  description: string;
}

export interface Account {
  name: string;
  category: string;
  company: string;
  description: string;
  currencyId: number;
  rates: Amount[];
  fees: Amount[];
  amount: number;
}

export interface AccountCoreInfo {
  id: number;
  currencyId: number;
  company: string;
}

export interface AccountResult {
  account?: Account;
  coreInfo?: AccountCoreInfo;
}

export interface AssetDetail {
  category: string;
  name: string;
  companyId: number;
}

export interface InvestmentDetail {
  quantity: number;
  cost: number;
}

export interface TransactionDetail {
  description?: string;
  comment?: string;
  original_amount: number;
  fee: number;
}

export interface Transaction {
  date: Date;
  amount: number;
  category: string;
}

export interface TransactionRequest {
  details: TransactionDetail;
  investmentDetails?: InvestmentDetail;
  transaction: Transaction;
  asset?: AssetDetail;
  account: { Id: number } | Account;
}
