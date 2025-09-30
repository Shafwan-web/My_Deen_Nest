
import React from "react";
import profile from "../../../assets/icons/img.png";

const StudentParents = () => {
  const parents = [
    {
      name: "Dianne Russell",
      relation: "Father",
      phone: "+91 1234567890",
      email: "shafwan@gmail.com",
    },
    {
      name: "Devon Lane",
      relation: "Mother",
      phone: "+91 1234567890",
      email: "shafwan@gmail.com",
    },
    {
      name: "Courtney Henry",
      relation: "Guardian",
      phone: "+91 1234567890",
      email: "shafwan@gmail.com",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white p-4 gap-4 font-primary">
      {parents.map((p, i) => (
        <div
          key={i}
          className="grid grid-cols-3 items-center border border-[#F2F2F2] p-3 rounded-md gap-4"
        >
          {/* Column 1: Profile */}
          <div className="flex gap-2 items-center">
            <img src={profile} alt="" className="h-10 w-10 rounded-md" />
            <div>
              <h2 className="text-sm font-bold text-[#1E293B]">{p.name}</h2>
              <p className="text-xs font-semibold text-[#1E293B]">{p.relation}</p>
            </div>
          </div>

          {/* Column 2: Phone */}
          <div>
            <h2 className="text-xs font-bold text-[#1E293B]">Phone</h2>
            <p className="text-sm font-semibold text-[#1E293B]">{p.phone}</p>
          </div>

          {/* Column 3: Email */}
          <div>
            <h2 className="text-xs font-bold text-[#1E293B]">Email</h2>
            <p className="text-sm font-semibold text-[#1E293B]">{p.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentParents;
