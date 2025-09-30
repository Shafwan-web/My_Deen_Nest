import React, { useState } from "react";
import ReviewManagementTable from "../../components/admin/ReviewManagement/ReviewManagementTable";
import plusicon from "../../assets/icons/plusicon.svg";
import GiveReviewModal from "../../components/admin/ReviewManagement/GiveReviewModal"; // import your modal

const ReviewManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4"> 
        <h2 className="font-bold text-lg">Review Management</h2>
        <button
          onClick={openModal}
          className="bg-primary p-1.5 text-sm font-semibold text-white rounded-sm flex items-center gap-1 cursor-pointer"
        >
          <img src={plusicon} alt="" />
          Give Review
        </button>
      </div>

      {/* Table */}
      <div>
        <ReviewManagementTable />  
      </div>

      {/* Modal */}
      {isModalOpen && (
        <GiveReviewModal onClose={closeModal} />
      )}
    </div>
  );
};

export default ReviewManagement;
