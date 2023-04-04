import { StatementItem } from "@/api/company";

type Column = { key: string; dataKey: string; title: string };
type Row = { id: string; parentId: string; "column-field": string };

export function generateDataAndColumns(
  response: StatementItem
): (Column[] | Row[])[] {
  const columns: Column[] = generateColumns(response);
  const data: Row[] = generateData(response);

  return [data, columns];
}

export function generateColumns(response: StatementItem): Column[] {
  const fieldsColumn: Column = {
    key: "column-field",
    dataKey: "column-field",
    title: `En ${response.currency}`
  };
  const columns = [fieldsColumn];
  response.labels.forEach(year => {
    columns.push({
      key: `column-${year}`,
      dataKey: `column-${year}`,
      title: year
    });
  });
  return columns;
}

function slugify(value: string): string {
  return value.toLowerCase().replace(" ", "-");
}
export function generateData(response: StatementItem): Row[] {
  const data: Row[] = [];
  response.fields.forEach(statementInfo => {
    const row = {
      id: slugify(statementInfo.title),
      parentId: null,
      "column-field": statementInfo.title
    } as Row;
    statementInfo.values.forEach((value, index) => {
      const year = response.labels[index];
      row[`column-${year}`] = value;
    });
    data.push(row);
  });
  return data;
}
