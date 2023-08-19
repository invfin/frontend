import type { CompaniesListResult, SimpleCompnay } from "./company";
import {
    Author,
    WritenContent, WritenContentListResult
} from "./writenContent"
import type { Portfolio } from "./portfolio";

type EntryOption = {
    title: string,
    path: string,
}

type Tab = {
    name: string,
    slug: string,
}

type User = {
    id: string,
    username: string,
    image: string,
    loged: boolean,
    hasFavs: boolean,
    portfolio: Portfolio
}

export {
    EntryOption,
    User,
    CompaniesListResult,
    SimpleCompnay,
    Portfolio,
    Tab,
    Author,
    WritenContent,
    WritenContentListResult,
};