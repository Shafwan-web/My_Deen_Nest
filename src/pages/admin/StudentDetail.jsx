import React, { useState } from "react";
import StudentInfo from "../../components/admin/Student/StudentInfo";
import ContactInfo from "../../components/admin/Student/ContactInfo";
import Transportation from "../../components/admin/Student/Transportation";

import StudentParents from "../../components/admin/Student/StudentParents";
import StudentDocument from "../../components/admin/Student/StudentDocument";
import PreviousSchoolDetail from "../../components/admin/Student/PreviousSchoolDetail";
import BankDetails from "../../components/admin/Student/BankDetails";
import OtherDetail from "../../components/admin/Student/OtherDetail";
import StudentNameCard from "../../components/admin/Student/StudentNameCard";
import StudentStats from "../../components/admin/Student/StudentStats";
import StudentTabs from "../../components/admin/Student/StudentTabs";

const StudentDetail = () => {
  const [activeTab, setActiveTab] = useState("studentDetails"); // default tab

  return (
    <div className="flex flex-col gap-4 font-primary">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">Student</h2>
        <button className="text-sm font-semibold px-4 py-1 rounded-md  bg-primary text-white">
          Edit Student
        </button>
      </div>

      <div>
        <StudentNameCard />
        <StudentStats />
        <StudentTabs />
      </div>
    </div>
  );
};

export default StudentDetail;
