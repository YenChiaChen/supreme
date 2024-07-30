import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

interface WaterConsumptionData {
  year: string;
  consumption: number;
  [key: string]: string | number;
}

interface WaterConsumptionChartProps {
  data: WaterConsumptionData[];
}

const colors = ['#ade0c3', '#85d4a7', '#5fc98d', '#3bc376'];

const WaterConsumptionChart: React.FC<WaterConsumptionChartProps> = ({ data }) => {
  return (
    <ResponsiveBar
      data={data}
      keys={['consumption']}
      indexBy="year"
      margin={{ top: 20, right: 0, bottom: 80, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={colors}
      colorBy="indexValue"
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '年份',
        legendPosition: 'middle',
        legendOffset: 50,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '取水量',
        legendPosition: 'middle',
        legendOffset: -50,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
       labelTextColor="#ffffff"
      theme={{
        axis: {
          legend: {
            text: {
              fontSize: 16, 
            },
          },
        },
        legends: {
          text: {
            fontSize: 14
          },
        },
        labels: {
          text: {
            fontSize: 16,
            
          },
        },
      }}
      animate={true}
      motionConfig="gentle"
    />
  );
};

export default WaterConsumptionChart;
