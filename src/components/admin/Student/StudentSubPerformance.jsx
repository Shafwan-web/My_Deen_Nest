import React from "react";

const StudentSubPerformance = () => {
  const studentsData = [
    {
      progress: 80,
      subject: "Quraan Memorization",
      maulana: "ahmad xyz",
      id: Date.now() + 1,
    },
    {
      progress: 8,
      subject: "Arabic Grammer",
      maulana: "ahmad xyz",
      id: Date.now() + 2,
    },
    { progress: 80, subject: "Islamic Studies", maulana: "ahmad xyz", id: Date.now() + 3 },
    {
      progress: 80,
      subject: "Tajweed",
      maulana: "ahmad xyz",
      id: Date.now() + 4,
    },
  ];

  return (
    <div className="w-full  bg-white rounded-md">
      <div className=" pt-4 px-6 w-full   font-primary">
        {/* Title */}
        <h2 className="text-base md:text-lg font-bold text-gray-800 ">
          Subject Performance
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  p-4">
        {studentsData.map((item) => (
          <div key={item.id} className="p-4 border border-gray-200 rounded-lg">
            <div className="flex justify-between ">
            <h3 className="font-bold text-sm">{item.subject}</h3>
            <h3 className="font-semibold text-red-700">A+</h3>

            </div>

            {/* Inline progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
              <div
                className="bg-primary h-3 rounded-full"
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>

            <p className="text-sm  font-semibold mt-1">{item.maulana}</p>
            <p className="text-left font-semibold text-xs ">{item.progress}% Progress</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentSubPerformance;
