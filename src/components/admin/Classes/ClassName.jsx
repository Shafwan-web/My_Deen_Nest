import React from "react";
import { useParams } from "react-router-dom";
import classesData from "../../../utils/classData";

const ClassName = () => {
  const { classname } = useParams(); // comes from URL
  const cls = classesData.find((c) => c.className === classname);

  if (!cls) return <p>Class not found</p>;

  return (
    <div className="w-full">
      <div className="relative bg-primary text-white py-4 px-6 rounded-md shadow-md w-full">
        <h1 className="text-2xl font-bold">{cls.className}</h1>
        <p className="text-sm text-gray-200 mt-1">{cls.description}</p>
      </div>
    </div>
  );
};

export default ClassName;
