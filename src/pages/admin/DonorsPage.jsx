import React, { useState } from "react";
import plusicon from "../../assets/icons/plusicon.svg";

import DonorTable from "../../components/admin/Donor/DonorTable";
import AddDonor from "../../components/admin/Donor/AddDonor";

const DonorsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handlers for Add Donor modal
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-[#1E293B]">Donors</h2>

        {/* Add Donor Button */}
        <button
          className="bg-primary p-1.5 text-sm font-semibold text-white rounded-sm flex items-center gap-1 cursor-pointer"
          onClick={handleOpenModal}
        >
          <img src={plusicon} alt="Plus Icon" className="w-4 h-4" />
          Add Donor
        </button>
      </div>

      <div>
        <DonorTable />
      </div>

      {/* Add Donor Modal */}
      {isModalOpen && <AddDonor onClose={handleCloseModal} />}
    </>
  );
};

export default DonorsPage;
