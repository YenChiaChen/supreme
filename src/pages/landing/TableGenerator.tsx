import React, { useState } from 'react';

// 定义表格单元格的接口
interface TableCell {
  content: string | string[]; // 支持string或string数组
  colspan: number;
  rowspan: number;
}

// 定义表格行的接口
interface TableRow {
  row: TableCell[];
}

// 定义表格的接口
interface TableData {
  thead: TableRow[];
  tbody: TableRow[];
}

// 表格生成器组件
const TableGenerator: React.FC = () => {
  const [tableData, setTableData] = useState<TableData>({
    thead: [{ row: [{ content: '', colspan: 1, rowspan: 1 }] }],
    tbody: [{ row: [{ content: '', colspan: 1, rowspan: 1 }] }],
  });

  // 更新单元格内容
  const handleCellChange = (
    section: 'thead' | 'tbody',
    rowIndex: number,
    cellIndex: number,
    key: keyof TableCell,
    value: string
  ) => {
    const updatedTableData = { ...tableData };
    const updatedRow = [...updatedTableData[section][rowIndex].row];
    const updatedCell = { ...updatedRow[cellIndex], [key]: value };
    updatedRow[cellIndex] = updatedCell;
    updatedTableData[section][rowIndex].row = updatedRow;
    setTableData(updatedTableData);
  };

  // 添加行
  const addRow = (section: 'thead' | 'tbody') => {
    const newRow: TableRow = { row: [{ content: '', colspan: 1, rowspan: 1 }] };
    setTableData((prevData) => ({
      ...prevData,
      [section]: [...prevData[section], newRow],
    }));
  };

  // 添加单元格
  const addCell = (section: 'thead' | 'tbody', rowIndex: number) => {
    const newCell: TableCell = { content: '', colspan: 1, rowspan: 1 };
    setTableData((prevData) => {
      const updatedRow = [...prevData[section][rowIndex].row, newCell];
      const updatedSection = [...prevData[section]];
      updatedSection[rowIndex] = { row: updatedRow };
      return { ...prevData, [section]: updatedSection };
    });
  };

  // 生成JSON文件
  const generateJSON = () => {
    const json = JSON.stringify({ table: tableData }, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'tableData.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h2>Table Generator</h2>
      {['thead', 'tbody'].map((section) => (
        <div key={section}>
          <h3>{section.toUpperCase()}</h3>
          {tableData[section as 'thead' | 'tbody'].map((row, rowIndex) => (
            <div key={rowIndex}>
              {row.row.map((cell, cellIndex) => (
                <div key={cellIndex}>
                  <input
                    type="text"
                    placeholder="Content"
                    value={Array.isArray(cell.content) ? cell.content.join(', ') : cell.content}
                    onChange={(e) =>
                      handleCellChange(
                        section as 'thead' | 'tbody',
                        rowIndex,
                        cellIndex,
                        'content',
                        e.target.value
                      )
                    }
                  />
                  <input
                    type="number"
                    placeholder="Colspan"
                    value={cell.colspan}
                    onChange={(e) =>
                      handleCellChange(
                        section as 'thead' | 'tbody',
                        rowIndex,
                        cellIndex,
                        'colspan',
                        e.target.value
                      )
                    }
                  />
                  <input
                    type="number"
                    placeholder="Rowspan"
                    value={cell.rowspan}
                    onChange={(e) =>
                      handleCellChange(
                        section as 'thead' | 'tbody',
                        rowIndex,
                        cellIndex,
                        'rowspan',
                        e.target.value
                      )
                    }
                  />
                </div>
              ))}
              <button onClick={() => addCell(section as 'thead' | 'tbody', rowIndex)}>Add Cell</button>
            </div>
          ))}
          <button onClick={() => addRow(section as 'thead' | 'tbody')}>Add Row</button>
        </div>
      ))}
      <button onClick={generateJSON}>Generate JSON</button>
    </div>
  );
};

export default TableGenerator;
