import type { CompaniesListResult, SimpleCompnay } from "./company";

import type { Portfolio } from "./portfolio";

type EntryOption = {
    title: string,
    path: string,
}

type User = {
    id: string,
    username: string,
    image: string,
    loged: boolean,
    portfolio: Portfolio
}

export { EntryOption, User, CompaniesListResult, SimpleCompnay, Portfolio };