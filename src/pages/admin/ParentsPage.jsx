import React, { useState } from "react";
import uploadbulk from "../../assets/icons/uploadbulk.svg";
import plusicon from "../../assets/icons/plusicon.svg";


import ParentTable from "../../components/admin/Parent/ParentTable";
import UploadBulkParent from "../../components/admin/Parent/UploadBulkParent";
import AddParent from "../../components/admin/Parent/AddParent";


const ParentsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  // Handlers for Add Parent modal
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Handlers for Bulk Upload modal
  const handleOpenBulkModal = () => setIsBulkModalOpen(true);
  const handleCloseBulkModal = () => setIsBulkModalOpen(false);

  // Handlers for Upgrade modal


  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-[#1E293B]">Parents</h2>

        <div className="flex gap-2">
          {/* Upload Bulk */}
          <button
            className="bg-[#DFE5EF] p-1.5 text-sm font-semibold text-[#6B7280] rounded-sm flex items-center gap-1 cursor-pointer"
            onClick={handleOpenBulkModal}
          >
            <img src={uploadbulk} alt="Upload Icon" className="w-4 h-4" />
            Upload Bulk
          </button>

          {/* Add Parent */}
          <button
            className="bg-primary p-1.5 text-sm font-semibold text-white rounded-sm flex items-center gap-1 cursor-pointer"
            onClick={handleOpenModal}
          >
            <img src={plusicon} alt="Plus Icon" className="w-4 h-4" />
            Add Parent
          </button>
        </div>
      </div>

      <div>
        <ParentTable />
      </div>

      {/* Modals */}
      {isModalOpen && <AddParent onClose={handleCloseModal} />}
      {isBulkModalOpen && <UploadBulkParent onClose={handleCloseBulkModal} />}
    
    </>
  );
};

export default ParentsPage;
