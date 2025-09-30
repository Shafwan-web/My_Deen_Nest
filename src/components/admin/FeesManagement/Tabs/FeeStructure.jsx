import React from "react";
import { Edit, Trash } from "lucide-react";

const feeData = [
  {
    title: "Admission Fee",
    type: "One time",
    mandatory: true,
    amount: "₹3,000",
    students: 28,
    dueDate: "N/A",
    late: "0%",
    applicableClasses: [
      "Hifz ul Quran - A",
      "Nazra Quran - B",
      "Arabic Grammar - A",
      "Islamic Studies - C",
      "Hadith Studies - A",
    ],
  },
  {
    title: "Monthly Tuition Fee",
    type: "Monthly",
    mandatory: true,
    amount: "₹3,000",
    students: 35,
    dueDate: "5th of Month",
    late: "5%",
    applicableClasses: [
      "Hifz ul Quran - A",
      "Nazra Quran - B",
      "Arabic Grammar - A",
      "Islamic Studies - C",
      "Hadith Studies - A",
    ],
  },
  {
    title: "Quarterly Examination Fee",
    type: "Quarterly",
    mandatory: true,
    amount: "₹3,000",
    students: 78,
    dueDate: "5th of Month",
    late: "5%",
    applicableClasses: [
      "Hifz ul Quran - A",
      "Nazra Quran - B",
      "Arabic Grammar - A",
      "Islamic Studies - C",
      "Hadith Studies - A",
    ],
  },
];

const FeeStructure = () => {
  return (
    <div className="p-6 bg-white rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Fee Structure</h2>
        <button className="bg-teal-700 text-white px-4 py-2 rounded-md text-sm">
          + Add Fee category
        </button>
      </div>

      {feeData.map((fee, idx) => (
        <div
          key={idx}
          className="border border-primary rounded-lg p-5 mb-4 shadow-sm bg-white"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{fee.title}</h3>
              <div className="flex gap-2 mt-1">
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
                  {fee.type}
                </span>
                {fee.mandatory && (
                  <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                    Mandatory
                  </span>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              <button className="text-gray-500 hover:text-blue-600">
                <Edit size={18} />
              </button>
              <button className="text-gray-500 hover:text-red-600">
                <Trash size={18} />
              </button>
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-4 gap-4 mt-4 text-sm">
            <div>
              <p className="text-gray-500">Amount</p>
              <p className="font-medium">{fee.amount}</p>
            </div>
            <div>
              <p className="text-gray-500">Student</p>
              <p className="font-medium">{fee.students}</p>
            </div>
            <div>
              <p className="text-gray-500">Due Date</p>
              <p className="font-medium">{fee.dueDate}</p>
            </div>
            <div>
              <p className="text-gray-500">Late</p>
              <p className="font-medium">{fee.late}</p>
            </div>
          </div>

          {/* Classes */}
          <div className="mt-4">
            <p className="text-gray-500 text-sm mb-2">Applicable Classes</p>
            <div className="flex flex-wrap gap-2">
              {fee.applicableClasses.map((cls, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {cls}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeeStructure;
