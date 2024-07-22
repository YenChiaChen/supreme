import React from "react";
import { ResponsiveLine } from "@nivo/line";

// Define the data structure
const data = [
  {
    id: "薪資平均數",
    color: "hsl(325, 70%, 50%)",
    data: [
      { x: "2020", y: 1163 },
      { x: "2021", y: 1380 },
      { x: "2022", y: 1300 },
    ],
  },
  {
    id: "薪資中位數",
    color: "hsl(43, 100%, 50%)",
    data: [
      { x: "2020", y: 1014 },
      { x: "2021", y: 1238 },
      { x: "2022", y: 1198 },
    ],
  },
];

const SalaryChart: React.FC = () => (
  <div style={{ height: "400px" }}>
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: 900,
        max: 1400,
        stacked: false,
        reverse: false,
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "年份",
        legendOffset: 36,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "薪資 (仟元)",
        legendOffset: -40,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  </div>
);

export default SalaryChart;
