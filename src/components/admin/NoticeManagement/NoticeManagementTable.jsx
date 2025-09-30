import React, { useState } from "react";

import edit from "../../../assets/icons/edit.svg";
import deleteicon from "../../../assets/icons/delete.svg";
import filter from "../../../assets/icons/delete.svg";

const NoticeManagementTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const notices = [
    {
      id: 1,
      name: "Admin",
      to: "All Students",
      notice: "School will remain closed tomorrow due to holiday.",
      status: "Active",
    },
    {
      id: 2,
      name: "Principal",
      to: "Class 10",
      notice: "Final exam schedule has been published.",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Teacher - Mr. Khan",
      to: "Parents",
      notice: "Parent-teacher meeting scheduled for next week.",
      status: "Active",
    },
    {
      id: 4,
      name: "Sports Coordinator",
      to: "All Students",
      notice: "Sports Day practice starts from Monday.",
      status: "Active",
    },
  ];

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(notices.map((n) => n.id));
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
        <h2 className="text-lg font-semibold">Notice Management</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="border rounded px-3 py-1 text-sm"
          />
          <img
            src={filter}
            alt=""
            className="bg-primary p-2 rounded cursor-pointer"
          />
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
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">To</th>
              <th className="px-4 py-2">Notice</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((n) => (
              <tr
                key={n.id}
                className="border-b border-[#F2F2F2] hover:bg-gray-50 transition text-gray-800"
              >
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(n.id)}
                    onChange={() => handleRowSelect(n.id)}
                    className="accent-[#126F77]"
                  />
                </td>
                <td className="px-4 py-2">{n.name}</td>
                <td className="px-4 py-2">{n.to}</td>
                <td className="px-4 py-2">{n.notice}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      n.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {n.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-center flex gap-3 justify-center">
                  <button>
                    <img src={edit} alt="edit" className="h-4 w-4" />
                  </button>
                  <button>
                    <img src={deleteicon} alt="delete" className="h-4 w-4" />
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
          Showing 1 to {notices.length} of {notices.length} entries
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

export default NoticeManagementTable;
