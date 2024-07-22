import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const data = [
  {
    year: '2021年',
    "直接溫室氣體排放": 3.393,
    "能源間接溫室氣體排放": 232.317,
    "總排放量": 235.71,
  },
  {
    year: '2022年',
    "直接溫室氣體排放": 14.654,
     "能源間接溫室氣體排放": 242.175,
    "總排放量": 256.829,
  },
  {
    year: '2023年',
    "直接溫室氣體排放": 19.462,
     "能源間接溫室氣體排放": 280.25,
    "總排放量": 299.712,
  },
];

const data2 = [
  {
    year: '2021年',
    "與燃料和能源相關活動的排放": 42.775,
    "上游運輸和配送產生的排放": 0,
    "商務旅行產生的排放": 225.242,
    "下游運輸和配送產生的排放": 1232.375,
  },
  {
    year: '2022年',
    "與燃料和能源相關活動的排放": 47.390,
    "上游運輸和配送產生的排放": 53.172,
    "商務旅行產生的排放": 306.120,
    "下游運輸和配送產生的排放": 1723.624,
  },
  {
    year: '2023年',
    "與燃料和能源相關活動的排放": 60.274,
    "上游運輸和配送產生的排放":46.383,
    "商務旅行產生的排放": 286.470,
    "下游運輸和配送產生的排放": 896.080,
  },
];

export const GasChart2 = () => (
  <div style={{ height: 400 }}>
    <ResponsiveBar
      data={data2}
      keys={["與燃料和能源相關活動的排放", "上游運輸和配送產生的排放", "商務旅行產生的排放", "下游運輸和配送產生的排放"]}
      indexBy="year"
      margin={{ top: 50, right: 200, bottom: 50, left: 80 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'nivo' }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'fries',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'sandwich',
          },
          id: 'lines',
        },
      ]}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '年份',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '排放量 (公噸)',
        legendPosition: 'middle',
        legendOffset: -60,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={function (e) {
        return e.id + ': ' + e.formattedValue + ' in year: ' + e.indexValue;
      }}
    />
  </div>

)

const BarChart = () => (
  <div style={{ height: 400 }}>
    <ResponsiveBar
      data={data}
      keys={["直接溫室氣體排放", "能源間接溫室氣體排放", "總排放量"]}
      indexBy="year"
      margin={{ top: 50, right: 200, bottom: 50, left: 80 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'nivo' }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'fries',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'sandwich',
          },
          id: 'lines',
        },
      ]}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '年份',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '排放量 (公噸)',
        legendPosition: 'middle',
        legendOffset: -60,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={function (e) {
        return e.id + ': ' + e.formattedValue + ' in year: ' + e.indexValue;
      }}
    />
  </div>
);

export default BarChart;
