// FeesCollectionModal.jsx
import React from "react";

const FeesCollectionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Modal box */}
      <div className="bg-white w-[700px] max-h-[90vh] rounded-lg shadow-2xl overflow-y-auto border">
        {/* Header */}
        <div className="flex justify-between items-center border-b px-4 py-3 sticky top-0 bg-white z-10">
          <h2 className="text-lg font-semibold">Fee Collection</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-4 py-3 space-y-4">
          {/* Class & Student */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium">Class</label>
              <select className="w-full border rounded px-2 py-1 text-sm">
                <option>Select Class</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Student</label>
              <select className="w-full border rounded px-2 py-1 text-sm">
                <option>Select Student</option>
              </select>
            </div>
          </div>

          {/* Year */}
          <div>
            <label className="text-sm font-medium">Year</label>
            <select className="w-full border rounded px-2 py-1 text-sm">
              <option>Select Year</option>
            </select>
          </div>

          {/* Required Fees + Select Month in one row */}
          <div className="grid grid-cols-2 gap-4">
            {/* Required Fees */}
            <div>
              <h3 className="font-semibold text-sm mb-2">Required Fees</h3>
              <div className="flex justify-between text-sm">
                <span>Monthly Fee (per month)</span>
                <span>₹300</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Other Requirement Fees</span>
                <span>₹100</span>
              </div>
            </div>

            {/* Select Month */}
            <div>
              <h3 className="font-semibold text-sm mb-2">Select Month</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((m, i) => (
                  <label key={i} className="flex items-center gap-1">
                    <input type="checkbox" className="w-3 h-3" />
                    {m}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Optional Fee */}
          <div>
            <h3 className="font-semibold text-sm mb-2">Optional Fee</h3>
            <div className="flex justify-between items-center border rounded p-2">
              <span className="text-sm">Tuition Fee</span>
              <span className="text-sm">₹100</span>
            </div>
            <button className="text-primary text-sm mt-2">+ Add More</button>
          </div>

          {/* Discount */}
          <div>
            <h3 className="font-semibold text-sm mb-2">Discount</h3>
            <div className="flex gap-2">
              <select className="flex-1 border rounded px-2 py-1 text-sm">
                <option>Select discount</option>
              </select>
              <input
                type="number"
                placeholder="Amount"
                className="w-24 border rounded px-2 py-1 text-sm"
              />
            </div>
          </div>

          {/* Extra Fee */}
          <div>
            <h3 className="font-semibold text-sm mb-2">Extra Fee</h3>
            <div className="flex gap-2">
              <select className="flex-1 border rounded px-2 py-1 text-sm">
                <option>Select extra fee</option>
              </select>
              <input
                type="number"
                placeholder="Amount"
                className="w-24 border rounded px-2 py-1 text-sm"
              />
            </div>
            <button className="text-primary text-sm mt-2">+ Add More</button>
          </div>

          {/* Fee Summary */}
          <div className="border rounded p-3 text-sm space-y-1">
            <h3 className="font-semibold mb-1">Fee Summary</h3>
            <div className="flex justify-between">
              <span>Monthly Fee (4 Months)</span>
              <span>₹1,200</span>
            </div>
            <div className="flex justify-between">
              <span>Other required Fees</span>
              <span>₹100</span>
            </div>
            <div className="flex justify-between">
              <span>Tuition Fee</span>
              <span>₹100</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Final Total Amount</span>
              <span>₹1,400</span>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="border rounded p-3 text-sm space-y-1">
            <h3 className="font-semibold mb-1">Payment Summary</h3>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹1,400</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Discount Applied</span>
              <span>-₹200</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Final Total Amount</span>
              <span>₹1,200</span>
            </div>
          </div>

          {/* Payment Method */}
          <div className="grid grid-cols-2 gap-2">
            <select className="border rounded px-2 py-1 text-sm">
              <option>Select Method</option>
            </select>
            <input
              type="text"
              placeholder="Transaction/reference number"
              className="border rounded px-2 py-1 text-sm"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t bg-white sticky bottom-0">
          <button className="w-full bg-primary text-white rounded py-2 font-semibold">
            + Generate Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeesCollectionModal;
