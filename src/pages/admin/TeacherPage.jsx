import React, { useState } from "react";
import TeacherTable from "../../components/admin/Teacher/TeacherTable";
import uploadbulk from "../../assets/icons/uploadbulk.svg";
import plusicon from "../../assets/icons/plusicon.svg";
import AddTeacher from "../../components/admin/Teacher/AddTeacher";

const TeacherPage = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-[#1E293B] font-bold text-xl">Teacher</h2>
        <div className="flex gap-4">
          <button className="bg-[#DFE5EF] p-1.5 text-sm font-semibold text-[#6B7280] rounded-sm flex items-center gap-1 cursor-pointer">
            <img src={uploadbulk} alt="Upload Icon" className="w-4 h-4" />
            Upload Bulk
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-primary p-1.5 text-sm font-semibold text-white rounded-sm flex items-center gap-1 cursor-pointer"
          >
            <img src={plusicon} alt="Plus Icon" className="w-4 h-4" />
            Add Teacher
          </button>
        </div>
      </div>

      <div>
        <TeacherTable />
      </div>

      {/* Add Teacher Modal */}
      {showAddModal && <AddTeacher onClose={() => setShowAddModal(false)} />}
    </>
  );
};

export default TeacherPage;
