import React from "react";

interface TableCell {
    content: React.ReactNode;
    colSpan?: number;
    rowSpan?: number;
    icon?: React.ReactNode
    nowrap?: boolean
  }
  
  interface TableData {
    headers: TableCell[];
    rows: TableCell[][];
  }
  
  interface Note {
    text: string;
  }
  
  interface TableProps {
    data: TableData;
    color?: string;
    className?: string;
    title?: string;
    unit?: string;
    notes?: Note[]
    isCenter?: boolean
  }
  
  export const Table: React.FC<TableProps> = ({
    data,
    color = "#000000",
    className = "",
    title = "",
    unit = "",
    notes = [],
    isCenter = false
  }) => {
    const { headers, rows } = data;
    const alignmentClass = isCenter ? "text-center" : "";
  
    return (
      <div className="mt-8">
        {title && <h3 style={{ color }}>{title}</h3>}
        {unit && <p className="text-right w-full text-sm text-gray-400 font-light">{unit}</p>}
        <table className={`w-full border-collapse mt-4 ${className}`}>
          <thead>
            <tr style={{ backgroundColor: color }} className={`text-white ${alignmentClass}`}>
              {headers.map((header, index) => (
                <th
                  key={index}
                  colSpan={header.colSpan}
                  rowSpan={header.rowSpan}
                  className="px-4 py-3 border-t-0 border-b-0 border-l-0 border-r-0"
                  style={{
                    borderColor: "white",
                    borderBottom: `1px solid ${color}`,
                    borderLeft: index === 0 ? `1px solid ${color}` : "1px solid white",
                    borderRight: index === headers.length - 1 ? `1px solid ${color}` : "1px solid white",
                  }}
                >
                  {header.icon && <span className="inline-block mr-2">{header.icon}</span>}
                  {header.content}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={`${alignmentClass}`}>
                {row.map((cell, cellIndex) => {
                  const isNumeric = typeof cell.content === "number";
                  return (
                    <td
                      key={cellIndex}
                      colSpan={cell.colSpan}
                      rowSpan={cell.rowSpan}
                      className={`border border-gray-300 px-4 py-4 text-[#555555] text-md ${isNumeric ? "text-center" : ""} ${cell.nowrap? "text-nowrap": ""}`}
                      
                    >
                      {cell.icon && <span className="inline-block mr-2">{cell.icon}</span>}
                      {cell.content}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
  
        {notes.length > 0 && (
          <div className="mt-4">
            {notes.map((note, index) => (
              <p key={index} className="text-sm text-gray-400 font-light mt-2">
                備註{index + 1}: {note.text}
              </p>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  interface LabeledContentTableRow {
    title: string;
    content: React.ReactNode;
  }
  
  interface LabeledContentTableProps {
    rows: LabeledContentTableRow[];
    titleClassName?: string;
    contentClassName?: string;
  }
  
  export const LabeledContentTable: React.FC<LabeledContentTableProps> = ({
    rows,
    titleClassName,
    contentClassName,
  }) => {
    return (
      <div className="mt-6 grid grid-cols-12 border-[1px] border-pink">
        {rows.map((row, index) => (
          <React.Fragment key={index}>
            <div
              className={`col-span-3 bg-pink text-white flex items-center justify-center ${
                index !== 0 ? "border-t-[1px] border-white" : ""
              } ${titleClassName}`}
            >
              {row.title}
            </div>
            <div
              className={`col-span-9 px-4 pb-8 ${
                index !== 0 ? "border-t-[1px] border-pink" : ""
              } ${contentClassName}`}
            >
              {row.content}
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  };





  interface Column {
    header: string;
    accessor: string;
    nowrap?: boolean;
  }
  
  interface OldTableProps {
    columns: Column[];
    data: { [key: string]: any }[];
    color?: string;
  }
  
  export const OldTable: React.FC<OldTableProps> = ({ columns, data, color = "#FF8D50" }) => {
    return (
      <div className="overflow-x-auto mt-md">
        <table className="min-w-full border-collapse">
          <thead
            className="text-white content"
            style={{ backgroundColor: color }}
          >
            <tr>
              {columns.map((column, index) => (
                <th
                  key={column.accessor}
                  className={`py-2 px-4 border border-white `}
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
                className="hover:bg-[#f7f7f7] duration-300 content"
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
  