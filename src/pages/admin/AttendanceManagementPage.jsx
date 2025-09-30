import React, { useState } from "react";
import AttendanceStats from "../../components/admin/AttendanceManagement/AttendanceStats";

import MarkAttendanceModal from "../../components/admin/AttendanceManagement/MarkAttendanceModal";
import plusicon from "../../assets/icons/plusicon.svg"; // ✅ same as Notice Page
import AttendanceManagementTabs from "../../components/admin/AttendanceManagement/AttendanceManagementTabs";

const AttendanceManagementPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Attendance Management</h2>

        {/* Buttons on right side */}
        <div className="flex gap-3">
          <button className="bg-[#DFE5EF] text-[#374151] p-1.5 text-sm font-semibold rounded-sm cursor-pointer">
            Export
          </button>
          <button
            onClick={openModal}
            className="bg-primary p-1.5 text-sm font-semibold text-white rounded-sm flex items-center gap-1 cursor-pointer"
          >
            <img src={plusicon} alt="" />
            Mark Attendance
          </button>
        </div>
      </div>

      {/* Stats & Tabs */}
      <div>
        <AttendanceStats />
        <AttendanceManagementTabs />
      </div>

      {/* Modal */}
      {isModalOpen && <MarkAttendanceModal onClose={closeModal} />}
    </div>
  );
};

export default AttendanceManagementPage;
