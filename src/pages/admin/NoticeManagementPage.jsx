import React, { useState } from "react";
import NoticeManagementTable from "../../components/admin/NoticeManagement/NoticeManagementTable";
import plusicon from "../../assets/icons/plusicon.svg";
import GiveNoticeModal from "../../components/admin/NoticeManagement/GiveNoticeModal"; // import your modal

const NoticeManagementPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Notice Management</h2>
        <button
          onClick={openModal}
          className="bg-primary p-1.5 text-sm font-semibold text-white rounded-sm flex items-center gap-1 cursor-pointer"
        >
          <img src={plusicon} alt="" />
          Add Notice
        </button>
      </div>

      {/* Table */}
      <div>
        <NoticeManagementTable />
      </div>

      {/* Modal */}
      {isModalOpen && <GiveNoticeModal onClose={closeModal} />}
    </div>
  );
};

export default NoticeManagementPage;
