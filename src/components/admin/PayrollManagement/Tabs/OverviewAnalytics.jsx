import React from "react";
import Vector from "../../../../../src/assets/icons/Vector.svg";
import Hat from "../../../../../src/assets/icons/Group.svg";
import Book_i from "../../.././../assets/icons/Books.svg";
import { Fragment } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const OverviewAnalytics = () => {
  const monthlyPayrollData = [
    { month: "Aug", payroll: 200000, lastYear: 180000 },
    { month: "Sep", payroll: 205000, lastYear: 190000 },
    { month: "Oct", payroll: 210000, lastYear: 200000 },
    { month: "Nov", payroll: 220000, lastYear: 210000 },
    { month: "Dec", payroll: 225000, lastYear: 215000 },
    { month: "Jan", payroll: 230000, lastYear: 220000 },
  ];

  const totalPayrollData = [
    { name: "Paid", value: 200000 },
    { name: "Pending", value: 45000 },
  ];

  const COLORS = ["#008080", "#FF8042"]; // Paid = teal, Pending = orange
  const OverViewData = [
    {
      icon: Vector,
      backColor: "#E9FDF0",
      nmb: "+8%",
      numb_color: "#16A34A",
      Title: "Total Yearly Payroll",
      Pkr: "PKR 2,45,000",
    },
    {
      icon: Hat,
      backColor: "#E6F3FF",
      nmb: "+8%",
      numb_color: "#16A34A",
      Title: "Active Maulana / staff",
      Pkr: "PKR 2,45,000",
    },
    {
      icon: Book_i,
      backColor: "#FFF9E6",
      nmb: "+8%",
      numb_color: "#DC2626",
      Title: "Pending Pay",
      Pkr: "PKR 2,45,000",
    },
    {
      icon: Vector,
      backColor: "#E9FDF0",
      nmb: "+8%",
      numb_color: "#16A34A",
      Title: "This Month Paid",
      Pkr: "PKR 2,45,000",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {OverViewData.map((value, index) => {
          return (
            <div key={index} className="bg-[#FFFFFF] p-4 font-primary">
              <div className="flex flex-row justify-between mb-6">
                <div
                  className="w-10 h-10 flex justify-center items-center"
                  style={{ background: `${value.backColor}` }}
                >
                  <img src={value.icon} alt="Users" />
                </div>
                <div
                  className="font-semibold"
                  style={{ color: `${value.numb_color}` }}
                >
                  {value.nmb}
                </div>
              </div>
              <span className="text-base font-semibold text-[#6B7280]">
                {value.Title}
              </span>
              <h3 className="mt-2 text-lg font-semibold font-primary">
                {value.Pkr}
              </h3>
            </div>
          );
        })}
      </div>
      {/* <div></div>
      <div></div> */}
      <div className="grid grid-cols-2 mt-4 gap-4 ">
        <div className="bg-[#FFFFFF] p-10">
          <span className="font-bold text-base text-[#1E293B">
            Monthly Payroll Trend
          </span>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyPayrollData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="payroll"
                stroke="#16A34A" // green like Figma
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="lastYear"
                stroke="#94A3B8" // green like Figma
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-[#FFFFFF] p-10">
          <span className="font-bold text-base text-[#1E293B">
            Monthly Payroll Trend
          </span>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={totalPayrollData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {totalPayrollData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default OverviewAnalytics;
