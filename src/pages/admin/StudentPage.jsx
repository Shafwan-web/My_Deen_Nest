// import React from "react";
// import uploadbulk from "../../assets/icons/uploadbulk.svg";
// import plusicon from "../../assets/icons/plusicon.svg";
// import StudentTable from "./components/StudentTable";

// const StudentPage = () => {
//   return (
//     <>
//       {" "}
//       <div className="flex justify-between items-center ">
//         <h2 className="text-2xl font-bold text-[#1E293B]">Student</h2>

//         <div className="flex gap-2">
//           <button className="bg-[#DFE5EF] p-1.5 text-sm font-semibold text-[#6B7280] rounded-sm flex items-center gap-1 cursor-pointer">
//             <img src={uploadbulk} alt="Upload Icon" className="w-4 h-4" />
//             Upload Bulk
//           </button>
//           <button className="bg-[#063F6C] p-1.5 text-sm font-semibold text-white rounded-sm flex items-center gap-1 cursor-pointer" >
//             <img src={plusicon} alt="Plus Icon" className="w-4 h-4" />
//             Add Student
//           </button>
//         </div>
//       </div>
//       <div>
//         <StudentTable />
//       </div>
//     </>
//   );
// };

// export default StudentPage;

import React, { useState } from "react";
import uploadbulk from "../../assets/icons/uploadbulk.svg";
import plusicon from "../../assets/icons/plusicon.svg";

import StudentForm from "../../components/admin/Student/StudentForm";
import StudentTable from "../../components/admin/Student/StudentTable";
import UploadBulk from "../../components/admin/Student/UploadBulk";
import UpgradeClass from "../../components/admin/Student/UpgradeClass";

const StudentPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
  const [isUpgradeClassModalOpen, setIsUpgradeClassModelOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleOpenBulkModal = () => setIsBulkModalOpen(true);
  const handleCloseBulkModal = () => setIsBulkModalOpen(false);

  const handleOpenUpgradeClassModel = () => setIsUpgradeClassModelOpen(true);
  const handleCloseUpgradeClassModal = () => setIsUpgradeClassModelOpen(false);

  return (
    <>
      <div className="flex w-full  justify-between items-center md:flex-row md:justify-between p-2 md:py-4 font-primary">
        {/* Header */}
        <h2 className="text-lg   md:text-2xl font-bold text-[#1E293B]  md:mb-0 text-left md:text-left font-primary">
          Student
        </h2>

        {/* Buttons */}
        <div className="flex flex-row md:flex-row gap-1 sm:gap-2 justify-end items-end  md:items-end font-primary">
          <button
            className="bg-[#DFE5EF] p-1 text-xs md:p-1.5 md:text-sm font-semibold text-[#6B7280] rounded-sm flex items-center gap-1 cursor-pointer"
            onClick={handleOpenUpgradeClassModel}
          >
            Upgrade Class
          </button>

          <button
            className="bg-[#DFE5EF] p-1 text-xs md:p-1.5 md:text-sm font-semibold text-[#6B7280] rounded-sm flex items-center gap-1 cursor-pointer"
            onClick={handleOpenBulkModal}
          >
            <img
              src={uploadbulk}
              alt="Upload Icon"
              className="w-3 md:w-4 h-3 md:h-4"
            />
            Upload Bulk
          </button>

          <button
            className="bg-primary p-1 text-xs md:p-1.5 md:text-sm font-semibold text-white rounded-sm flex items-center gap-1 cursor-pointer"
            onClick={handleOpenModal}
          >
            <img
              src={plusicon}
              alt="Plus Icon"
              className="w-3 md:w-4 h-3 md:h-4"
            />
            Add <span className="hidden md:flex">Student</span> 
          </button>
        </div>
      </div>

      <div>
        <StudentTable />
      </div>

      {/* Render modal conditionally */}
      {isModalOpen && <StudentForm onClose={handleCloseModal} />}
      {isBulkModalOpen && <UploadBulk onClose={handleCloseBulkModal} />}
      {isUpgradeClassModalOpen && (
        <UpgradeClass onClose={handleCloseUpgradeClassModal} />
      )}
    </>
  );
};

export default StudentPage;
