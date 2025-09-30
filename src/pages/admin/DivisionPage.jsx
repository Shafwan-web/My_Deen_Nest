import { PlusIcon } from "lucide-react";
import React, { useState } from "react";
import plusicon from "../../../src/assets/icons/plusicon.svg";
import CreateClass from "../../components/admin/Classes/CreateClass";
import CreateDivision from "../../components/admin/Division/CreateDivision";
import DivisionTable from "../../components/admin/Division/DivisionTable";

const DivisionPage = () => {
  const [openCreate, setOpenCreate] = useState(false);

  return (
    <>
      <div className="flex justify-between font-primary">
        <h2 className="text-[#1E293B] text-xl font-extrabold font-primary">
          Division
        </h2>
        <button
          onClick={() => setOpenCreate(true)} // ✅ Open modal
          className="bg-primary p-1.5 text-xs sm:text-sm font-semibold text-white rounded-sm flex items-center gap-1 cursor-pointer"
        >
          <img src={plusicon} alt="Plus Icon" className="w-4 h-4" />
          Create Division
        </button>
      </div>

      <div>
        <DivisionTable />
      </div>

      {/* ✅ Show CreateClass when open */}

      {openCreate && <CreateDivision onClose={() => setOpenCreate(false)} />}
    </>
  );
};

export default DivisionPage;
