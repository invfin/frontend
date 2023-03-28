export type TokensResult = {
  tokens: {
    refresh: { token: string; expires: string };
    auth: { token: string; expires: string };
    perm: { token: string; expires: string };
    sessionid: { token: string; expires: string };
  };
};

export type UserResult = {
  success: boolean;
  data: {
    username: string;
    image: string;
    tokens: TokensResult;
  };
};
