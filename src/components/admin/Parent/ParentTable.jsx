import React, { useState, useRef, useEffect } from "react";
import filter from "../../../assets/icons/filters.svg";
import sort from "../../../assets/icons/sort2.svg";
import edit from "../../../assets/icons/edit.svg";
import deleteIcon from "../../../assets/icons/delete.svg";
import view from "../../../assets/icons/view.svg";
import sorticon from "../../../assets/icons/sorticon.svg";
import { useNavigate } from "react-router-dom";
import parents from "../../../utils/parentData"; 
import lessthan from "../../../assets/icons/lessthan.svg";
import greaterthan from "../../../assets/icons/greaterthan.svg";


const ParentTable = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(15);

  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);

  // Sorting state
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  // Column visibility
  const [visibleColumns, setVisibleColumns] = useState({
    id: true,
    parentName: true,
    phone: true,
    email: true,
    child: true,
    action: true,
  });

  const filterRef = useRef(null);
  const sortRef = useRef(null);

  const navigate = useNavigate();

  const handleViewParent = (parent) => {
    navigate(`/parents/${parent.id}`, { state: { parent } });
  };

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

  // 🔍 Filter parents by search
  let filteredParents = parents.filter((parent) => {
    const matchesSearch = Object.values(parent)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesSearch;
  });

  // 🔽 Sorting logic
  if (sortConfig.key) {
    filteredParents = [...filteredParents].sort((a, b) => {
      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];

      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }

  // 📄 pagination
  const totalEntries = filteredParents.length;
  const totalPages = Math.ceil(totalEntries / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredParents.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  // ✅ Toggle column
  const toggleColumn = (col) => {
    setVisibleColumns((prev) => ({ ...prev, [col]: !prev[col] }));
  };

  // Sort handler
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

  // Sort icon
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
        <h2>Parent Details</h2>
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

          {/* Filter */}
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
                <h3 className="font-semibold text-sm mb-3">Filter Parents</h3>
                <p className="text-xs text-gray-500">
                  (No specific filters added yet)
                </p>
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
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Table */}
      <table className="mt-4 w-full">
        <thead>
          <tr className="border-b border-[#F2F2F2] text-primary text-sm">
            <th className="p-2 text-center">
              <input type="checkbox" className="accent-[#126F77]" />
            </th>
            {visibleColumns.id && (
              <th className="cursor-pointer" onClick={() => handleSort("id")}>
                ID {renderSortIcon("id")}
              </th>
            )}
            {visibleColumns.parentName && (
              <th
                className="cursor-pointer"
                onClick={() => handleSort("parentName")}
              >
                Parent Name {renderSortIcon("parentName")}
              </th>
            )}
            {visibleColumns.phone && (
              <th className="cursor-pointer" onClick={() => handleSort("phone")}>
                Phone {renderSortIcon("phone")}
              </th>
            )}
            {visibleColumns.email && (
              <th className="cursor-pointer" onClick={() => handleSort("email")}>
                Email {renderSortIcon("email")}
              </th>
            )}
            {visibleColumns.child && <th>Child</th>}
            {visibleColumns.action && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {currentRecords.length > 0 ? (
            currentRecords.map((parent) => (
              <tr
                key={parent.id}
                className="border-b border-[#F2F2F2] text-sm"
              >
                <td className="text-center p-2">
                  <input type="checkbox" className="accent-[#126F77]" />
                </td>
                {visibleColumns.id && (
                  <td className="text-center p-2">{parent.id}</td>
                )}
                {visibleColumns.parentName && (
                  <td
                    className="text-center hover:text-blue-600 cursor-pointer"
                    onClick={() => handleViewParent(parent)}
                  >
                    {parent.parentName}
                  </td>
                )}
                {visibleColumns.phone && (
                  <td className="text-center">{parent.phone}</td>
                )}
                {visibleColumns.email && (
                  <td className="text-center">{parent.email}</td>
                )}
                {visibleColumns.child && (
                  <td className="text-center">
                    {Array.isArray(parent.child)
                      ? parent.child.join(", ")
                      : parent.child}
                  </td>
                )}
                {visibleColumns.action && (
                  <td className="flex justify-center gap-2 p-2">
                    <button onClick={() => handleViewParent(parent)}>
                      <img src={view} alt="View" className="w-5 h-5" />
                    </button>
                    <button>
                      <img src={edit} alt="Edit" className="w-5 h-5" />
                    </button>
                    <button>
                      <img src={deleteIcon} alt="Delete" className="w-5 h-5" />
                    </button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center text-gray-500 py-4">
                No parents found
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
          {totalEntries !== parents.length && (
            <span className="text-gray-500 ml-1">
              (filtered from {parents.length} total entries)
            </span>
          )}
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

export default ParentTable;
