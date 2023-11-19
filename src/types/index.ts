export type {
    CompaniesListResult,
    SimpleCompany,
    IncStatement,
    BalanceSheet,
    CfStatement,
    RentabilityRatio,
    LiquidityRatio,
    Margin,
    FcfRatio,
    PerShareValue,
    NonGaapFigure,
    OperationRiskRatio,
    EvRatio,
    GrowthRate,
    EfficiencyRatio,
    PriceToRatio,
    Company,
} from "./company";
export type {
    ChartOption,
    ChartOptionChart,
    LegendLabelsOptions,
    LegendOptions,
    ExportOptions,
    ToolbarOptions,
    ResponsiveBreakpoint,
    ResponsiveOptions,
    XAxisOptions,
    FillOptions,
    SerieData,
} from "./charts";
export type { SimpleSuperinvestor, SuperinvestorListResult } from "./superinvestors";
export type { Author, WritenContent, WritenContentListResult } from "./writenContent"
export type { Term, TermPart } from "./terms"
export type { Portfolio, PortfolioMovement } from "./portfolio";

export interface SidebarMenu {
    title: string,
    path: string,
    hasTarget?: boolean,
    logos: { white: string, black: string },
    available: boolean
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

export type SearchResult = {
    pk: number,
    title: string,
    logo: string,
    path: string,
    inside: string,
    rank: string,
    isImageError: boolean,
}