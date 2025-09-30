// components/Fees/Overview/RecentPayments.jsx
import React from "react";

const payments = [
  { id: 1, name: "Muhammad Ali Khan", type: "Tuition Fee", amount: 3000, date: "16/08/2025" },
  { id: 2, name: "Fatima Begum", type: "Tuition Fee", amount: 3000, date: "16/08/2025" },
  { id: 3, name: "Khadija Rajhman", type: "Tuition + Transport", amount: 4500, date: "16/08/2025" },
  { id: 4, name: "Science fair", type: "Tuition Fee", amount: 3000, date: "16/08/2025" },
];

const RecentPayments = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex-1">
      <h3 className="text-lg font-semibold mb-4">Recent Payments</h3>
      <div className="space-y-3">
        {payments.map((payment) => (
          <div
            key={payment.id}
            className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
          >
            <div>
              <p className="font-medium">{payment.name}</p>
              <p className="text-sm text-gray-500">{payment.type}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">₹{payment.amount.toLocaleString()}</p>
              <p className="text-xs text-gray-500">{payment.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPayments;
