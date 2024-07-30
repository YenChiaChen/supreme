import classNames from "classnames";

interface TableCell {
    content: string;
    colspan?: number;
    rowspan?: number;
  }
  
  interface TableRow {
    row: TableCell[];
  }
  
  interface TableData {
    table: {
      thead: TableRow[];
      tbody: TableRow[];
    };
  }

  const tableData: TableData = {
    "table": {
      "thead": [
        {
          "row": [
            {
              "content": "選項",
              "colspan": 1,
              "rowspan": 1
            }
          ]
        },
        {
          "row": [
            {
              "content": "內文",
              "colspan": 2,
              "rowspan": 1
            }
          ]
        }
      ],
      "tbody": [
        {
          "row": [
            {
              "content": "第一則",
              "colspan": 1,
              "rowspan": 1
            },
            {
              "content": "第二則",
              "colspan": 1,
              "rowspan": 1
            },
            {
              "content": "第三則",
              "colspan": 1,
              "rowspan": 1
            }
          ]
        },
        {
          "row": [
            {
              "content": "第一則",
              "colspan": 1,
              "rowspan": 1
            }
          ]
        },
        {
          "row": [
            {
              "content": "第二則",
              "colspan": 2,
              "rowspan": 1
            }
          ]
        }
      ]
    }
  }

  
  
  
const TableComponent: React.FC<{ data: TableData }> = ({ data }) => {
    return (
      <table>
        <thead>
          {data.table.thead.map((headerRow, rowIndex) => (
            <tr key={`thead-row-${rowIndex}`}>
              {headerRow.row.map((cell, cellIndex) => (
                <th
                  key={`thead-cell-${cellIndex}`}
                  colSpan={cell.colspan}
                  rowSpan={cell.rowspan}
                >
                  {cell.content}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {data.table.tbody.map((bodyRow, rowIndex) => (
            <tr key={`tbody-row-${rowIndex}`}>
              {bodyRow.row.map((cell, cellIndex) => (
                <td
                  key={`tbody-cell-${cellIndex}`}
                  colSpan={cell.colspan}
                  rowSpan={cell.rowspan}
                   className="border border-black"
                >
                  {cell.content}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  

  const Table: React.FC = () => (
    <div>
      <TableComponent data={tableData} />
    </div>
  );
  
  export default Table;