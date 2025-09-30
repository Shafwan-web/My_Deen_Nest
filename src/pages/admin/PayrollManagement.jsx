import React from "react";
import PayrollManagementTabs from "../../components/admin/PayrollManagement/PayrollManagementTabs";

const PayrollManagement = () => {
  return (
    <div className="flex flex-col font-primary">
      {/* Header Section */}
      <div className="flex justify-between">
        <h2 className="text-lg font-bold">Payroll Management</h2>
        <div className="flex gap-4">
          <button className="text-[#6B7280] font-bold bg-[#DFE5EF] px-2 rounded text-sm">
            Export Payroll
          </button>
          <button className="text-white bg-primary font-semibold px-2 rounded text-sm">
            Process Payroll
          </button>
          <button className="text-white bg-green-600 font-semibold px-2 rounded text-sm">
            + Add Staff
          </button>
        </div>
      </div>

      {/* Content Placeholder */}
      <div className="mt-4">
        {/* You can add Payroll Stats / Tabs here like FeesManagementStats */}
        <PayrollManagementTabs/>
        
      </div>
    </div>
  );
};

export default PayrollManagement;
