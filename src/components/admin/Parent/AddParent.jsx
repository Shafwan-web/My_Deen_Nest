import React, { useState, useEffect } from "react";

const AddParent = ({ onClose, onSave }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Close modal on ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    onSave({
      name,
      email,
      phone,
    });

    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-40"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="bg-white rounded-md min-w-[450px] shadow-lg relative z-10">
        <div className="p-4 border-b border-[#F2F2F2]">
          <h2 className="text-base font-bold">Add New Parent</h2>
          <p className="text-xs">Fill in the details to add a parent</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Parent Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Parent Name"
              className="w-full border rounded px-2 py-1 text-sm"
              required
            />
          </div>

          {/* Email + Phone in one row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="w-full border rounded px-2 py-1 text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Phone Number"
                className="w-full border rounded px-2 py-1 text-sm"
                required
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 rounded bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 bg-primary text-white rounded hover:bg-primary/90"
            >
              Add Parent
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddParent;
