import React from "react";

interface Column {
  header: string;
  accessor: string;
  nowrap?: boolean;
}

interface TableProps {
  columns: Column[];
  data: { [key: string]: any }[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto mt-md">
      <table className="min-w-full border-collapse">
        <thead className="bg-orange text-white content">
          <tr>
            {columns.map((column, index) => (
              <th
                key={column.accessor}
                className={`py-2 px-4 border border-white ${
                  index === 0
                    ? "rounded-tl-lg"
                    : index === columns.length - 1
                    ? "rounded-tr-lg"
                    : ""
                }`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`hover:bg-[#e6e6e6] duration-300 content ${
                rowIndex % 2 === 0 ? "bg-white" : "bg-gray"
              }`}
            >
              {columns.map((column, columnIndex) => (
                <td
                  key={column.accessor}
                  className={`py-2 px-4 border-b border-light_gray ${
                    columnIndex === 0
                      ? "rounded-bl-lg"
                      : columnIndex === columns.length - 1
                      ? "rounded-br-lg"
                      : ""
                  } ${
                    column.nowrap ? "whitespace-pre" : "whitespace-pre-wrap"
                  }`}
                >
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
