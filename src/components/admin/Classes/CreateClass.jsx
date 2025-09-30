import { X } from "lucide-react";
import React, { useState, useEffect } from "react";

const CreateClass = ({ onClose, onSave }) => {
  const [className, setClassName] = useState("");
  const [division, setDivision] = useState("");
  const [subject, setSubject] = useState("");
  const [maulana, setMaulana] = useState("");
  const [description, setDescription] = useState("");

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!className || !division || !subject || !maulana) return;

    onSave({
      className,
      division,
      subject,
      maulana,
      description,
    });

    // Reset
    setClassName("");
    setDivision("");
    setSubject("");
    setMaulana("");
    setDescription("");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 font-primary">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-40"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="bg-white rounded-md min-w-[450px] shadow-lg relative z-10">
        <div className="p-4 border-b flex justify-between border-[#F2F2F2]">
          <h2 className="text-base font-bold">Create New Class</h2>
          <X onClick={onClose} className="text-[#999999]" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Class Name + Division */}
          <div className="grid grid-cols-2 gap-4">
            {/* Class Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Class Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
              />
            </div>

            {/* Division */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Division
              </label>
              <select
                value={division}
                onChange={(e) => setDivision(e.target.value)}
                className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                required
              >
                <option value="">Select division</option>
                <option value="A">Division A</option>
                <option value="B">Division B</option>
                <option value="C">Division C</option>
              </select>
            </div>
          </div>

          {/* Subject
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full border rounded px-2 py-1 text-sm"
              required
            >
              <option value="">Select subject</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
              <option value="History">History</option>
            </select>
          </div> */}

          {/* Assign Maulana */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Assign Maulana
            </label>
            <select
              value={maulana}
              onChange={(e) => setMaulana(e.target.value)}
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
              required
            >
              <option value="">Select maulana</option>
              <option value="Maulana A">Maulana A</option>
              <option value="Maulana B">Maulana B</option>
              <option value="Maulana C">Maulana C</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              className="w-full border  border-gray-300 rounded px-2 py-1 text-sm"
              placeholder="Enter description..."
            ></textarea>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 border border-gray-300 rounded text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 bg-primary text-white rounded hover:bg-primary/90"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateClass;
