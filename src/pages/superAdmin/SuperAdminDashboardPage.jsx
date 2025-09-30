import React from "react";
import StatsCard from "../../components/superAdmin/Dashboard/StatsCard";
import SubscriptionGrowth from "../../components/superAdmin/Dashboard/SubscriptionGrowth";
import RevenueTrends from "../../components/superAdmin/Dashboard/RevenueTrends";
import PlanDistribution from "../../components/superAdmin/Dashboard/PlanDistribution";
import RecentActivities from "../../components/superAdmin/Dashboard/RecentActivities";

const SuperAdminDashboardPage = () => {
  return (
    <div>
      <div>
        <div className=" space-y-4 text-sm  md:text-base bg- min-h-screen font-primary">
          <h2 className="text-xl font-bold text-[#1E293B] md:text-2xl">
            Super Admin
          </h2>
          {/* Top Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
            <StatsCard
              title="Total Madrasa"
              value="12"
              icon="/imgsa-1.svg"
              subtitle="Registered institutions"
              color="bg-blue-100"
            />
            <StatsCard
              title="Active Madrasa"
              value="2"
              icon="/imgsa-2.svg"
              subtitle="Currently subscribed"
              color="bg-red-100"
            />
            <StatsCard
              title="Expiring Soon"
              value="1"
              icon="/imgsa-3.svg"
              subtitle="Need renewal"
              color="bg-green-100"
            />
            <StatsCard
              title="Expired"
              value="2"
              icon="/imgsa-4.svg"
              subtitle="Across all madrasas"
              color="bg-yellow-100"
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <SubscriptionGrowth />
            <RevenueTrends />
          </div>

          {/* Bottom */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Left component - 30% */}
            <div className="w-full lg:w-3/10 bg-white  p-4">
              <PlanDistribution />
            </div>

            {/* Right component - 70% */}
            <div className="w-full lg:w-7/10 bg-white p-4">
              <RecentActivities />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboardPage;
