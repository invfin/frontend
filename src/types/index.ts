export type { CompaniesListResult, SimpleCompany } from "./company";
export type { SimpleSuperinvestor, SuperinvestorListResult } from "./superinvestors";
export type { Author, WritenContent, WritenContentListResult } from "./writenContent"
export type { Term, TermPart } from "./terms"
import type { Portfolio } from "./portfolio";

export type SidebarMenu = {
    title: string,
    path: string,
}

export type Tab = {
    name: string,
    slug: string,
}

export type Notification = {
    message: string,
    contentPath: string,
    date: string,
    senderName: string,
    senderImage: string,
}

export type User = {
    username: string,
    email: string,
    credits: number,
    reputation: number,
    foto: string,
    isWriter: boolean,
    isStaff: boolean,
    hasFavsCompanies: boolean,
    hasPortfolio: boolean,
    hasInvestorProfile: boolean,
    //We'll need to add the favs in the sidebar
}

export { Portfolio };