import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const data = [
  {
    id: '溫室氣體排放密度',
    data: [
      { x: '2021年', y: 0.259 },
      { x: '2022年', y: 0.326 },
      { x: '2023年', y: 0.465 },
    ],
  },
];

const LineChart: React.FC = () => (
  <div style={{ height: 400 }}>
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 200, bottom: 50, left: 80 }}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '年份',
        legendOffset: 36,
        legendPosition: 'middle',
        tickValues: data[0].data.map(d => d.x),
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '密度 (公噸CO₂e/億元)',
        legendOffset: -60,
        legendPosition: 'middle',
      }}
      colors={{ scheme: 'set2' }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  </div>
);

export default LineChart;
