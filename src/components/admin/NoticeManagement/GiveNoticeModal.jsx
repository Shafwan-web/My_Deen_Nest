import React, { useState } from "react";

const GiveNoticeModal = ({ onClose }) => {
  const [audience, setAudience] = useState("All");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Active");
  const [notice, setNotice] = useState("");

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      {/* Modal Box */}
      <div className="bg-white p-6 rounded-lg w-[32rem] shadow-lg">
        {/* Title */}
        <h3 className="text-lg font-semibold mb-6">Add Notice</h3>

        {/* Audience (Radio buttons row) */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Audience</label>
          <div className="flex gap-6">
            {["All", "Student", "Teacher", "Staff"].map((option) => (
              <label key={option} className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  value={option}
                  checked={audience === option}
                  onChange={(e) => setAudience(e.target.value)}
                  className="accent-primary"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Name + Status */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              className="w-full border rounded p-2 text-sm"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border rounded p-2 text-sm"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        {/* Notice */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Notice</label>
          <textarea
            value={notice}
            onChange={(e) => setNotice(e.target.value)}
            placeholder="Write the notice details here..."
            className="w-full border rounded p-2 text-sm h-28"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded text-gray-600 text-sm font-medium"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-primary text-white rounded text-sm font-medium">
            Save Notice
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiveNoticeModal;
 