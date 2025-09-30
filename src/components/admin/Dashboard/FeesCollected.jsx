import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const FeesCollected = () => {
  const feesData = [
    {
      id: 1,
      title: "Total Fees Collected",
      amount: "₹ 25,000,00",
      change: "+1.2%",
      trend: "up",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      id: 2,
      title: "Fine Collected till Date",
      amount: "₹ 4,56,450",
      change: "-1.2%",
      trend: "down",
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      id: 3,
      title: "Student Not Paid",
      amount: "₹ 545",
      change: "-1.2%",
      trend: "down",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      id: 4,
      title: "Total Outstanding",
      amount: "₹ 4,56,640",
      change: "-1.2%",
      trend: "down",
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
  ];

  return (
    <div className="w-full h-[400px] space-y-3 overflow-y-auto font-primary">
      {feesData.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-[#F2F2F2] rounded-md shadow-sm p-4 hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-[#6B7280] mb-1">
                {item.title}
              </h3>
              <p className="text-xl font-bold text-gray-900">{item.amount}</p>
            </div>

            <div
              className={`${item.bgColor} ${item.color} px-2 py-1 rounded-md flex items-center gap-1`}
            >
              {item.trend === "up" ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              <span className="text-xs font-medium">{item.change}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeesCollected;
