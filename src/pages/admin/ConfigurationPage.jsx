import React from "react";
import { useNavigate } from "react-router-dom";
import StudentFormConfigurations from "../../components/admin/Configuration/StudentFormConfigurations";
import TeacherFormConfigurations from "../../components/admin/Configuration/TeacherFormConfigurations";

const ConfigurationPage = () => {
  const navigate = useNavigate();

  // Click handler
  const handleRedirect = () => {
    navigate("/configuration/student-form");
  };

  return (
    <div>
      <h2>Configuration</h2>
      <div className="grid grid-cols-3 gap-8 font-primary">
        {/* Pass onClick to each card */}
        <div onClick={handleRedirect} className="cursor-pointer">
          <StudentFormConfigurations />
        </div>

        <div onClick={handleRedirect} className="cursor-pointer">
          <StudentFormConfigurations />
        </div>

        <div onClick={handleRedirect} className="cursor-pointer">
          <StudentFormConfigurations />
        </div>

        <div onClick={handleRedirect} className="cursor-pointer">
          <TeacherFormConfigurations />
        </div>

        <div onClick={handleRedirect} className="cursor-pointer">
          <TeacherFormConfigurations />
        </div>
        <div onClick={handleRedirect} className="cursor-pointer">
          <TeacherFormConfigurations />
        </div>
      </div>
    </div>
  );
};

export default ConfigurationPage;
