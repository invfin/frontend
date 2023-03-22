import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/company/income-statement/aapl/",
    method: "get",
    response: () => {
      return {
        success: true,
        data: [
          {
            id: 163349,
            date: 2021,
            year: 17 / 3 / 2022,
            is_ttm: false,
            from_average: false,
            revenue: 365817000000.0,
            cost_of_revenue: 212981000000.0,
            gross_profit: 152836000000.0,
            rd_expenses: 0.0,
            general_administrative_expenses: 0.0,
            selling_marketing_expenses: 21973000000.0,
            sga_expenses: -258000000.0,
            other_expenses: 21914000000.0,
            operating_expenses: 108949000000.0,
            cost_and_expenses: 256868000000.0,
            interest_expense: 2645000000.0,
            depreciation_amortization: 11284000000.0,
            ebitda: 123136000000.0,
            operating_income: 0.0,
            net_total_other_income_expenses: 43887000000.0,
            income_before_tax: 109207000000.0,
            income_tax_expenses: 14527000000.0,
            net_income: 94680000000.0,
            weighted_average_shares_outstanding: 16864919000.0,
            weighted_average_diluated_shares_outstanding: 16701272000.0
          },
          {
            id: 163350,
            date: 2020,
            year: 17 / 3 / 2022,
            is_ttm: false,
            from_average: false,
            revenue: 274515000000.0,
            cost_of_revenue: 169559000000.0,
            gross_profit: 104956000000.0,
            rd_expenses: 0.0,
            general_administrative_expenses: 0.0,
            selling_marketing_expenses: 19916000000.0,
            sga_expenses: -803000000.0,
            other_expenses: 18752000000.0,
            operating_expenses: 66288000000.0,
            cost_and_expenses: 208227000000.0,
            interest_expense: 2873000000.0,
            depreciation_amortization: 11056000000.0,
            ebitda: 81020000000.0,
            operating_income: 0.0,
            net_total_other_income_expenses: 38668000000.0,
            income_before_tax: 67091000000.0,
            income_tax_expenses: 9680000000.0,
            net_income: 57411000000.0,
            weighted_average_shares_outstanding: 17528214000.0,
            weighted_average_diluated_shares_outstanding: 17352119000.0
          }
        ]
      };
    }
  }
] as MockMethod[];
