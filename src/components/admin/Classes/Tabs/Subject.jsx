// // components/tabs/Subject.jsx
// import React, { useState } from "react";
// import Edit from "/edit.svg";
// import Delete from "/delete.svg";

// const Subject = () => {
//   const [subjects, setSubjects] = useState([
//     { id: 1, name: "Quran", maulana: "Jacob Jones", time: "9:00 to 10:00", description: "Lorem ipsum" },
//     { id: 2, name: "Arabi A", maulana: "Courtney Henry", time: "9:00 to 10:00", description: "Lorem ipsum" },
//     { id: 3, name: "Tarb A", maulana: "Marvin McKinney", time: "9:00 to 10:00", description: "Lorem ipsum" },
//     { id: 4, name: "Tarb B", maulana: "Leslie Alexander", time: "9:00 to 10:00", description: "Lorem ipsum" },
//     { id: 5, name: "Quran B", maulana: "Ralph Edwards", time: "9:00 to 10:00", description: "Lorem ipsum" },
//     { id: 6, name: "Arabi A", maulana: "Theresa Webb", time: "9:00 to 10:00", description: "Lorem ipsum" },
//     { id: 7, name: "Arabi B", maulana: "Guy Hawkins", time: "9:00 to 10:00", description: "Lorem ipsum" },
//     { id: 8, name: "Quran A", maulana: "Floyd Miles", time: "9:00 to 10:00", description: "Lorem ipsum" },
//     { id: 9, name: "Quran C", maulana: "Wade Warren", time: "9:00 to 10:00", description: "Lorem ipsum" },
//     { id: 10, name: "Tarb C", maulana: "Courtney Henry", time: "9:00 to 10:00", description: "Lorem ipsum" },
//     { id: 11, name: "Arabi C", maulana: "Robert Fox", time: "9:00 to 10:00", description: "Lorem ipsum" },
//   ]);

//   return (
//     <div className="overflow-x-auto font-primary">
//       <table className="w-full border-collapse text-sm">
//         <thead>
//           <tr className="border-b border-primary text-center">
//             <th className="px-4 py-2">
//               <input type="checkbox" className="accent-[#126F77]" />
//             </th>
//             <th className="px-4 py-2 text-primary">Subject Name</th>
//             <th className="px-4 py-2 text-primary">Maulana</th>
//             <th className="px-4 py-2 text-primary">Time</th>
//             <th className="px-4 py-2 text-primary">Description</th>
//             <th className="px-4 py-2 text-primary">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {subjects.map((subj) => (
//             <tr key={subj.id} className="border-b border-primary text-center">
//               <td className="px-4 py-2">
//                 <input type="checkbox" className="accent-[#126F77]" />
//               </td>
//               <td className="px-4 py-2">{subj.name}</td>
//               <td className="px-4 py-2">{subj.maulana}</td>
//               <td className="px-4 py-2">{subj.time}</td>
//               <td className="px-4 py-2">{subj.description}</td>
//               <td className="px-4 py-2 flex gap-2 justify-center items-center">
//                 <button className="bg-primary text-white text-xs px-3 py-1 rounded hover:bg-teal-700 cursor-pointer">
//                   Attendance
//                 </button>
//                 <button className="text-[#6B7280] cursor-pointer">
//                   <img src={Edit} alt="edit" className="h-4 w-4 " />
//                 </button>
//                 <button className=" cursor-pointer">
//                   <img src={Delete} alt="delete" className="h-4 w-4" />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       <div className="flex justify-between items-center mt-4 text-sm">
//         <p>Showing 1 to 10 of {subjects.length} entries</p>
//         <div className="flex items-center gap-2">
//           <select className="border rounded px-2 py-1">
//             <option>10</option>
//             <option>25</option>
//             <option>50</option>
//           </select>
//           <span>Per Page</span>
//           <button className="px-2 py-1 border rounded">&lt;</button>
//           <span>6</span>
//           <button className="px-2 py-1 border rounded">&gt;</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Subject;

// components/tabs/Subject.jsx
import React, { useState } from "react";
import Edit from "../../../../assets/icons/edit.svg";
import Delete from "../../../../assets/icons/delete.svg";
import lessthan from "../../../../assets/icons/lessthan.svg";
import greaterthan from "../../../../assets/icons/greaterthan.svg";

const Subject = () => {
  const [subjects, setSubjects] = useState([
    {
      id: 1,
      name: "Quran",
      maulana: "Jacob Jones",
      time: "9:00 to 10:00",
      description: "Lorem ipsum dolor",
    },
    {
      id: 2,
      name: "Arabi A",
      maulana: "Courtney Henry",
      time: "9:00 to 10:00",
      description: "Lorem ipsum",
    },
    {
      id: 3,
      name: "Tarb A",
      maulana: "Marvin McKinney",
      time: "9:00 to 10:00",
      description: "Lorem ipsum",
    },
    {
      id: 4,
      name: "Tarb B",
      maulana: "Leslie Alexander",
      time: "9:00 to 10:00",
      description: "Lorem ipsum",
    },
    {
      id: 5,
      name: "Quran B",
      maulana: "Ralph Edwards",
      time: "9:00 to 10:00",
      description: "Lorem ipsum",
    },
    {
      id: 6,
      name: "Arabi A",
      maulana: "Theresa Webb",
      time: "9:00 to 10:00",
      description: "Lorem ipsum",
    },
    {
      id: 7,
      name: "Arabi B",
      maulana: "Guy Hawkins",
      time: "9:00 to 10:00",
      description: "Lorem ipsum",
    },
    {
      id: 8,
      name: "Quran A",
      maulana: "Floyd Miles",
      time: "9:00 to 10:00",
      description: "Lorem ipsum",
    },
    {
      id: 9,
      name: "Quran C",
      maulana: "Wade Warren",
      time: "9:00 to 10:00",
      description: "Lorem ipsum",
    },
    {
      id: 10,
      name: "Tarb C",
      maulana: "Courtney Henry",
      time: "9:00 to 10:00",
      description: "Lorem ipsum",
    },
    {
      id: 11,
      name: "Arabi C",
      maulana: "Robert Fox",
      time: "9:00 to 10:00",
      description: "Lorem ipsum",
    },
  ]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [viewMode, setViewMode] = useState("table");
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);

  const totalEntries = subjects.length;
  const totalPages = Math.ceil(totalEntries / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = subjects.slice(indexOfFirstRecord, indexOfLastRecord);

  // Single select toggle
  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  // Select All toggle
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(subjects.map((s) => s.id));
    } else {
      setSelected([]);
    }
  };

  return (
    <div className="overflow-x-auto font-primary">
      {/* Bulk Actions bar */}
      {/* {selected.length > 0 && (
        <div className="flex justify-between items-center bg-gray-100 border p-2 rounded mb-3 text-sm">
          <p>{selected.length} selected</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600">
              Bulk Edit
            </button>
            <button className="px-3 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600">
              Delete Selected
            </button>
          </div>
        </div>
      */}

      {selected.length > 0 && (
        <div className="flex items-center gap-4 p-3 text-sm border-b border-[#F2F2F2]">
          <select className="border rounded px-2 py-1 text-sm">
            <option>Action</option>
            <option>Delete</option>
            <option>Edit</option>
          </select>
          <span>{selected.length} Selected</span>
        </div>
      )}
      <div className="w-full overflow-x-auto custom-scrollbar">
        <table className="w-full border-collapse text-sm sm:text-base  whitespace-nowrap min-w-[500px]">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50 text-primary text-sm sm:text-base">
              <th className="p-2 text-center w-10">
                <input
                  type="checkbox"
                  className="accent-[#126F77]"
                  onChange={handleSelectAll}
                  checked={selected.length === subjects.length}
                />
              </th>
              <th className="p-2 text-left">Subject Name</th>
              <th className="p-2 text-left">Maulana</th>
              <th className="p-2 text-left">Time</th>
              <th className="p-2 text-left">Description</th>
              <th className="p-2 text-center w-36">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((subj) => (
              <tr
                key={subj.id}
                className={`border-b border-gray-100 hover:bg-gray-50 text-xs sm:text-base ${
                  selected.includes(subj.id) ? "bg-teal-50" : ""
                }`}
              >
                <td className="p-2 text-center">
                  <input
                    type="checkbox"
                    className="accent-[#126F77]"
                    checked={selected.includes(subj.id)}
                    onChange={() => handleSelect(subj.id)}
                  />
                </td>
                <td className="p-2 text-left font-medium hover:text-blue-600 cursor-pointer">
                  {subj.name}
                </td>
                <td className="p-2 text-left">{subj.maulana}</td>
                <td className="p-2 text-left">{subj.time}</td>
                <td className="p-2 text-left text-gray-600 truncate max-w-xs">
                  {subj.description}
                </td>
                <td className="p-2 text-center">
                  <div className="flex justify-center gap-2">
                    <button className="bg-primary text-white text-xs px-3 py-1 rounded hover:bg-teal-700 transition">
                      Attendance
                    </button>
                    <button className="text-[#6B7280] hover:scale-110 transition">
                      <img src={Edit} alt="edit" className="h-4 w-4" />
                    </button>
                    <button className="hover:scale-110 transition">
                      <img src={Delete} alt="delete" className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col-reverse gap-3 sm:flex-row justify-between items-center p-4 text-xs md:text-sm">
        {/* Left side: showing info */}
        <div className="whitespace-nowrap">
          <span className="whitespace-nowrap">
            Showing {indexOfFirstRecord + 1}
          </span>{" "}
          to {Math.min(indexOfLastRecord, totalEntries)} of {totalEntries}{" "}
          entries
          {totalEntries !== subjects.length && (
            <span className="text-gray-500 ml-1">
              (filtered from {subjects.length} total entries)
            </span>
          )}
        </div>

        {/* Right side: controls */}
        <div className="flex items-center w-full sm:justify-end justify-center gap-2 md:gap-2 p-0 md:p-2">
          {/* Per Page Dropdown */}
          <select
            value={recordsPerPage}
            onChange={(e) => {
              setRecordsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="pr-1 py-0 px-2 h-8 border border-[#F2F2F2] rounded"
          >
            {[10, 15, 25, 50].map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <span className="whitespace-nowrap pl-1">Per Page</span>

          {/* Prev Button */}
          <div
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={`border border-[#F2F2F2] rounded ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <button
              className="border border-[#F2F2F2] rounded flex items-center justify-center 
             w-8 h-8 md:w-8 md:h-8 
             hover:bg-gray-100 transition"
            >
              <img src={lessthan} alt="Prev" />
            </button>
          </div>

          {/* Page Input */}
          <input
            type="text"
            value={currentPage}
            onChange={(e) => {
              let page = e.target.value.replace(/\D/g, ""); // remove non-numeric chars
              page = page ? Number(page) : 1;
              if (page > totalPages) page = totalPages;
              if (page < 1) page = 1;
              setCurrentPage(page);
            }}
            className="h-8 w-8 text-center border border-[#F2F2F2] rounded"
          />

          <span>of {totalPages}</span>

          {/* Next Button */}
          <div
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`border border-[#F2F2F2] rounded ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <button
              className="border border-[#F2F2F2] rounded flex items-center justify-center 
             w-8 h-8 md:w-9 md:h-9  
             hover:bg-gray-100 transition"
            >
              <img src={greaterthan} alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subject;
