import { StatementItem } from "@/api/company";

export type Column = {
  prop: string;
  label: string;
  fixed: boolean;
  width: number;
};
export type Row = { fields: string; description?: string; link?: string };

export function generateDataAndColumns(
  response: StatementItem
): [Row[], Column[]] {
  const columns: Column[] = generateColumns(response);
  const data: Row[] = generateData(response);
  return [data, columns];
}

export function generateColumns(response: StatementItem): Column[] {
  const fieldsColumn: Column = createColumn(
    "fields",
    `En ${response.currency}`,
    true
  );
  const columns: Column[] = [fieldsColumn];
  response.labels.forEach(year => {
    columns.push(createColumn(year, year));
  });
  return columns;
}

function createColumn(
  prop: string,
  label: string,
  fixed = false,
  width = 150
): Column {
  return {
    prop: prop,
    label: label,
    fixed: fixed,
    width: width
  } as Column;
}

export function generateData(response: StatementItem): Row[] {
  const data: Row[] = [];
  response.fields.forEach(statementInfo => {
    const row: Row = {
      fields: statementInfo.title,
      description: statementInfo.title,
      link: statementInfo.url
    };
    statementInfo.values.forEach((value: number, index: number): void => {
      const year: string = response.labels[index];
      row[year] = value;
    });
    data.push(row);
  });
  return data;
}
