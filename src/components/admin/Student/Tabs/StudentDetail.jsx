import React from "react";
import PersonalInfo from "../PersonalInfo";
import RecentActivity from "../RecentActivity";
import { div } from "framer-motion/client";
import StudentSubPerformance from "../StudentSubPerformance";

const StudentDetail = () => {
  return (
    <div>
      <div className="flex mb-4 flex-col gap-4 md:flex-row font-primary">
        <PersonalInfo />
        <RecentActivity />
        
      </div>
      <div className="">
        <StudentSubPerformance/>
      </div>
    </div>
  );
};

export default StudentDetail;
