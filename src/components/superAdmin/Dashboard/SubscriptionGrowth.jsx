import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", value: 40 },
  { month: "Feb", value: 70 },
  { month: "Mar", value: 90 },
  { month: "Apr", value: 80 },
  { month: "May", value: 100 },
  { month: "Jun", value: 120 },
  { month: "Jul", value: 140 },
  { month: "Aug", value: 160 },
];

function SubscriptionGrowth() {
  return (
    <div className="bg-white rounded-md  p-5 w-full">
      {/* Title */}
      <h3 className="font-bold text-sm mb-4  sm:text-base">Subscription Growth</h3>

      {/* Chart */}
      <div className="w-full  h-[250px]">
        <ResponsiveContainer width="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#6b7280" }} />
            <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                fontSize: "12px",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 4, fill: "#2563eb" }}
              activeDot={{ r: 6, fill: "#1d4ed8" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SubscriptionGrowth;
