import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Stat } from "../../components/ui/StatDisplay";

interface PieChartProps {
  data: {
    id: string;
    label: string;
    value: number;
    color: string;
  }[];
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  return (
    <div className="w-[380px] h-[380px] relative">
        <div className="absolute left-1/2 top-[45%] w-[230px] h-[130px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-2">
        {data.map((item) => (
        <div key={item.id} className="flex items-center">
          <div className="text-md">{item.label}</div>
          <div style={{ color: item.color }} className="text-4xl ml-4"><Stat num={item.value} suffix={""} decimals={1} /><span className="text-black text-sm">%</span></div>
        </div>
      ))}
        </div>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 0, bottom: 80, left: 0 }}
        innerRadius={0.9}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        colors={{ datum: 'data.color' }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        theme={{
          legends:{
            text:{
              fontSize: 14,
            }
          }
        }}
      
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 25,
            translateY: 56,
            itemsSpacing: 8,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default PieChart;
