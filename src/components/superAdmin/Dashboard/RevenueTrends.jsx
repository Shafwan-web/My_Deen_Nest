import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 15000 },
  { name: "Feb", value: 20000 },
  { name: "Mar", value: 30000 },
  { name: "Apr", value: 35000 },
  { name: "May", value: 40000 },
  { name: "Jun", value: 48000 },
  { name: "Jul", value: 55000 },
  { name: "Aug", value: 60000 },
];

function RevenueTrends() {
  return (
    <div className="bg-white rounded-md  p-4">
      <h3 className="font-bold  text-sm   sm:text-base mb-4">Revenue Trends</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#0d9488" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueTrends;
