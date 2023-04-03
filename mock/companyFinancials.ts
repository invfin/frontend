import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/company/income-statement/aapl/",
    method: "get",
    response: () => {
      return {
        success: true,
        data: {
          currency: "$",
          labels: ["2021", "2020"],
          fields: [
            {
              title: "Ingresos",
              url: "#!",
              percent: "false",
              short: "false",
              values: [365817000000.0, 274515000000.0]
            },
            {
              title: "Costos de venta",
              url: "#!",
              percent: "false",
              short: "false",
              values: [212981000000.0, 169559000000.0]
            },
            {
              title: "Utilidad bruta",
              url: "#!",
              percent: "false",
              short: "false",
              values: [152836000000.0, 104956000000.0]
            },
            {
              title: "I&D",
              url: "#!",
              percent: "false",
              short: "false",
              values: [0.0, 0.0]
            },
            {
              title: "Gastos administrativos",
              url: "#!",
              percent: "false",
              short: "false",
              values: [0.0, 0.0]
            },
            {
              title: "Gastos marketing",
              url: "#!",
              percent: "false",
              short: "false",
              values: [21973000000.0, 19916000000.0]
            },
            {
              title: "Gastos marketing, generales y administrativos",
              url: "#!",
              percent: "false",
              short: "false",
              values: [-258000000.0, -803000000.0]
            },
            {
              title: "Gastos otros",
              url: "#!",
              percent: "false",
              short: "false",
              values: [21914000000.0, 18752000000.0]
            },
            {
              title: "Gastos operativos",
              url: "#!",
              percent: "false",
              short: "false",
              values: [108949000000.0, 66288000000.0]
            },
            {
              title: "Gastos y costos",
              url: "#!",
              percent: "false",
              short: "false",
              values: [256868000000.0, 208227000000.0]
            },
            {
              title: "Intereses",
              url: "#!",
              percent: "false",
              short: "false",
              values: [2645000000.0, 2873000000.0]
            },
            {
              title: "Depreciación & Amortización",
              url: "#!",
              percent: "false",
              short: "false",
              values: [11284000000.0, 11056000000.0]
            },
            {
              title: "EBITDA",
              url: "#!",
              percent: "false",
              short: "false",
              values: [123136000000.0, 81020000000.0]
            },
            {
              title: "Ingresos de explotación",
              url: "#!",
              percent: "false",
              short: "false",
              values: [0.0, 0.0]
            },
            {
              title: "Otros Gastos",
              url: "#!",
              percent: "false",
              short: "false",
              values: [43887000000.0, 38668000000.0]
            },
            {
              title: "EBT",
              url: "#!",
              percent: "false",
              short: "false",
              values: [109207000000.0, 67091000000.0]
            },
            {
              title: "Impuestos",
              url: "#!",
              percent: "false",
              short: "false",
              values: [14527000000.0, 9680000000.0]
            },
            {
              title: "Ingresos netos",
              url: "#!",
              percent: "false",
              short: "false",
              values: [94680000000.0, 57411000000.0]
            },
            {
              title: "Acciones en circulación",
              url: "#!",
              percent: "false",
              short: "false",
              values: [16864919000.0, 17528214000.0]
            },
            {
              title: "Acciones diluidas",
              url: "#!",
              percent: "false",
              short: "false",
              values: [16701272000.0, 17352119000.0]
            }
          ]
        }
      };
    }
  }
] as MockMethod[];
