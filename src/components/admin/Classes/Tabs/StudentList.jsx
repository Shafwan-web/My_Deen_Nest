// // components/tabs/StudentList.jsx
// import React, { useState } from "react";
// import Edit from "/edit.svg";
// import Delete from "/delete.svg";
// import SortIcon from "/sorticon.svg";

// const StudentList = () => {
//   const [students, setStudents] = useState([
//     { id: 647, name: "Jacob Jones", status: "Active", attendance: 85 },
//     { id: 540, name: "Courtney Henry", status: "Inactive", attendance: 85 },
//     { id: 600, name: "Marvin McKinney", status: "Active", attendance: 85 },
//     { id: 994, name: "Leslie Alexander", status: "Active", attendance: 85 },
//     { id: 583, name: "Ralph Edwards", status: "Active", attendance: 85 },
//     { id: 556, name: "Theresa Webb", status: "Active", attendance: 85 },
//     { id: 877, name: "Guy Hawkins", status: "Active", attendance: 85 },
//     { id: 536, name: "Floyd Miles", status: "Active", attendance: 85 },
//     { id: 185, name: "Wade Warren", status: "Inactive", attendance: 85 },
//     { id: 703, name: "Courtney Henry", status: "Active", attendance: 85 },
//     { id: 883, name: "Robert Fox", status: "Active", attendance: 85 },
//   ]);

//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

//   const handleSort = (key) => {
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({ key, direction });

//     const sorted = [...students].sort((a, b) => {
//       if (key === "id") {
//         return direction === "asc" ? a.id - b.id : b.id - a.id;
//       } else if (key === "name") {
//         return direction === "asc"
//           ? a.name.localeCompare(b.name)
//           : b.name.localeCompare(a.name);
//       }
//       return 0;
//     });

//     setStudents(sorted);
//   };

//   return (
//     <div className="overflow-x-auto font-primary">
//       <table className="w-full  border-collapse text-sm">
//         <thead>
//           <tr className="border-b border-primary text-center">
//             <th className="px-4 py-2">
//               <input type="checkbox" className="accent-[#126F77]" />
//             </th>
//             {/* Sortable G.R. No. */}
//             <th
//               className="px-4 py-2 text-primary  cursor-pointer select-none"
//               onClick={() => handleSort("id")}
//             >
//               <div className="flex justify-center items-center gap-1">
//                 G.R. No.
//                 <img
//                   src={SortIcon}
//                   alt="sort"
//                   className={`h-3 w-3 transition-transform ${
//                     sortConfig.key === "id" && sortConfig.direction === "desc"
//                       ? "rotate-180"
//                       : ""
//                   }`}
//                 />
//               </div>
//             </th>
//             {/* Sortable Name */}
//             <th
//               className="px-4 py-2 text-primary cursor-pointer select-none"
//               onClick={() => handleSort("name")}
//             >
//               <div className="flex items-center gap-1 justify-center">
//                 Name
//                 <img
//                   src={SortIcon}
//                   alt="sort"
//                   className={`h-3 w-3 text-red-400 transition-transform ${
//                     sortConfig.key === "name" && sortConfig.direction === "desc"
//                       ? "rotate-180"
//                       : ""
//                   }`}
//                 />
//               </div>
//             </th>
//             <th className="px-4 py-2 text-primary">Status</th>
//             <th className="px-4 py-2 text-primary">Attendance</th>
//             <th className="px-4 py-2 text-primary">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((s) => (
//             <tr key={s.id} className="border-b border-primary text-center">
//               <td className="px-4 py-2">
//                 <input type="checkbox" className="accent-[#126F77]" />
//               </td>
//               <td className="px-4 py-2 ">{s.id}</td>
//               <td className="px-4 py-2">{s.name}</td>
//               <td className="px-4 py-2">
//                 <span
//                   className={`px-2 py-1 rounded text-xs font-medium ${
//                     s.status === "Active"
//                       ? "bg-green-100 text-green-700"
//                       : "bg-red-100 text-red-700"
//                   }`}
//                 >
//                   {s.status}
//                 </span>
//               </td>
//               <td className="px-4 py-2 w-40">
//                 <div className="flex items-center">
//                   <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
//                     <div
//                       className="bg-teal-600 h-2 rounded-full"
//                       style={{ width: `${s.attendance}%` }}
//                     ></div>
//                   </div>
//                   <span className="text-xs">{s.attendance}%</span>
//                 </div>
//               </td>
//               <td className="px-4 py-2 flex gap-2 justify-center items-center">
//                 <button className="text-blue-500 hover:text-blue-700">
//                   <img src={Edit} alt="edit" className="h-4 w-4" />
//                 </button>
//                 <button className="text-red-500 hover:text-red-700">
//                   <img src={Delete} alt="delete" className="h-4 w-4" />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       <div className="flex justify-between items-center mt-4 text-sm">
//         <p>Showing 1 to 10 of {students.length} entries</p>
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

// export default StudentList;

// components/tabs/StudentList.jsx
import React, { useState } from "react";
import Edit from "../../../../assets/icons/edit.svg";
import Delete from "../../../../assets/icons/delete.svg";
import SortIcon from "../../../../assets/icons/sorticon.svg";
import lessthan from "../../../../assets/icons/lessthan.svg";
import greaterthan from "../../../../assets/icons/greaterthan.svg";
const StudentList = () => {
  const [students, setStudents] = useState([
    { id: 647, name: "Jacob Jones", status: "Active", attendance: 85 },
    { id: 540, name: "Courtney Henry", status: "Inactive", attendance: 85 },
    { id: 600, name: "Marvin McKinney", status: "Active", attendance: 85 },
    { id: 994, name: "Leslie Alexander", status: "Active", attendance: 85 },
    { id: 583, name: "Ralph Edwards", status: "Active", attendance: 85 },
    { id: 556, name: "Theresa Webb", status: "Active", attendance: 85 },
    { id: 877, name: "Guy Hawkins", status: "Active", attendance: 85 },
    { id: 536, name: "Floyd Miles", status: "Active", attendance: 85 },
    { id: 185, name: "Wade Warren", status: "Inactive", attendance: 85 },
    { id: 703, name: "Courtney Henry", status: "Active", attendance: 85 },
    { id: 883, name: "Robert Fox", status: "Active", attendance: 85 },
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

  const totalEntries = students.length;
  const totalPages = Math.ceil(totalEntries / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = students.slice(indexOfFirstRecord, indexOfLastRecord);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sorted = [...students].sort((a, b) => {
      if (key === "id") {
        return direction === "asc" ? a.id - b.id : b.id - a.id;
      } else if (key === "name") {
        return direction === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      return 0;
    });

    setStudents(sorted);
  };

  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(students.map((s) => s.id));
    } else {
      setSelected([]);
    }
  };

  return (
    <div className="overflow-x-auto font-primary">
      {/* Action bar */}
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

      {/* Table */}
      <div className="w-full overflow-x-auto custom-scrollbar">
        <table className="w-full  min-w-[800px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-gray-200 text-primary text-left bg-gray-50 text-sm sm:text-base">
              <th className="p-2 text-center w-10">
                <input
                  type="checkbox"
                  className="accent-[#126F77]"
                  onChange={handleSelectAll}
                  checked={selected.length === students.length}
                />
              </th>
              <th
                className="p-2 cursor-pointer select-none"
                onClick={() => handleSort("id")}
              >
                <div className="flex items-center gap-1">
                  G.R. No.
                  <img
                    src={SortIcon}
                    alt="sort"
                    className={`h-3 w-3 transition-transform ${
                      sortConfig.key === "id" && sortConfig.direction === "desc"
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </div>
              </th>
              <th
                className="p-2 cursor-pointer select-none"
                onClick={() => handleSort("name")}
              >
                <div className="flex items-center gap-1">
                  Name
                  <img
                    src={SortIcon}
                    alt="sort"
                    className={`h-3 w-3 transition-transform ${
                      sortConfig.key === "name" &&
                      sortConfig.direction === "desc"
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </div>
              </th>
              <th className="p-2">Status</th>
              <th className="p-2 w-50">Attendance</th>
              <th className="p-2 text-center w-38">Action</th>
            </tr>
          </thead>

          <tbody>
            {currentRecords.map((s) => (
              <tr
                key={s.id}
                className={`border-b border-gray-100 hover:bg-gray-50 text-xs sm:text-base ${
                  selected.includes(s.id) ? "bg-teal-50" : ""
                }`}
              >
                <td className="p-2 text-center">
                  <input
                    type="checkbox"
                    className="accent-[#126F77]"
                    checked={selected.includes(s.id)}
                    onChange={() => handleSelect(s.id)}
                  />
                </td>
                <td className="p-2">{s.id}</td>
                <td className="p-2 font-medium text-gray-700">{s.name}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      s.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {s.status}
                  </span>
                </td>
                <td className="p-2 w-20">
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                      <div
                        className="bg-teal-600 h-2 rounded-full"
                        style={{ width: `${s.attendance}%` }}
                      ></div>
                    </div>
                    <span className="text-xs">{s.attendance}%</span>
                  </div>
                </td>
                <td className="p-2 text-center">
                  <div className="flex justify-center gap-2">
                    <button className="hover:scale-110 transition">
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
          {totalEntries !== students.length && (
            <span className="text-gray-500 ml-1">
              (filtered from {students.length} total entries)
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

export default StudentList;
