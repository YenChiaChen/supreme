import React from 'react';
import { ResponsiveLine } from '@nivo/line';

interface EmissionData {
  year: number;
  direct: number;
  indirect: number;
  total: number;
}

const data: EmissionData[] = [
  { year: 2021, direct: 3.393, indirect: 232.317, total: 235.710 },
  { year: 2022, direct: 14.654, indirect: 242.175, total: 256.829 },
  { year: 2023, direct: 19.462, indirect: 280.250, total: 299.712 },
];

const chartData = [
  {
    id: "Direct GHG Emissions",
    data: data.map(d => ({ x: d.year, y: d.direct }))
  },
  {
    id: "Energy Indirect GHG Emissions",
    data: data.map(d => ({ x: d.year, y: d.indirect }))
  },
  {
    id: "Total Emissions",
    data: data.map(d => ({ x: d.year, y: d.total }))
  }
];

const EmissionsLineChart: React.FC = () => {
  return (
    <div style={{ height: '500px' }}>
      <ResponsiveLine
        data={chartData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: false,
          reverse: false
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Year',
          legendOffset: 36,
          legendPosition: 'middle'
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Emissions',
          legendOffset: -40,
          legendPosition: 'middle'
        }}
        colors={{ scheme: 'nivo' }}
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
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  );
};

export default EmissionsLineChart;
