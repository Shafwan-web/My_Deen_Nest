import React, { useState } from "react";
import plusicon from "../../assets/icons/plusicon.svg";
import SubjectsTable from "../../components/admin/Subjects/SubjectsTable";
import CreateSubject from "../../components/admin/Subjects/CreateSubject";

const SubjectsPage = () => {


  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-4">
        <h2 className="font-bold text-lg">Subject</h2>
        <button
          onClick={() => setOpenModal(true)}
          className="bg-primary p-1.5 text-xs sm:text-sm font-semibold text-white rounded-sm flex items-center gap-1 cursor-pointer"
        >
          <img src={plusicon} alt="" />
          Create Subject
        </button>
      </div>

      <div>
        <SubjectsTable />
      </div>

      {openModal && <CreateSubject onClose={() => setOpenModal(false)} />}
    </div>
  );
};

export default SubjectsPage; 
