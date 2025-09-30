import React, { useState } from "react";

import edit from "../../../assets/icons/edit.svg";

import deleteicon from "../../../assets/icons/delete.svg";
import filter from "../../../assets/icons/filter.svg";

const ReviewManagementTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const reviews = [
    {
      id: 1,
      student: "Ahmed Khan",
      maulana: "Maulana Rashid",
      review: "Excellent performance in Quran recitation.",
    },
    {
      id: 2,
      student: "Fatima Ali",
      maulana: "Admin",
      review: "Needs improvement in tajweed.",
    },
    {
      id: 3,
      student: "Omar Siddiqui",
      maulana: "Maulana Kareem",
      review: "Very attentive in class.",
    },
    {
      id: 4,
      student: "Ayesha Noor",
      maulana: "Admin",
      review: "Good understanding of lessons.",
    },
  ];

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(reviews.map((r) => r.id));
    }
    setSelectAll(!selectAll);
  };

  const handleRowSelect = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow font-primary">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Review Management</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="border rounded px-3 py-1 text-sm"
          />
          <img src={filter} alt="" className="bg-primary p-2 rounded" />
        </div>
      </div>

      {/* Action bar */}
      {selectedRows.length > 0 && (
        <div className="flex items-center gap-4 mb-3">
          <select className="border rounded px-2 py-1 text-sm">
            <option>Action</option>
            <option>Edit</option>
            <option>Delete</option>
          </select>
          <span className="text-sm text-gray-600">
            {selectedRows.length} Selected
          </span>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-[#F2F2F2] text-gray-600 bg-gray-50 text-left text-primary">
              <th className="px-4 py-2">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="accent-[#126F77]"
                />
              </th>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Student</th>
              <th className="px-4 py-2">Admin/Maulana</th>
              <th className="px-4 py-2">Review</th>
              <th className="px-4 py-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((r) => (
              <tr
                key={r.id}
                className="border-b border-[#F2F2F2] hover:bg-gray-50 transition text-gray-800"
              >
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(r.id)}
                    onChange={() => handleRowSelect(r.id)}
                    className="accent-[#126F77]"
                  />
                </td>
                <td className="px-4 py-2">{r.id}</td>
                <td className="px-4 py-2">{r.student}</td>
                <td className="px-4 py-2">{r.maulana}</td>
                <td className="px-4 py-2">{r.review}</td>
                <td className="px-4 py-2 text-center flex gap-3 justify-center">
                  <button>
                    <img src={edit} alt="" className="h-4 w-4" />
                  </button>
                  <button>
                    <img src={deleteicon} alt="" className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <span>
          Showing 1 to {reviews.length} of {reviews.length} entries
        </span>
        <div className="flex items-center gap-2">
          <select className="border rounded px-2 py-1 text-sm">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <span>Per Page</span>
          <button className="px-2 py-1 border rounded">{"<"}</button>
          <span>1</span>
          <button className="px-2 py-1 border rounded">{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewManagementTable;
