import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  data:
    | {
        datetime: string;
        transactions: number;
        blocks: number;
      }[]
    | [];

  width: number | string;
  minWidth: number | string;
  height: number | string;
};

const StatsGraph = ({ data, width, minWidth, height }: Props) => {
  return (
    <ResponsiveContainer width={width} minWidth={minWidth} height={height}>
      <AreaChart data={data} margin={{ left: -40 }}>
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
          stroke="#09bc8a"
          fill="#09bc8a"
          baseLine={0}
          dot={{ strokeWidth: 0, fill: "#09bc8a" }}
        />
        <Area
          animationDuration={600}
          type="monotone"
          dataKey="blocks"
          stroke="#74b3ce"
          fill="#74b3ce"
          baseLine={0}
          dot={{ strokeWidth: 0, fill: "#74b3ce" }}
        />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default StatsGraph;
