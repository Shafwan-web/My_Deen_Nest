// components/Fees/Overview/PaymentStatus.jsx
import React from "react";

const PaymentStatus = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-72">
      <h3 className="text-lg font-semibold mb-4">Payment Status</h3>

      <ul className="space-y-2 mb-4">
        <li className="flex justify-between items-center">
          <span className="flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span> Paid
          </span>
          <span className="font-semibold">128</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="flex items-center">
            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span> Pending
          </span>
          <span className="font-semibold">22</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="flex items-center">
            <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span> Overdue
          </span>
          <span className="font-semibold">8</span>
        </li>
      </ul>

      <div className="space-y-2">
        <button className="w-full border rounded-lg py-2 text-sm font-medium hover:bg-gray-50">
          📩 Send Reminders
        </button>
        <button className="w-full border rounded-lg py-2 text-sm font-medium hover:bg-gray-50">
          🧾 Generate receipts
        </button>
        <button className="w-full border rounded-lg py-2 text-sm font-medium hover:bg-gray-50">
          📊 Export Data
        </button>
      </div>
    </div>
  );
};

export default PaymentStatus;
