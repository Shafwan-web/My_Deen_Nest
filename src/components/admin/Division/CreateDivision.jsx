import { X } from "lucide-react";
import React, { useState, useEffect } from "react";

const CreateDivision = ({ onClose, onSave }) => {
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
    <div className="fixed inset-0 flex items-center justify-center z-50 font-primary px-3">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-40"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="bg-white rounded-md min-w-[300px] w-100 shadow-lg relative z-10 ">
        <div className="p-4 border-b border-[#F2F2F2]">
          <div className="flex justify-between">
            <h2 className="text-base font-bold">Create New Division</h2>
            {/* <p className="text-xs">Fill in the details to create a new class</p> */}
            <X onClick={onClose} className="text-[#999999]"/>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Class Name + Division */}
          {/* <div className="grid grid-cols-2 gap-4">Class Name</div> */}

          {/* Subject
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
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
            <label className="block text-sm font-semibold text-black mb-1">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter Division Name"
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
              onChange={(e) => setMaulana(e.target.value)}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-black mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
              placeholder="Enter description..."
            ></textarea>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1  rounded text-primary font-semibold bg-[#DFE5EF]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 bg-primary text-white rounded hover:bg-primary/90 font-semibold"
            >
              Create Division
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDivision;
