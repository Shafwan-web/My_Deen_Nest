import React, { useState } from "react";
import view from "../../../../assets/icons/view.svg";
import edit from "../../../../assets/icons/edit.svg";
import deleteIcon from "../../../../assets/icons/delete.svg";
import paymentData from  "../../../../utils/paymentData"

const Payments = () => {
  const [search, setSearch] = useState("");

  // filter data by search
  const filteredData = paymentData.filter((row) =>
    Object.values(row).join(" ").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col mt-4 bg-white shadow-md rounded-md w-full font-primary">
      {/* header */}
      <div className="flex justify-between items-center p-4 border-b border-primary">
        <h2 className="font-bold text-[#1E293B]">Payment History</h2>

        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-2.5 py-1 rounded-sm placeholder:text-xs"
        />
      </div>

      {/* table */}
      <table className="mt-2 w-full">
        <thead>
          <tr className="border-b border-primary text-primary text-sm bg-gray-50">
            <th className="p-2 text-left">Receipt No.</th>
            <th className="p-2 text-left">Student</th>
            <th className="p-2 text-left">Amount</th>
            <th className="p-2 text-left">Method</th>
            <th className="p-2 text-left">Category</th>
            <th className="p-2 text-left">Date</th>
            <th className="p-2 text-left">Collected By</th>
            <th className="p-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((row) => (
              <tr
                key={row.receiptNo}
                className="border-b border-gray-200 text-sm hover:bg-gray-50"
              >
                <td className="p-2">{row.receiptNo}</td>
                <td className="p-2">{row.student}</td>
                <td className="p-2">₹ {row.amount}</td>
                <td className="p-2">{row.method}</td>
                <td className="p-2">{row.category}</td>
                <td className="p-2">{row.date}</td>
                <td className="p-2">{row.collectedBy}</td>
                <td className="p-2 flex justify-center gap-2">
                  <button>
                    <img src={view} alt="view" className="w-5 h-5" />
                  </button>
                  <button>
                    <img src={edit} alt="edit" className="w-5 h-5" />
                  </button>
                  <button>
                    <img src={deleteIcon} alt="delete" className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="8"
                className="text-center py-4 text-gray-500 text-sm"
              >
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Payments;
