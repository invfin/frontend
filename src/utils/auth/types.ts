export type TokenInfo = {
  token: string;
  expires: number;
};

export type TokensInfo = {
  refresh: TokenInfo;
  auth: TokenInfo;
  perm: TokenInfo;
  sessionid: TokenInfo;
};

export type UserInfo = {
  username: string;
  image: string;
  tokens: TokensInfo;
};
