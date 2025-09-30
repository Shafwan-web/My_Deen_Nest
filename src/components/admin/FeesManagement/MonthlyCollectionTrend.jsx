// components/Fees/Overview/MonthlyCollectionTrend.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", amount: 280000 },
  { month: "Feb", amount: 280000 },
  { month: "Mar", amount: 280000 },
  { month: "Apr", amount: 180000 },
  { month: "May", amount: 320000 },
  { month: "Jun", amount: 220000 },
];

const MonthlyCollectionTrend = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mt-4">
      <h3 className="text-lg font-semibold mb-4">Monthly Collection Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
          <Bar dataKey="amount" fill="#0d9488" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyCollectionTrend;
