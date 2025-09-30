import React from "react";

const Reports = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      {["Collection Report", "Fee Report", "Student Report"].map((title, idx) => (
        <div
          key={idx}
          className="flex flex-col flex-1 bg-white p-4 gap-2 rounded-lg"
        >
          <h2 className="text-base font-bold mb-2">{title}</h2>
          <p className="text-sm">Generate detailed {title.toLowerCase()}</p>
          <button className="bg-primary text-white text-sm rounded py-1 w-full">
            Download Report
          </button>
        </div>
      ))}
    </div>
  );
};

export default Reports;
