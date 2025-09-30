import React, { useState, useRef, useEffect } from "react";
import filter from "../../assets/icons/filters.svg";
import sort from "../../assets/icons/sort2.svg";
import edit from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import view from "../../assets/icons/view.svg";
import sorticon from "../../assets/icons/sorticon.svg"; // ✅ single sort icon
import { useNavigate } from "react-router-dom";
import customers from "../../../src/utils/CustomerData"; // ✅ import data
import CustomerForm from "../../components/superAdmin/Customer/tabs/CustomerForm";
import CustomerTable from "../../components/superAdmin/Customer/CustomerTable";

const SuperAdminCustomer = () => {
  const [openCreate, setOpenCreate] = useState(false);
  // Render sort icon
  const renderSortIcon = (col) => {
    const isActive = sortConfig.key === col;
    const direction = sortConfig.direction;

    return (
      <img
        src={sorticon}
        alt="Sort"
        className={`inline-block w-3 h-3 ml-1 transition-transform duration-200 ${
          isActive
            ? direction === "asc"
              ? "rotate-180"
              : "rotate-0"
            : "opacity-40"
        }`}
      />
    );
  };

  return (
    <>
      <div className="flex justify-between items-center ">
        <h2 className="text-xl font-bold text-[#1E293B] md:text-2xl">
          Customers
        </h2>

        <button
          className="bg-primary px-3 py-1.5 text-xs md:text-base font-semibold text-white rounded-sm"
          onClick={() => setOpenCreate(true)}
        >
          + Add Customer
        </button>
      </div>

      <CustomerTable />

      {openCreate && <CustomerForm onClose={() => setOpenCreate(false)} />}
    </>
  );
};

export default SuperAdminCustomer;

// import React, { useState, useRef, useEffect } from "react";
// import filter from "../../assets/icons/filters.svg";
// import sort from "../../assets/icons/sort2.svg";
// import edit from "../../assets/icons/edit.svg";
// import deleteIcon from "../../assets/icons/delete.svg";
// import view from "../../assets/icons/view.svg";
// import sorticon from "../../assets/icons/sorticon.svg"; // ✅ single sort icon
// import { useNavigate } from "react-router-dom";
// import customers from "../../utils/customerData"; // ✅ import data

// const customerTable = () => {
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const recordsPerPage = 15;

//   const [showFilterMenu, setShowFilterMenu] = useState(false);
//   const [showSortMenu, setShowSortMenu] = useState(false);

//   const [filters, setFilters] = useState({
//     class: "",
//     section: "",
//     gender: "",
//     status: "",
//   });

//   // 🔹 Sorting state
//   const [sortConfig, setSortConfig] = useState({
//     key: null,
//     direction: "asc",
//   });

//   // ✅ Column visibility state
//   const [visibleColumns, setVisibleColumns] = useState({
//     grNo: true,
//     name: true,
//     rollNo: true,
//     class: true,
//     section: true,
//     gender: true,
//     status: true,
//     dateOfJoin: true,
//     schoolname: true,
//     action: true,
//   });

//   const filterRef = useRef(null);
//   const sortRef = useRef(null);

//   const navigate = useNavigate();

//   const handleViewcustomer = (customer) => {
//     navigate(`/customers/${customer.grNo}`, { state: { customer } });
//   };

//   // 🛑 Close dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         filterRef.current &&
//         !filterRef.current.contains(event.target) &&
//         sortRef.current &&
//         !sortRef.current.contains(event.target)
//       ) {
//         setShowFilterMenu(false);
//         setShowSortMenu(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // 🔍 filter customers based on search + filters
//   let filteredcustomers = customers.filter((customer) => {
//     const matchesSearch = Object.values(customer)
//       .join(" ")
//       .toLowerCase()
//       .includes(search.toLowerCase());

//     const matchesClass =
//       filters.class === "" || customer.class === filters.class;

//     const matchesSection =
//       filters.section === "" || customer.section === filters.section;

//     const matchesGender =
//       filters.gender === "" || customer.gender === filters.gender;

//     const matchesStatus =
//       filters.status === "" || customer.status === filters.status;

//     return (
//       matchesSearch &&
//       matchesClass &&
//       matchesSection &&
//       matchesGender &&
//       matchesStatus
//     );
//   });

//   // 🔽 Sorting logic
//   if (sortConfig.key) {
//     filteredcustomers = [...filteredcustomers].sort((a, b) => {
//       let aValue = a[sortConfig.key];
//       let bValue = b[sortConfig.key];

//       // If sorting by date, parse it
//       if (sortConfig.key === "dateOfJoin" || sortConfig.key === "schoolname") {
//         aValue = new Date(aValue);
//         bValue = new Date(bValue);
//       }

//       if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
//       if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
//       return 0;
//     });
//   }

//   // 📄 pagination logic
//   const indexOfLastRecord = currentPage * recordsPerPage;
//   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//   const currentRecords = filteredcustomers.slice(
//     indexOfFirstRecord,
//     indexOfLastRecord
//   );
//   const totalPages = Math.ceil(filteredcustomers.length / recordsPerPage);

//   // ✅ Toggle column visibility
//   const toggleColumn = (col) => {
//     setVisibleColumns((prev) => ({ ...prev, [col]: !prev[col] }));
//   };

//   // 🔹 Sort handler
//   const handleSort = (key) => {
//     setSortConfig((prev) => {
//       if (prev.key === key) {
//         return {
//           key,
//           direction: prev.direction === "asc" ? "desc" : "asc",
//         };
//       }
//       return { key, direction: "asc" };
//     });
//   };

//   // 🔹 Render sort icon
//   const renderSortIcon = (col) => {
//     const isActive = sortConfig.key === col;
//     const direction = sortConfig.direction;

//     return (
//       <img
//         src={sorticon}
//         alt="Sort"
//         className={`inline-block w-3 h-3 ml-1 transition-transform duration-200 ${
//           isActive
//             ? direction === "asc"
//               ? "rotate-180"
//               : "rotate-0"
//             : "opacity-40"
//         }`}
//       />
//     );
//   };

//   return (
//     <div className="flex flex-col mt-4 bg-white shadow-md rounded-md w-full font-primary">
//       {/* Header */}
//       <div className="flex w-full justify-between items-center text-[#1E293B] font-bold border-b border-[#F2F2F2] p-4">
//         <h2>customer Details</h2>
//         <div className="flex gap-4 relative">
//           {/* Search Input */}
//           <input
//             type="text"
//             placeholder="Search"
//             value={search}
//             onChange={(e) => {
//               setSearch(e.target.value);
//               setCurrentPage(1);
//             }}
//             className="border border-[#F2F2F2] px-2.5 rounded-sm placeholder:text-[12px]"
//           />

//           {/* Filter Button + Menu */}
//           <div className="relative" ref={filterRef}>
//             <button
//               onClick={() => {
//                 setShowFilterMenu((prev) => !prev);
//                 setShowSortMenu(false);
//               }}
//               className="bg-primary p-1.5  rounded-sm"
//             >
//               <img src={filter} alt="Filter" className="h-5 " />
//             </button>

//             {/* 🔽 Filter menu same as before (unchanged) */}
//             {showFilterMenu && (
//               <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded shadow-md z-10">
//                 {/* Header */}
//                 <div className="p-4 pb-2">
//                   <h3 className="font-bold text-sm text-[#1E293B]">Filter</h3>
//                 </div>
//                 <div className="w-full border-b border-gray-200"></div>

//                 {/* Row 1 → Class + Section */}
//                 <div className="p-4 pt-3 pb-0">
//                   <div className="grid grid-cols gap-3 mb-3">
//                     {/* Class */}
//                     <div>
//                       <label className="block text-xs font-bold text-[#1E293B]">
//                         Class
//                       </label>
//                       <select
//                         value={filters.class}
//                         onChange={(e) =>
//                           setFilters({ ...filters, class: e.target.value })
//                         }
//                         className="w-full  font-normal border border-gray-300 rounded px-2 py-1 text-xs"
//                       >
//                         <option value="" className="font-normal  text-gray-600">
//                           All
//                         </option>
//                         {[...new Set(customers.map((s) => s.class))].map(
//                           (cls) => (
//                             <option key={cls} value={cls}>
//                               {cls}
//                             </option>
//                           )
//                         )}
//                       </select>
//                     </div>

//                     {/* Section (optional) */}
//                     {/* <div>
//           <label className="block text-xs font-bold text-[#1E293B]">
//             Section
//           </label>
//           <select
//             value={filters.section}
//             onChange={(e) =>
//               setFilters({ ...filters, section: e.target.value })
//             }
//             className="w-full font-normal border border-gray-300 rounded px-2 py-1 text-sm"
//           >
//             <option value="" className="font-normal text-gray-600">All</option>
//             {[...new Set(customers.map((s) => s.section))].map((sec) => (
//               <option key={sec} value={sec}>
//                 {sec}
//               </option>
//             ))}
//           </select>
//         </div> */}
//                   </div>
//                 </div>

//                 {/* Row 2 → Gender + Status */}
//                 <div className="px-4 pt-0">
//                   <div className="grid grid-cols-2 gap-3 mb-4">
//                     {/* Gender */}
//                     <div>
//                       <label className="block text-xs font-bold text-[#1E293B]">
//                         Gender
//                       </label>
//                       <select
//                         value={filters.gender}
//                         onChange={(e) =>
//                           setFilters({ ...filters, gender: e.target.value })
//                         }
//                         className="w-full font-normal border border-gray-300 rounded px-2 py-1 text-xs"
//                       >
//                         <option value="">All</option>
//                         {[...new Set(customers.map((s) => s.gender))].map(
//                           (gen) => (
//                             <option key={gen} value={gen}>
//                               {gen}
//                             </option>
//                           )
//                         )}
//                       </select>
//                     </div>

//                     {/* Status */}
//                     <div>
//                       <label className="block text-xs font-bold text-[#1E293B]">
//                         Status
//                       </label>
//                       <select
//                         value={filters.status}
//                         onChange={(e) =>
//                           setFilters({ ...filters, status: e.target.value })
//                         }
//                         className="w-full font-normal border border-gray-300 rounded px-2 py-1 text-xs"
//                       >
//                         <option value="">All</option>
//                         {[...new Set(customers.map((s) => s.status))].map(
//                           (stat) => (
//                             <option key={stat} value={stat}>
//                               {stat}
//                             </option>
//                           )
//                         )}
//                       </select>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Actions */}
//                 <div className="w-full border-t border-gray-200"></div>
//                 <div className="p-4 flex justify-end gap-2">
//                   <button
//                     className="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
//                     onClick={() => {
//                       setFilters({
//                         class: "",
//                         section: "",
//                         gender: "",
//                         status: "",
//                       });
//                       setShowFilterMenu(false);
//                     }}
//                   >
//                     Reset
//                   </button>
//                   <button
//                     className="px-3 py-1 text-xs bg-primary text-white rounded cursor-pointer"
//                     onClick={() => {
//                       setCurrentPage(1); // reset pagination on filter apply
//                       setShowFilterMenu(false);
//                     }}
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Column Manager Button */}
//           <div className="relative" ref={sortRef}>
//             <button
//               onClick={() => {
//                 setShowSortMenu((prev) => !prev);
//                 setShowFilterMenu(false);
//               }}
//               className="bg-primary p-1.5 rounded-sm"
//             >
//               <img src={sort} alt="Columns" className="h-5" />
//             </button>

//             {showSortMenu && (
//               <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded shadow-md z-10">
//                 {/* Header */}
//                 <div className="p-4 pb-2">
//                   <h3 className="font-semibold text-sm text-[#1E293B]">
//                     Manage Columns
//                   </h3>
//                 </div>
//                 <div className="w-full border-b border-gray-200"></div>

//                 {/* Column Options */}
//                 <div className="p-4 pt-3 pb-0">
//                   <div className="grid grid-cols-2 gap-2 text-sm">
//                     {Object.keys(visibleColumns).map((col) => (
//                       <label key={col} className="flex items-center gap-2">
//                         <input
//                           type="checkbox"
//                           checked={visibleColumns[col]}
//                           onChange={() => toggleColumn(col)}
//                           className="accent-[#126F77]"
//                         />
//                         {col.charAt(0).toUpperCase() + col.slice(1)}
//                       </label>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Footer with Actions */}
//                 <div className="w-full border-t border-gray-200 mt-4"></div>
//                 <div className="p-4 flex justify-end gap-2">
//                   <button
//                     className="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
//                     onClick={() => {
//                       // Reset all columns to visible
//                       const resetColumns = {};
//                       Object.keys(visibleColumns).forEach((col) => {
//                         resetColumns[col] = true;
//                       });
//                       setVisibleColumns(resetColumns);
//                       setShowSortMenu(false);
//                     }}
//                   >
//                     Reset
//                   </button>
//                   <button
//                     className="px-3 py-1 text-xs bg-primary text-white rounded cursor-pointer"
//                     onClick={() => setShowSortMenu(false)}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Table */}
//       <table className="mt-4 w-full">
//         <thead>
//           <tr className="border-b border-[#F2F2F2] text-primary text-sm">
//             <th className="p-2 text-center">
//               <input type="checkbox" className="accent-[#126F77]" />
//             </th>
//             {visibleColumns.grNo && (
//               <th className="cursor-pointer" onClick={() => handleSort("grNo")}>
//                 G.R. No. {renderSortIcon("grNo")}
//               </th>
//             )}
//             {visibleColumns.name && (
//               <th className="cursor-pointer" onClick={() => handleSort("name")}>
//                 Name {renderSortIcon("name")}
//               </th>
//             )}
//             {visibleColumns.rollNo && <th>Roll No</th>}
//             {visibleColumns.class && <th>Class</th>}
//             {visibleColumns.section && <th>Section</th>}
//             {visibleColumns.gender && <th>Gender</th>}
//             {visibleColumns.status && <th>Status</th>}
//             {visibleColumns.dateOfJoin && (
//               <th
//                 className="cursor-pointer"
//                 onClick={() => handleSort("dateOfJoin")}
//               >
//                 Date of Joining {renderSortIcon("dateOfJoin")}
//               </th>
//             )}
//             {visibleColumns.schoolname && (
//               <th className="cursor-pointer" onClick={() => handleSort("schoolname")}>
//                 schoolname {renderSortIcon("schoolname")}
//               </th>
//             )}
//             {visibleColumns.action && <th>Action</th>}
//           </tr>
//         </thead>
//         <tbody>
//           {currentRecords.length > 0 ? (
//             currentRecords.map((customer) => (
//               <tr
//                 key={customer.grNo}
//                 className="border-b border-[#F2F2F2] text-sm"
//               >
//                 <td className="text-left p-2">
//                   <input type="checkbox" className="accent-[#126F77]" />
//                 </td>
//                 {visibleColumns.grNo && (
//                   <td className="text-left p-2">{customer.grNo}</td>
//                 )}
//                 {visibleColumns.name && (
//                   <td className="text-left">{customer.name}</td>
//                 )}
//                 {visibleColumns.rollNo && (
//                   <td className="text-left">{customer.rollNo}</td>
//                 )}
//                 {visibleColumns.class && (
//                   <td className="text-left">{customer.class}</td>
//                 )}
//                 {visibleColumns.section && (
//                   <td className="text-left">{customer.section}</td>
//                 )}
//                 {visibleColumns.gender && (
//                   <td className="text-left">{customer.gender}</td>
//                 )}
//                 {visibleColumns.status && (
//                   <td className="text-left">
//                     <span
//                       className={`px-2 py-1 rounded text-xs font-medium ${
//                         customer.status === "Active"
//                           ? "bg-green-100 text-green-600"
//                           : "bg-red-100 text-red-600"
//                       }`}
//                     >
//                       {customer.status}
//                     </span>
//                   </td>
//                 )}
//                 {visibleColumns.dateOfJoin && (
//                   <td className="text-left">{customer.dateOfJoin}</td>
//                 )}
//                 {visibleColumns.schoolname && (
//                   <td className="text-left">{customer.schoolname}</td>
//                 )}
//                 {visibleColumns.action && (
//                   <td className="flex justify-center gap-2 p-2">
//                     <button onClick={() => handleViewcustomer(customer)}>
//                       <img
//                         src={view}
//                         alt="View"
//                         className="w-5 h-5 cursor-pointer"
//                       />
//                     </button>
//                     <button>
//                       <img
//                         src={edit}
//                         alt="Edit"
//                         className="w-5 h-5 cursor-pointer"
//                       />
//                     </button>
//                     <button>
//                       <img
//                         src={deleteIcon}
//                         alt="Delete"
//                         className="w-5 h-5 cursor-pointer"
//                       />
//                     </button>
//                   </td>
//                 )}
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="11" className="text-center text-gray-500 py-4">
//                 No customers found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       <div className="flex justify-between items-center p-4">
//         <button
//           disabled={currentPage === 1}
//           onClick={() => setCurrentPage((prev) => prev - 1)}
//           className={`px-3 py-1 rounded ${
//             currentPage === 1
//               ? "bg-gray-200 text-gray-500 cursor-not-allowed"
//               : "bg-[#063F6C] text-white"
//           }`}
//         >
//           Prev
//         </button>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           disabled={currentPage === totalPages}
//           onClick={() => setCurrentPage((prev) => prev + 1)}
//           className={`px-3 py-1 rounded ${
//             currentPage === totalPages
//               ? "bg-gray-200 text-gray-500 cursor-not-allowed"
//               : "bg-[#063F6C] text-white"
//           }`}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default customerTable;
