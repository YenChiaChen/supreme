import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '2021年',
    uv: 3.393,
    pv: 232.317,
    type3: 1500.392,
    amt: 0.259,
  },
  {
    name: '2022年',
    uv: 14.654,
    pv: 242.175,
    type3: 1723.624,
    amt:0.326,
  },
  {
    name: '2023年',
    uv: 19.462,
    pv: 280.250,
    type3: 1289.207,
    amt: 0.465,
  }
];

const WaterData = [
  {
    name: '2021年',
    withdrawal: 0.819,
    discharge: 0.819,
    consumption:0,
  },
  {
    name: '2022年',
    withdrawal: 2.867,
    discharge: 2.867,
    consumption:0,
  },
  {
    name: '2023年',
    withdrawal: 2.932,
    discharge: 2.932,
    consumption:0,
  },
]

export class ClimateBarChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 0,
            right: 0,
            bottom: 20,
            left: 0,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" stackId="a" barSize={40} fill="#ffc7a3" yAxisId="left" name="範疇一" />
          <Bar dataKey="pv" stackId="a" barSize={40} fill="#FF8D50" yAxisId="left" name="範疇二" />
          <Bar dataKey="type3" stackId="a" barSize={40} fill="#3BC376" yAxisId="left" name="範疇三" />
          <Line type="monotone" dataKey="amt" stroke="#4C8591" yAxisId="right" name="排放密集度" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}

export class WaterBarChart extends PureComponent{

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={WaterData}
          margin={{
            top: 0,
            right: 0,
            bottom: 20,
            left: 0,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="withdrawal"  barSize={40} fill="#3B79E4"  name="取水量" />
          <Bar dataKey="discharge" barSize={40} fill="#FF8D50"  name="排水量" />
          <Line type="monotone" dataKey="consumption" stroke="#4C8591"  name="耗水量" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
