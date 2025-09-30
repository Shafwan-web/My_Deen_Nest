// components/Fees/Overview.jsx
import React from "react";
import RecentPayments from "../RecentPayments";
import PaymentStatus from "../PaymentStatus";
import MonthlyCollectionTrend from "../MonthlyCollectionTrend";


const Overview = () => {
  return (
    <div className="">
      {/* Top Section: Recent Payments + Payment Status */}
      <div className="flex flex-col lg:flex-row gap-4">
        <RecentPayments />
        <PaymentStatus />
      </div>

      {/* Bottom Section: Monthly Collection Trend */}
      <MonthlyCollectionTrend />
    </div>
  );
};

export default Overview;
