import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  data: {
    datetime: string;
    transactions: number;
    blocks: number;
  }[];
  width: number | string;
  height: number | string;
};

const StatsGraph = ({ data, width, height }: Props) => {
  console.log(typeof data);
  return (
    <ResponsiveContainer width={width} height={height}>
      <AreaChart
        data={data}
        margin={{
          top: 30,
          right: 10,
          left: -40,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorTransactions" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#5AE2E2" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#5AE2E2" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorBlocks" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#9F85EC" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#9F85EC" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis id="xaxis" dataKey="datetime" minTickGap={40} axisLine={true} />
        <YAxis
          id="yaxis"
          type="number"
          dataKey="transactions"
          interval="preserveStartEnd"
          axisLine={false}
          allowDecimals={false}
        />
        <Area
          animationDuration={600}
          type="monotone"
          dataKey="transactions"
          stroke="#5AE2E2"
          fill="url(#colorTransactions)"
          fillOpacity={1}
          baseLine={0}
          dot={{ strokeWidth: 0, fill: "#5AE2E2" }}
        />
        <Area
          animationDuration={600}
          type="monotone"
          dataKey="blocks"
          stroke="#9F85EC"
          fill="url(#colorBlocks)"
          fillOpacity={1}
          baseLine={0}
          dot={{ strokeWidth: 0, fill: "#9F85EC" }}
        />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default StatsGraph;
