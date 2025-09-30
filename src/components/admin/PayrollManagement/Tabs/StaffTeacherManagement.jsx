import React, { useState, useRef, useEffect } from "react";
import filter from "../../../../assets/icons/filter.svg";
import sort from "../../../../assets/icons/sort2.svg";
import edit from "../../../../assets/icons/edit.svg";
import deleteIcon from "../../../../assets/icons/delete.svg";
import view from "../../../../assets/icons/view.svg";
import sorticon from "../../../../assets/icons/sorticon.svg";
import lessthan from "../../../../assets/icons/lessthan.svg";
import greaterthan from "../../../../assets/icons/greaterthan.svg";
import staffData from "../../../../utils/staffData";


const StaffTeacherManagement = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);

  const [filters, setFilters] = useState({
    department: "",
    paymentStatus: "",
  });

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  const [visibleColumns, setVisibleColumns] = useState({
    name: true,
    roll: true,
    department: true,
    baseSalary: true,
    totalSalary: true,
    paymentStatus: true,
    actions: true,
  });

  const filterRef = useRef(null);
  const sortRef = useRef(null);

  // 🛑 Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target) &&
        sortRef.current &&
        !sortRef.current.contains(event.target)
      ) {
        setShowFilterMenu(false);
        setShowSortMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔍 filter staff based on search + filters
  let filteredStaff = staffData.filter((staff) => {
    const matchesSearch = Object.values(staff)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDept =
      filters.department === "" || staff.department === filters.department;

    const matchesPayment =
      filters.paymentStatus === "" ||
      staff.paymentStatus === filters.paymentStatus;

    return matchesSearch && matchesDept && matchesPayment;
  });

  // 🔽 Sorting logic
  if (sortConfig.key) {
    filteredStaff = [...filteredStaff].sort((a, b) => {
      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];

      if (typeof aValue === "string") {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }

  // 📄 Pagination
  const totalEntries = filteredStaff.length;
  const totalPages = Math.ceil(totalEntries / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredStaff.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  // ✅ Toggle column visibility
  const toggleColumn = (col) => {
    setVisibleColumns((prev) => ({ ...prev, [col]: !prev[col] }));
  };

  // 🔹 Sort handler
  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return {
          key,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key, direction: "asc" };
    });
  };

  // 🔹 Render sort icon
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
    <div className="flex flex-col mt-4 bg-white shadow-md rounded-md w-full font-primary">
      {/* Header */}
      <div className="flex w-full justify-between items-center text-[#1E293B] font-bold border-b border-[#F2F2F2] p-4">
        <h2>Staff & Teacher Management</h2>
        <div className="flex gap-4 relative">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="border border-[#F2F2F2] px-2.5 rounded-sm placeholder:text-[12px]"
          />

          {/* Filter Button */}
          <div className="relative" ref={filterRef}>
            <button
              onClick={() => {
                setShowFilterMenu((prev) => !prev);
                setShowSortMenu(false);
              }}
              className="bg-primary p-1.5 rounded-sm"
            >
              <img src={filter} alt="Filter" className="h-5 " />
            </button>

            {showFilterMenu && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded shadow-md z-10 p-4">
                <h3 className="font-semibold text-sm mb-3">Filter Staff</h3>

                {/* Department Filter */}
                <div className="mb-2">
                  <label className="block text-xs font-medium text-gray-600">
                    Department
                  </label>
                  <select
                    value={filters.department}
                    onChange={(e) =>
                      setFilters({ ...filters, department: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                  >
                    <option value="">All</option>
                    {[...new Set(staffData.map((s) => s.department))].map(
                      (dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      )
                    )}
                  </select>
                </div>

                {/* Payment Status Filter */}
                <div className="mb-2">
                  <label className="block text-xs font-medium text-gray-600">
                    Payment Status
                  </label>
                  <select
                    value={filters.paymentStatus}
                    onChange={(e) =>
                      setFilters({ ...filters, paymentStatus: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                  >
                    <option value="">All</option>
                    {[...new Set(staffData.map((s) => s.paymentStatus))].map(
                      (status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Column Manager Button */}
          <div className="relative" ref={sortRef}>
            <button
              onClick={() => {
                setShowSortMenu((prev) => !prev);
                setShowFilterMenu(false);
              }}
              className="bg-primary p-1.5 rounded-sm"
            >
              <img src={sort} alt="Columns" className="h-5" />
            </button>

            {showSortMenu && (
              <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded shadow-md z-10 p-4">
                <h3 className="font-semibold text-sm mb-3">Manage Columns</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {Object.keys(visibleColumns).map((col) => (
                    <label key={col} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={visibleColumns[col]}
                        onChange={() => toggleColumn(col)}
                      />
                      {col.charAt(0).toUpperCase() + col.slice(1)}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Table */}
      <table className="mt-4 w-full">
        <thead>
          <tr className="border-b border-[#F2F2F2] text-primary text-sm">
            {visibleColumns.name && (
              <th
                className="cursor-pointer"
                onClick={() => handleSort("name")}
              >
                Name {renderSortIcon("name")}
              </th>
            )}
            {visibleColumns.roll && (
              <th className="cursor-pointer" onClick={() => handleSort("roll")}>
                Roll {renderSortIcon("roll")}
              </th>
            )}
            {visibleColumns.department && (
              <th
                className="cursor-pointer"
                onClick={() => handleSort("department")}
              >
                Department {renderSortIcon("department")}
              </th>
            )}
            {visibleColumns.baseSalary && (
              <th
                className="cursor-pointer"
                onClick={() => handleSort("baseSalary")}
              >
                Base Salary {renderSortIcon("baseSalary")}
              </th>
            )}
            {visibleColumns.totalSalary && (
              <th
                className="cursor-pointer"
                onClick={() => handleSort("totalSalary")}
              >
                Total Salary {renderSortIcon("totalSalary")}
              </th>
            )}
            {visibleColumns.paymentStatus && <th>Payment Status</th>}
            {visibleColumns.actions && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {currentRecords.length > 0 ? (
            currentRecords.map((staff, index) => (
              <tr
                key={index}
                className="border-b border-[#F2F2F2] text-sm text-center"
              >
                {visibleColumns.name && <td>{staff.name}</td>}
                {visibleColumns.roll && <td>{staff.roll}</td>}
                {visibleColumns.department && <td>{staff.department}</td>}
                {visibleColumns.baseSalary && <td>₹{staff.baseSalary}</td>}
                {visibleColumns.totalSalary && <td>₹{staff.totalSalary}</td>}
                {visibleColumns.paymentStatus && (
                  <td>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        staff.paymentStatus === "Paid"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {staff.paymentStatus}
                    </span>
                  </td>
                )}
                {visibleColumns.actions && (
                  <td className="flex justify-center gap-2 p-2">
                    <button>
                      <img
                        src={view}
                        alt="View"
                        className="w-5 h-5 cursor-pointer"
                      />
                    </button>
                    <button>
                      <img
                        src={edit}
                        alt="Edit"
                        className="w-5 h-5 cursor-pointer"
                      />
                    </button>
                    <button>
                      <img
                        src={deleteIcon}
                        alt="Delete"
                        className="w-5 h-5 cursor-pointer"
                      />
                    </button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center text-gray-500 py-4">
                No staff found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center p-4 text-sm">
        <div>
          Showing {indexOfFirstRecord + 1} to{" "}
          {Math.min(indexOfLastRecord, totalEntries)} of {totalEntries} entries
        </div>

        <div className="flex items-center gap-2">
          <select
            value={recordsPerPage}
            onChange={(e) => {
              setRecordsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border rounded px-1 py-1"
          >
            {[5, 10, 15, 25, 50].map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <span>Per Page</span>

          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={`border border-[#F2F2F2] rounded ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <img src={lessthan} alt="" />
          </button>

          <input
            type="text"
            value={currentPage}
            onChange={(e) => {
              let page = e.target.value.replace(/\D/g, "");
              page = page ? Number(page) : 1;
              if (page > totalPages) page = totalPages;
              if (page < 1) page = 1;
              setCurrentPage(page);
            }}
            className="h-7 w-8 text-center border border-[#F2F2F2] rounded"
          />

          <span>of {totalPages}</span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`border border-[#F2F2F2] rounded ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <img src={greaterthan} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffTeacherManagement;
