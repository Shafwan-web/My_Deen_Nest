import React, { useState } from "react";
import FeesManagementStats from "../../components/admin/FeesManagement/FeesManagementStats";
import FeesManagementTabs from "../../components/admin/FeesManagement/FeesManagementTabs";
import FeesCollectionModal from "../../components/admin/FeesManagement/FeesCollectionModal";

const FeesManagementPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col font-primary">
      <div className="flex justify-between">
        <h2 className="text-lg font-bold">Fees Management</h2>
        <div className="flex gap-4">
          <button className="text-[#6B7280] font-bold bg-[#DFE5EF] px-2 rounded text-sm">
            Export
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-white bg-primary font-semibold px-2 rounded text-sm"
          >
            + Fee Collection
          </button>
        </div>
      </div>

      <div>
        <FeesManagementStats />
        <FeesManagementTabs />
      </div>

      <FeesCollectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default FeesManagementPage;
