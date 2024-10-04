import React from 'react';

interface BarChartProps {
  data: { label: string; value: number }[];
  height?: number;
  barColor?: string;
}

const BarChart: React.FC<BarChartProps> = ({ data, height = 300, barColor = 'bg-blue-500' }) => {
  const maxValue = Math.max(...data.map(item => item.value), 0);

  // 計算刻度的步長
  const step = Math.ceil(maxValue / 5);
  const scaleLabels = Array.from({ length: 6 }, (_, i) => step * i).reverse();

  return (
    <div className="relative" style={{ height: `${height}px` }}>
      {/* 刻度線條 (背景) */}
      <div className="absolute inset-0 flex flex-col justify-between">
        {scaleLabels.map((_, index) => (
          <div key={index} className="w-full h-px bg-gray-300" />
        ))}
      </div>

      {/* Bar Chart */}
      <div className="relative flex items-end space-x-2 z-10 pl-24" style={{ height: `${height}px` }}>
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-end h-full">
            <div
              className={`w-8 ${barColor} transition-all rounded-t-md`}
              style={{ height: `${(item.value / maxValue) * 100}%` }}
            ></div>
            <span className="mt-2 text-sm">{item.label}</span>
          </div>
        ))}
      </div>

      {/* 左邊的刻度標籤 */}
      <div className="absolute left-0 top-0 flex flex-col justify-between h-full mr-2 text-right z-20" style={{ height: `${height}px` }}>
        {scaleLabels.map((label, index) => (
          <div key={index} className="relative">
            <span className="text-sm text-gray-500">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
