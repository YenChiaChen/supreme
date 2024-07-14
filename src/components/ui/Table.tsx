import React from 'react';

interface Column {
  header: string;
  accessor: string;
}

interface TableProps {
  columns: Column[];
  data: { [key: string]: any }[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto mt-md">
      <table className="min-w-full bg-white border border-orange">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="py-2 px-4  text-left text-sm font-medium text-white bg-orange"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {columns.map((column) => (
                <td
                  key={column.accessor}
                  className="py-2 px-4 border-b border-r border-orange content whitespace-pre-wrap" 
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
