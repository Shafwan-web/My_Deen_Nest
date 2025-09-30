import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ for navigation
import payroll from "../../../../utils/payrollData";
import filter from "../../../../assets/icons/filters.svg";
import sort from "../../../../assets/icons/sort2.svg";
import sorticon from "../../../../assets/icons/sorticon.svg";
import lessthan from "../../../../assets/icons/lessthan.svg";
import greaterthan from "../../../../assets/icons/greaterthan.svg";

const Payroll = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);

  const [filters, setFilters] = useState({
    class: "",
    subject: "",
    status: "",
  });

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  const [visibleColumns, setVisibleColumns] = useState({
    name: true,
    salaryFor: true,
    date: true,
    paymentMethod: true,
    netSalary: true,
    action: true,
  });

  const filterRef = useRef(null);
  const sortRef = useRef(null);

  const navigate = useNavigate(); // ✅ init navigation

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

  // 🔍 Filter teachers
  let filteredTeachers = payroll.filter((payroll) => {
    const matchesSearch = Object.values(payroll)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesClass =
      filters.class === "" || payroll.class === filters.class;

    const matchesSubject =
      filters.subject === "" || payroll.subject === filters.subject;

    const matchesStatus =
      filters.status === "" || payroll.status === filters.status;

    return matchesSearch && matchesClass && matchesSubject && matchesStatus;
  });

  // 🔽 Sorting logic
  if (sortConfig.key) {
    filteredTeachers = [...filteredTeachers].sort((a, b) => {
      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];

      if (sortConfig.key === "dateOfJoin") {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }

      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }

  // 📄 Pagination
  const totalEntries = filteredTeachers.length;
  const totalPages = Math.ceil(totalEntries / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredTeachers.slice(
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
      {/* Header with search + buttons */}
      <div className="flex w-full justify-between items-center text-[#1E293B] font-bold border-b border-[#F2F2F2] p-4">
        <h2>Payroll Details</h2>
        <div className="flex gap-4 relative">
          {/* Search */}
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
              <img src={filter} alt="Filter" className="h-5" />
            </button>

            {showFilterMenu && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded shadow-md z-10 p-4">
                <h3 className="font-semibold text-sm mb-3">Filter Teachers</h3>

                {/* Class Filter */}
                <div className="mb-2">
                  <label className="block text-xs font-medium text-gray-600">
                    Class
                  </label>
                  <select
                    value={filters.class}
                    onChange={(e) =>
                      setFilters({ ...filters, class: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                  >
                    <option value="">All</option>
                    {[...new Set(payroll.map((t) => t.class))].map((cls) => (
                      <option key={cls} value={cls}>
                        {cls}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject Filter */}
                <div className="mb-2">
                  <label className="block text-xs font-medium text-gray-600">
                    Subject
                  </label>
                  <select
                    value={filters.subject}
                    onChange={(e) =>
                      setFilters({ ...filters, subject: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                  >
                    <option value="">All</option>
                    {[...new Set(payroll.map((t) => t.subject))].map((sub) => (
                      <option key={sub} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Status Filter */}
                <div className="mb-2">
                  <label className="block text-xs font-medium text-gray-600">
                    Status
                  </label>
                  <select
                    value={filters.status}
                    onChange={(e) =>
                      setFilters({ ...filters, status: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                  >
                    <option value="">All</option>
                    {[...new Set(payroll.map((t) => t.status))].map((stat) => (
                      <option key={stat} value={stat}>
                        {stat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-end gap-2 mt-3">
                  <button
                    onClick={() =>
                      setFilters({ class: "", subject: "", status: "" })
                    }
                    className="px-3 py-1 text-xs bg-gray-200 rounded"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setShowFilterMenu(false)}
                    className="px-3 py-1 text-xs bg-primary text-white rounded"
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Column Manager */}
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
                <div className="flex justify-end gap-2 mt-3">
                  <button
                    onClick={() =>
                      setVisibleColumns({
                        name: true,
                        salaryfor: true,
                        date: true,
                        paymentMethod: true,
                        netSalary: true,
                        action: true,
                      })
                    }
                    className="px-3 py-1 text-xs bg-gray-200 rounded"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setShowSortMenu(false)}
                    className="px-3 py-1 text-xs bg-primary text-white rounded"
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="px-4 pt-4">
        <select className="border border-[#F2F2F2] rounded px-2 py-1 text-xs w-[120px]">
          <option>Action</option>
          <option>Name</option>
          <option>Date</option>
        </select>
        <button className="px-4 text-xs"> 3 selected</button>
      </div>
      {/* Table */}
      <table className="mt-4 w-full">
        <thead>
          <tr className="border-b border-[#F2F2F2] text-primary text-sm">
            <th className="p-2 text-center">
              <input type="checkbox" className="accent-[#126F77]" />
            </th>
            {visibleColumns.name && (
              <th
                className="cursor-pointer text-start"
                onClick={() => handleSort("name")}
              >
                Name {renderSortIcon("name")}
              </th>
            )}
            {visibleColumns.salaryFor && (
              <th
                className="cursor-pointer text-start"
                onClick={() => handleSort("salaryFor")}
              >
                Salary For {renderSortIcon("salaryFor")}
              </th>
            )}
            {visibleColumns.date && (
              <th
                className="cursor-pointer text-start"
                onClick={() => handleSort("date")}
              >
                Date {renderSortIcon("date")}
              </th>
            )}
            {visibleColumns.paymentMethod && (
              <th
                className="cursor-pointer text-start"
                onClick={() => handleSort("paymentMethod")}
              >
                Payment Method {renderSortIcon("paymentMethod")}
              </th>
            )}
            {visibleColumns.netSalary && (
              <th
                className="cursor-pointer text-start"
                onClick={() => handleSort("netSalary")}
              >
                Net Salary {renderSortIcon("netSalary")}
              </th>
            )}

            {visibleColumns.action && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {currentRecords.length > 0 ? (
            currentRecords.map((payroll) => (
              <tr key={payroll.id} className="border-b border-[#F2F2F2] text-sm hover:bg-gray-50">
                <td className="text-center p-2">
                  <input type="checkbox" className="accent-[#126F77]" />
                </td>
                {visibleColumns.name && (
                  <td className="text-start">{payroll.name}</td>
                )}
                {visibleColumns.salaryFor && (
                  <td className="text-start">{payroll.salaryFor}</td>
                )}
                {visibleColumns.date && (
                  <td className="text-start">{payroll.date}</td>
                )}
                {visibleColumns.paymentMethod && (
                  <td className="text-start">{payroll.paymentMethod}</td>
                )}
                {visibleColumns.netSalary && (
                  <td className="text-start">{payroll.netSalary}</td>
                )}
                {visibleColumns.action && (
                  <td className="flex justify-center gap-2 p-2">
                    <button className="text-white font-semibold text-[12px] leading-[100%] px-1.5 py-2 rounded-[3px] bg-[#126F77] cursor-pointer">
                      View Payslip
                    </button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" className="text-center text-gray-500 py-4">
                No teachers found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center p-4 text-sm">
        {/* Info */}
        <div>
          Showing {indexOfFirstRecord + 1} to{" "}
          {Math.min(indexOfLastRecord, totalEntries)} of {totalEntries} entries
          {totalEntries !== payroll.length && (
            <span className="text-gray-500 ml-1">
              (filtered from {payroll.length} total entries)
            </span>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <select
            value={recordsPerPage}
            onChange={(e) => {
              setRecordsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border rounded px-1 py-1"
          >
            {[5, 10, 20, 50].map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <span>Per Page</span>

          {/* Prev */}
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={` border border-[#F2F2F2] rounded ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <img src={lessthan} alt="" />
          </button>

          {/* Page Input */}
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

          {/* Next */}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={` border border-[#F2F2F2] rounded ${
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

export default Payroll;
