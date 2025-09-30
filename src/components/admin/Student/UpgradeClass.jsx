import React from "react";
import { X } from "lucide-react";

const UpgradeClass = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-3">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-40"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-lg p-8 z-10 font-primary w-full max-w-md">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <h2 className="text-xl font-bold text-[#000000] mb-4">
          Upgrade Class
        </h2>
        <hr className="border-gray-300 mb-6" />

        {/* Dropdowns Row */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Current Class
            </label>
            <select className="w-full border border-gray-300 rounded px-3 py-2">
              <option value="">Select</option>
              <option value="1">Class 1</option>
              <option value="2">Class 2</option>
              <option value="3">Class 3</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Upgrade To
            </label>
            <select className="w-full border border-gray-300 rounded px-3 py-2">
              <option value="">Select</option>
              <option value="2">Class 2</option>
              <option value="3">Class 3</option>
              <option value="4">Class 4</option>
            </select>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-sm"
          >
            Cancel
          </button>
          <button className="px-4 py-2 rounded-md bg-primary text-white text-sm">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpgradeClass;
