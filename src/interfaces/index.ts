export interface User {
  username: string;
  image: string;
  token: string;
  anonymous: boolean;
}

export interface ItemVisited {
  path: string;
  title: string;
}
