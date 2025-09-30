import React from "react";
import TeacherNameCard from "../../components/admin/Teacher/TeacherNameCard";
import TeacherStats from "../../components/admin/Teacher/TeacherStats";
import TeacherTabs from "../../components/admin/Teacher/TeacherTabs";

const TeacherDetail = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">Teacher</h2>
        <button className="text-sm font-semibold px-4 py-1 rounded-md bg-primary text-white">
          Edit Teacher
        </button>
      </div>

      {/* Teacher Info */}
      <div>
        <TeacherNameCard />
        <TeacherStats />
        <TeacherTabs />
      </div>
    </div>
  );
};

export default TeacherDetail;
