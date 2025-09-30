import React, { useState, useRef, useEffect } from "react";
import filter from "../../../../assets/icons/filters.svg";
import sort from "../../../../assets/icons/sort2.svg";
import edit from "../../../../assets/icons/edit.svg";
import deleteIcon from "../../../../assets/icons/delete.svg";
import view from "../../../../assets/icons/view.svg";
import sorticon from "../../../../assets/icons/sorticon.svg";
import lessthan from "../../../../assets/icons/lessthan.svg";
import greaterthan from "../../../../assets/icons/greaterthan.svg";
import { useNavigate } from "react-router-dom";
import feesData from "../../../../utils/feesData"; 


const StudentFees = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);

  const [filters, setFilters] = useState({
    class: "",
    status: "",
  });

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  const [visibleColumns, setVisibleColumns] = useState({
    grNo: true,
    student: true,
    class: true,
    totalFee: true,
    paid: true,
    pending: true,
    status: true,
    dueDate: true,
    action: true,
  });

  const filterRef = useRef(null);
  const sortRef = useRef(null);
  const navigate = useNavigate();

  // close dropdowns
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(e.target) &&
        sortRef.current &&
        !sortRef.current.contains(e.target)
      ) {
        setShowFilterMenu(false);
        setShowSortMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleView = (student) => {
    navigate(`/fees/${student.grNo}`, { state: { student } });
  };

  // filter data
  let filtered = feesData.filter((s) => {
    const matchesSearch = Object.values(s)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesClass = filters.class === "" || s.class === filters.class;
    const matchesStatus = filters.status === "" || s.status === filters.status;

    return matchesSearch && matchesClass && matchesStatus;
  });

  // sort
  if (sortConfig.key) {
    filtered = [...filtered].sort((a, b) => {
      let aVal = a[sortConfig.key];
      let bVal = b[sortConfig.key];

      if (sortConfig.key === "dueDate") {
        aVal = new Date(aVal);
        bVal = new Date(bVal);
      }

      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }

  // pagination
  const totalEntries = filtered.length;
  const totalPages = Math.ceil(totalEntries / recordsPerPage);
  const indexOfLast = currentPage * recordsPerPage;
  const indexOfFirst = indexOfLast - recordsPerPage;
  const currentRecords = filtered.slice(indexOfFirst, indexOfLast);

  const toggleColumn = (col) => {
    setVisibleColumns((prev) => ({ ...prev, [col]: !prev[col] }));
  };

  const handleSort = (key) => {
    setSortConfig((prev) =>
      prev.key === key
        ? { key, direction: prev.direction === "asc" ? "desc" : "asc" }
        : { key, direction: "asc" }
    );
  };

  const renderSortIcon = (col) => {
    const isActive = sortConfig.key === col;
    const dir = sortConfig.direction;
    return (
      <img
        src={sorticon}
        alt="sort"
        className={`inline-block w-3 h-3 ml-1 ${
          isActive ? (dir === "asc" ? "rotate-180" : "rotate-0") : "opacity-40"
        }`}
      />
    );
  };

  return (
    <div className="flex flex-col mt-4 bg-white shadow-md rounded-md w-full font-primary">
      {/* header */}
      <div className="flex justify-between items-center p-4 border-b border-primary">
        <h2 className="font-bold text-[#1E293B]">Student Fees</h2>

        <div className="flex gap-4">
          {/* search */}
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="border px-2.5 rounded-sm placeholder:text-xs"
          />

          {/* filter */}
          <div className="relative" ref={filterRef}>
            <button
              onClick={() => {
                setShowFilterMenu((p) => !p);
                setShowSortMenu(false);
              }}
              className="bg-primary p-1.5 rounded-sm"
            >
              <img src={filter} alt="filter" className="h-5" />
            </button>

            {showFilterMenu && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-primary rounded shadow-md z-10 p-4">
                <h3 className="font-semibold text-sm mb-3">Filter Fees</h3>

                {/* class filter */}
                <div className="mb-2">
                  <label className="text-xs">Class</label>
                  <select
                    value={filters.class}
                    onChange={(e) =>
                      setFilters({ ...filters, class: e.target.value })
                    }
                    className="w-full border rounded px-2 py-1 text-sm"
                  >
                    <option value="">All</option>
                    {[...new Set(feesData.map((s) => s.class))].map((cls) => (
                      <option key={cls}>{cls}</option>
                    ))}
                  </select>
                </div>

                {/* status filter */}
                <div className="mb-2">
                  <label className="text-xs">Status</label>
                  <select
                    value={filters.status}
                    onChange={(e) =>
                      setFilters({ ...filters, status: e.target.value })
                    }
                    className="w-full border rounded px-2 py-1 text-sm"
                  >
                    <option value="">All</option>
                    {[...new Set(feesData.map((s) => s.status))].map((st) => (
                      <option key={st}>{st}</option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setFilters({ class: "", status: "" })}
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

          {/* column manager */}
          <div className="relative" ref={sortRef}>
            <button
              onClick={() => {
                setShowSortMenu((p) => !p);
                setShowFilterMenu(false);
              }}
              className="bg-primary p-1.5 rounded-sm"
            >
              <img src={sort} alt="columns" className="h-5" />
            </button>

            {showSortMenu && (
              <div className="absolute right-0 mt-2 w-72 bg-white border border-primary rounded shadow-md z-10 p-4">
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
                        grNo: true,
                        student: true,
                        class: true,
                        totalFee: true,
                        paid: true,
                        pending: true,
                        status: true,
                        dueDate: true,
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

      {/* table */}
      <table className="mt-4 w-full">
        <thead>
          <tr className="border-b border-primary text-primary text-sm">
            <th className="p-2 text-center">
              <input type="checkbox" className="accent-[#126F77]" />
            </th>
            {visibleColumns.grNo && (
              <th onClick={() => handleSort("grNo")} className="cursor-pointer">
                G.R.No {renderSortIcon("grNo")}
              </th>
            )}
            {visibleColumns.student && (
              <th
                onClick={() => handleSort("student")}
                className="cursor-pointer"
              >
                Student {renderSortIcon("student")}
              </th>
            )}
            {visibleColumns.class && <th>Class</th>}
            {visibleColumns.totalFee && <th>Total Fee</th>}
            {visibleColumns.paid && <th>Paid</th>}
            {visibleColumns.pending && <th>Pending</th>}
            {visibleColumns.status && <th>Status</th>}
            {visibleColumns.dueDate && (
              <th
                onClick={() => handleSort("dueDate")}
                className="cursor-pointer"
              >
                Due Date {renderSortIcon("dueDate")}
              </th>
            )}
            {visibleColumns.action && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {currentRecords.length > 0 ? (
            currentRecords.map((s) => (
              <tr key={s.grNo} className="border-b border-primary text-sm">
                <td className="text-center p-2">
                  <input type="checkbox" className="accent-[#126F77]" />
                </td>
                {visibleColumns.grNo && (
                  <td className="text-center">{s.grNo}</td>
                )}
                {visibleColumns.student && (
                  <td
                    className="text-center hover:text-blue-600 cursor-pointer"
                    onClick={() => handleView(s)}
                  >
                    {s.student}
                  </td>
                )}
                {visibleColumns.class && (
                  <td className="text-center">{s.class}</td>
                )}
                {visibleColumns.totalFee && (
                  <td className="text-center">₹ {s.totalFee}</td>
                )}
                {visibleColumns.paid && (
                  <td className="text-green-600 text-center">₹ {s.paid}</td>
                )}
                {visibleColumns.pending && (
                  <td className="text-red-600 text-center">₹ {s.pending}</td>
                )}
                {visibleColumns.status && (
                  <td className="text-center">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        s.status === "Paid"
                          ? "bg-green-100 text-green-600"
                          : s.status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {s.status}
                    </span>
                  </td>
                )}
                {visibleColumns.dueDate && (
                  <td className="text-center">{s.dueDate}</td>
                )}
                {visibleColumns.action && (
                  <td className="flex justify-center gap-2 p-2">
                    <button onClick={() => handleView(s)}>
                      <img src={view} alt="view" className="w-5 h-5" />
                    </button>
                    <button>
                      <img src={edit} alt="edit" className="w-5 h-5" />
                    </button>
                    <button>
                      <img src={deleteIcon} alt="delete" className="w-5 h-5" />
                    </button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center py-4 text-gray-500">
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* pagination */}
      <div className="flex justify-between items-center p-4 text-sm">
        <div>
          Showing {indexOfFirst + 1} to {Math.min(indexOfLast, totalEntries)} of{" "}
          {totalEntries} entries
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
            {[10, 15, 25, 50].map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <span>Per Page</span>

          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={`border rounded ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <img src={lessthan} alt="prev" />
          </button>

          <input
            type="text"
            value={currentPage}
            onChange={(e) => {
              let p = e.target.value.replace(/\D/g, "");
              p = p ? Number(p) : 1;
              if (p > totalPages) p = totalPages;
              if (p < 1) p = 1;
              setCurrentPage(p);
            }}
            className="h-7 w-8 text-center border rounded"
          />

          <span>of {totalPages}</span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`border rounded ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <img src={greaterthan} alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentFees;
