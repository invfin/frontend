import type { AccountCoreInfo, AccountResult } from '@/interfaces';
import { post } from './helpers/fetch-wrapper';

export async function getAccountCoreInfo(accountResult: AccountResult): Promise<AccountCoreInfo | null> {
  if (accountResult.coreInfo) {
    return accountResult.coreInfo;
  }
  if (accountResult.account) {
    const response = await post<AccountCoreInfo>('accounts', accountResult.account);
    if (response.data) {
      return response.data;
    }
  }
  return null;
}

export function defaultAccountResult(currencyId: number): AccountResult {
  return {
    account: {
      name: '',
      category: '',
      company: '',
      description: '',
      amount: 0.0,
      currencyId: currencyId,
      fees: [],
      rates: []
    },
    coreInfo: {
      company: '',
      currencyId: currencyId,
      id: 0
    }
  };
}
