import React from "react";
import Payroll from "../../Teacher/Tabs/Payroll";
import Vector from "../../../../../src/assets/icons/Vector.svg";
import Hat from "../../../../../src/assets/icons/Group.svg";
import Book_i from "../../.././../assets/icons/Books.svg";
const PayrollProcessing = () => {
  const PayRollData = [
    {
      icon: Hat,
      backColor: "#E6F3FF",
      Title: "Total Staff",
      Pkr: "12",
    },
    {
      icon: Vector,
      backColor: "#E9FDF0",
      Title: "Total Payroll",
      Pkr: "₹ PKR 2,45,000",
    },
    {
      icon: Book_i,
      backColor: "#FFF9E6",
      Title: "Pending Payments",
      Pkr: "3",
    },
  ];
  // Payroll breakdown data
  const breakdownData = [
    { title: "Base Salaries", amount: 195000 },
    { title: "Housing Allowances", amount: 35000 },
    { title: "Transport Allowances", amount: 15000 },
    { title: "Medical Allowances", amount: 8000 },
  ];

  const totalDeducations = -8000;
  const grossTotal = breakdownData.reduce((acc, cur) => {
    let Ans = acc + cur.amount;
    return Ans;
  }, 0);
  // const grossTotal = breakdownData.reduce((acc, item) => acc + item.amount, 0);
  const netPayroll = grossTotal + totalDeducations;
  return (
    <div className="bg-[#FFF] border border-[#F2F2F2] p-4">
      <h1 className="font-bold font-primary mb-6">
        Current Month Payroll Summary
      </h1>
      <div className="grid grid-cols-3 gap-4 ">
        {PayRollData.map((item, index) => {
          return (
            <div
              className="border border-[#F2F2F2] rounded-sm font-semibold p-4"
              key={index}
            >
              <div className="flex justify-between ">
                <div className="">
                  <span className="text-[#1E293B]">{item.Title}</span>
                </div>
                <div
                  className="flex justify-center p-4 rounded-sm"
                  style={{ background: `${item.backColor}` }}
                >
                  <img src={item.icon} alt="Icon Different" />
                </div>
              </div>
              <h1 className="font-extrabold text-2xl leading-tight">
                {item.Pkr}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="mt-8 border border-[#F2F2F2] rounded-md p-4">
        <h2 className="font-bold text-lg mb-4 text-[#1E293B]">
          Payroll Breakdown
        </h2>

        {breakdownData.map((item, index) => (
          <div key={index} className="flex justify-between py-1 mb-1">
            <span className="font-primary font-medium text-base">
              {item.title}:
            </span>
            <span>₹ {item.amount.toLocaleString()}</span>
          </div>
        ))}

        <div className="flex justify-between py-1 border-b border-gray-100 text-red-500 font-semibold">
          <span>Total Deductions:</span>
          <span>₹ {totalDeducations.toLocaleString()}</span>
        </div>

        <div className="flex justify-between py-2 text-green-600 font-bold text-lg">
          <span>Net Payroll:</span>
          <span>₹ {netPayroll.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default PayrollProcessing;
