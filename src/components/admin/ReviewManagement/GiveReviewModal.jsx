import React from "react";

const GiveReviewModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[28rem] shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Give Review</h3>

        {/* Row 1: Class + Maulana */}
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Class</label>
            <select className="w-full border rounded p-2 text-sm">
              <option value="">Select Class</option>
              <option value="Class 1">Class 1</option>
              <option value="Class 2">Class 2</option>
              <option value="Class 3">Class 3</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Maulana</label>
            <select className="w-full border rounded p-2 text-sm">
              <option value="">Select Maulana</option>
              <option value="Maulana Rashid">Maulana Rashid</option>
              <option value="Maulana Kareem">Maulana Kareem</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </div>

        {/* Row 2: Student */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Student</label>
          <select className="w-full border rounded p-2 text-sm">
            <option value="">Select Student</option>
            <option value="Ahmed Khan">Ahmed Khan</option>
            <option value="Fatima Ali">Fatima Ali</option>
            <option value="Omar Siddiqui">Omar Siddiqui</option>
            <option value="Ayesha Noor">Ayesha Noor</option>
          </select>
        </div>

        {/* Row 3: Review */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Review</label>
          <textarea
            placeholder="Write your review..."
            className="w-full border rounded p-2 text-sm h-24"      
          ></textarea>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-3 py-1 border rounded text-gray-600"
          >
            Cancel
          </button>
          <button className="px-3 py-1 bg-primary text-white rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiveReviewModal;
