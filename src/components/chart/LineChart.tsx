import React from "react";

interface LineChartProps {
  data: { x: number; y: number }[];
  width: number;
  height: number;
}

const LineChart: React.FC<LineChartProps> = ({ data, width, height }) => {
  const padding = 20;

  // 计算x轴和y轴的比例
  const xScale = (x: number) => (x / Math.max(...data.map((d) => d.x))) * (width - 2 * padding);
  const yScale = (y: number) => height - padding - (y / Math.max(...data.map((d) => d.y))) * (height - 2 * padding);

  // 生成折线图的路径
  const linePath = data
    .map((d, i) => `${i === 0 ? "M" : "L"} ${xScale(d.x)},${yScale(d.y)}`)
    .join(" ");

  return (
    <svg width={width} height={height}>
      {/* 画x轴 */}
      <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="black" />
      {/* 画y轴 */}
      <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="black" />
      
      {/* 绘制折线 */}
      <path d={linePath} fill="none" stroke="blue" strokeWidth={2} />

      {/* 标记点 */}
      {data.map((d, i) => (
        <circle key={i} cx={xScale(d.x)} cy={yScale(d.y)} r={3} fill="red" />
      ))}
    </svg>
  );
};

export default LineChart;
