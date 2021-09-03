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
        txnCount: string;
        blockCount: string;
      }[]
    | [];

  width: number | string;
  minWidth: number | string;
  height: number | string;
};

const StatsGraph = ({ data, width, minWidth, height }: Props) => {
  return (
    <ResponsiveContainer width={width} minWidth={minWidth} height={height}>
      <AreaChart data={data} margin={{ left: -50 }}>
        <XAxis id="xaxis" dataKey="datetime" minTickGap={40} axisLine={true} />
        <YAxis
          id="yaxis"
          type="number"
          dataKey="txnCount"
          interval="preserveStartEnd"
          axisLine={false}
          allowDecimals={false}
        />
        <Area
          animationDuration={600}
          type="monotone"
          dataKey="txnCount"
          stroke="#495867"
          fill="#74b3ce"
          baseLine={0}
          dot={{ strokeWidth: 0, fill: "#09bc8a" }}
        />
        <Area
          animationDuration={600}
          type="monotone"
          dataKey="blockCount"
          stroke="#495867"
          fill="#74b3ce"
          baseLine={0}
          dot={{ strokeWidth: 0, fill: "#09bc8a" }}
        />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default StatsGraph;
