import React from "react";
import { H3, Sup } from "./Text";
import { useTranslation } from "react-i18next";

interface Column {
  header: string;
  accessor: string;
  nowrap?: boolean;
}

interface TableProps2 {
  columns: Column[];
  data: { [key: string]: any }[];
  color?: string;
}

const Table: React.FC<TableProps2> = ({ columns, data, color = "#FF8D50" }) => {
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

export default Table;

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

interface TableCell {
  content: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
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
}

export const Table2: React.FC<TableProps> = ({
  data,
  color = "#000000",
  className = "",
  title = "",
  unit = "",
  notes = [],
}) => {
  const { headers, rows } = data;
  
  const { t } = useTranslation();

  return (
    <div className="mt-8">
      <H3 text={title} color={color} />
      <Sup text={unit} />
      <table className={`w-full border-collapse mt-4 ${className}`}>
        <thead>
          <tr style={{ backgroundColor: color }} className="text-white">
            {headers.map((header, index) => (
              <th
                key={index}
                colSpan={header.colSpan}
                rowSpan={header.rowSpan}
                className="px-4 py-3 border-t-0 border-b-0 border-l-0 border-r-0"
                style={{
                  borderColor: "white",
                  borderBottom: `1px solid ${color}`,
                  borderLeft:
                    index === 0 ? `1px solid ${color}` : "1px solid white",
                  borderRight:
                    index === headers.length - 1
                      ? `1px solid ${color}`
                      : "1px solid white",
                }}
              >
                {header.content}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => {
                const isNumeric = typeof cell.content === "number";
                return (
                  <td
                    key={cellIndex}
                    colSpan={cell.colSpan}
                    rowSpan={cell.rowSpan}
                    className={`border px-4 py-4 text-[#555555] text-md ${
                      isNumeric ? "text-center" : ""
                    }`}
                    style={{ borderColor: color }}
                  >
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
            <p key={index} className="text-sm text-gray-700 font-light mt-1">
              {t("common.note")} {index + 1}：{note.text}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
