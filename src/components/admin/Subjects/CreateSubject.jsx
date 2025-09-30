import { X } from "lucide-react";
import React, { useState, useEffect } from "react";

const CreateSubject = ({ onClose, onSave }) => {
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [description, setDescription] = useState("");

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !className) return;

    onSave({
      name,
      className,
      description,
    });

    // Reset
    setName("");
    setClassName("");
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
        <div className="p-4 border-b flex justify-between border-[#F2F2F2]">
          <h2 className="text-base font-bold">Create New Subject</h2>
           <X onClick={onClose} className="text-[#999999]"/>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Subject Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Subject Name"
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
              required
            />
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
              placeholder="Brief description of the class"
            ></textarea>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1  rounded bg-gray-300 "
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 bg-primary text-white rounded hover:bg-primary/90"
            >
              Create Subject
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSubject;
