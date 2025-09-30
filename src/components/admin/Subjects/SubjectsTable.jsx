import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import subjects from "../../../utils/subjectsData"; // ✅ import your 20-subjects dataset
import view from "../../../assets/icons/view.svg";
import edit from "../../../assets/icons/edit.svg";
import deleteIcon from "../../../assets/icons/delete.svg";
import filter from "../../../assets/icons/filters-student.svg";
import sort from "../../../assets/icons/selection.svg";
import sorticon from "../../../assets/icons/sorticon.svg";
import lessthan from "../../../assets/icons/lessthan.svg";
import greaterthan from "../../../assets/icons/greaterthan.svg";
import { Search } from "lucide-react";

const SubjectsTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [viewMode, setViewMode] = useState("table");
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const subjects = [
    {
      id: 1,
      name: "Subject 1",
      classes: ["Class 1"],
      description: "Lorem Ipsum",
    },
    {
      id: 2,
      name: "Subject 2",
      classes: ["Class 2", "Class 3", "Class 1"],
      description: "Lorem Ipsum",
    },
    {
      id: 3,
      name: "Subject 3",
      classes: ["Class 3"],
      description: "Lorem Ipsum",
    },
    {
      id: 4,
      name: "Subject 4",
      classes: ["Class 4", "Class 1"],
      description: "Lorem Ipsum",
    },
  ];

  const [filters, setFilters] = useState({
    name: "",
  });

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  const [visibleColumns, setVisibleColumns] = useState({
    id: true,
    name: true,
    description: true,
    classes: true,
    action: true,
  });

  const filterRef = useRef(null);
  const sortRef = useRef(null);
  const navigate = useNavigate();

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(subjects.map((s) => s.id));
    }
    setSelectAll(!selectAll);
  };

  const handleRowSelect = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  // ✅ Handle row selection
  const toggleRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((row) => row !== id) : [...prev, id]
    );
  };
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

  // Pagination
  const totalEntries = subjects.length;
  const totalPages = Math.ceil(totalEntries / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = subjects.slice(indexOfFirstRecord, indexOfLastRecord);

  // Filter subjects
  let filteredSubjects = subjects.filter((subject) => {
    // Convert classes array to a string for searching
    const classString = subject.classes.join(" ").toLowerCase();

    // Check search matches
    const matchesSearch =
      subject.name.toLowerCase().includes(search.toLowerCase()) ||
      subject.description.toLowerCase().includes(search.toLowerCase()) ||
      classString.includes(search.toLowerCase());

    // Check filter matches
    const matchesFilter =
      !filters.name ||
      subject.name.toLowerCase() === filters.name.toLowerCase();

    return matchesSearch && matchesFilter;
  });

  const toggleSelectAll = () => {
    if (selectedRows.length === currentRecords.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(
        currentRecords.map((cls, idx) => idx + indexOfFirstRecord)
      );
    }
  };
  return (
    <div className=" bg-white rounded-lg shadow font-primary">
      {/* Header */}
      <div className="flex  w-full text-lg sm:text-lg md:my-2 items-start md:flex-row justify-between md:items-center text-[#1E293B] font-bold border-b border-[#F2F2F2] p-4">
        <h2 className="whitespace-nowrap">Subjects Details</h2>
        <div className="flex  gap-1 items-center justify-end w-full relative flex-nowrap">
          {/* Search */}
          {/* Toggle button for small screens */}
          <div className="flex  justify-end w-full relative">
            <button
              className={`md:hidden  p-1 sm:p-1.5  rounded  ${
                showSearchBar
                  ? "border  border-black text-black"
                  : "border border-gray-300 text-gray-600"
              }`}
              onClick={() => setShowSearchBar((prev) => !prev)}
            >
              {showSearchBar ? (
                <Search className="w-4 h-4 " /> // search icon when inactive
              ) : (
                <Search className="w-4 h-4 " /> // search icon when inactive
              )}
            </button>
          </div>

          {/* Medium and larger screens: separate location, always visible */}
          <div className="hidden md:block w-full max-w-[220px]">
            <div className="relative w-full p-2">
              <span className="absolute inset-y-0 left-2 flex items-center pl-2">
                <Search className="w-4 h-4 text-gray-400" />
              </span>
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                className="border border-[#F2F2F2] pl-8 pr-2.5 py-1.5 rounded-sm text-sm font-normal sm:text-base placeholder:text-xs w-full"
              />
            </div>
          </div>

          {/* Toggle buttons */}
          <div className="flex gap-0.5  sm:gap-1 border rounded border-gray-300 p-0.5 flex-shrink-0">
            {/* Table */}
            <button
              onClick={() => setViewMode("table")}
              className={` border p-0.5 sm:p-1.5 rounded-xs text-xs font-medium transition flex-shrink-0 ${
                viewMode === "table"
                  ? "bg-primary text-white"
                  : "bg-[#DFE5EF] text-gray-700  border-primary"
              }`}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 10 10"
                xmlns="http://www.w3.org/2000/svg"
                className="p-0.5 sm:p-0"
              >
                <path
                  d="M8.66667 9H4C3.8 9 3.66667 8.85455 3.66667 8.63636V7.18182C3.66667 6.96364 3.8 6.81818 4 6.81818H8.66667C8.86667 6.81818 9 6.96364 9 7.18182V8.63636C9 8.85455 8.86667 9 8.66667 9ZM2.66667 9H1.33333C1.13333 9 1 8.85455 1 8.63636V7.18182C1 6.96364 1.13333 6.81818 1.33333 6.81818H2.66667C2.86667 6.81818 3 6.96364 3 7.18182V8.63636C3 8.85455 2.86667 9 2.66667 9ZM8.66667 6.09091H4C3.8 6.09091 3.66667 5.94545 3.66667 5.72727V4.27273C3.66667 4.05455 3.8 3.90909 4 3.90909H8.66667C8.86667 3.90909 9 4.05455 9 4.27273V5.72727C9 5.94545 8.86667 6.09091 8.66667 6.09091ZM2.66667 6.09091H1.33333C1.13333 6.09091 1 5.94545 1 5.72727V4.27273C1 4.05455 1.13333 3.90909 1.33333 3.90909H2.66667C2.86667 3.90909 3 4.05455 3 4.27273V5.72727C3 5.94545 2.86667 6.09091 2.66667 6.09091ZM8.66667 3.18182H4C3.8 3.18182 3.66667 3.03636 3.66667 2.81818V1.36364C3.66667 1.14545 3.8 1 4 1H8.66667C8.86667 1 9 1.14545 9 1.36364V2.81818C9 3.03636 8.86667 3.18182 8.66667 3.18182ZM2.66667 3.18182H1.33333C1.13333 3.18182 1 3.03636 1 2.81818V1.36364C1 1.14545 1.13333 1 1.33333 1H2.66667C2.86667 1 3 1.14545 3 1.36364V2.81818C3 3.03636 2.86667 3.18182 2.66667 3.18182Z"
                  fill={viewMode === "table" ? "#ffffff" : "#6B7280"} // 👈 conditional fill
                  stroke={viewMode === "table" ? "#ffffff" : "#126F77"} // 👈 conditional stroke
                  strokeWidth="0.1"
                />
              </svg>
              {/* <Table className="w-4.5 sm:w-3.5 h-auto" /> */}
            </button>

            {/* Grid */}
            <button
              onClick={() => setViewMode("grid")}
              className={` border p-0.5 sm:p-1.5 rounded-xs text-xs font-medium transition flex-shrink-0 ${
                viewMode === "grid"
                  ? "bg-primary text-white border-primary"
                  : "bg-[#DFE5EF] text-gray-700 border-primary "
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 8 9"
                xmlns="http://www.w3.org/2000/svg"
                className="p-0.5 sm:p-0"
              >
                <path
                  d="M2 0H0.4C0.293913 0 0.192172 0.0421427 0.117157 0.117157C0.0421427 0.192172 0 0.293913 0 0.4V2C0 2.10609 0.0421427 2.20783 0.117157 2.28284C0.192172 2.35786 0.293913 2.4 0.4 2.4H2C2.10609 2.4 2.20783 2.35786 2.28284 2.28284C2.35786 2.20783 2.4 2.10609 2.4 2V0.4C2.4 0.293913 2.35786 0.192172 2.28284 0.117157C2.20783 0.0421427 2.10609 0 2 0ZM4.8 0H3.2C3.09391 0 2.99217 0.0421427 2.91716 0.117157C2.84214 0.192172 2.8 0.293913 2.8 0.4V2C2.8 2.10609 2.84214 2.20783 2.91716 2.28284C2.99217 2.35786 3.09391 2.4 3.2 2.4H4.8C4.90609 2.4 5.00783 2.35786 5.08284 2.28284C5.15786 2.20783 5.2 2.10609 5.2 2V0.4C5.2 0.293913 5.15786 0.192172 5.08284 0.117157C5.00783 0.0421427 4.90609 0 4.8 0ZM7.6 0H6C5.89391 0 5.79217 0.0421427 5.71716 0.117157C5.64214 0.192172 5.6 0.293913 5.6 0.4V2C5.6 2.10609 5.64214 2.20783 5.71716 2.28284C5.79217 2.35786 5.89391 2.4 6 2.4H7.6C7.70609 2.4 7.80783 2.35786 7.88284 2.28284C7.95786 2.20783 8 2.10609 8 2V0.4C8 0.293913 7.95786 0.192172 7.88284 0.117157C7.80783 0.0421427 7.70609 0 7.6 0ZM2 5.6H0.4C0.293913 5.6 0.192172 5.64214 0.117157 5.71716C0.0421427 5.79217 0 5.89391 0 6V7.6C0 7.70609 0.0421427 7.80783 0.117157 7.88284C0.192172 7.95786 0.293913 8 0.4 8H2C2.10609 8 2.20783 7.95786 2.28284 7.88284C2.35786 7.80783 2.4 7.70609 2.4 7.6V6C2.4 5.89391 2.35786 5.79217 2.28284 5.71716C2.20783 5.64214 2.10609 5.6 2 5.6ZM4.8 5.6H3.2C3.09391 5.6 2.99217 5.64214 2.91716 5.71716C2.84214 5.79217 2.8 5.89391 2.8 6V7.6C2.8 7.70609 2.84214 7.80783 2.91716 7.88284C2.99217 7.95786 3.09391 8 3.2 8H4.8C4.90609 8 5.00783 7.95786 5.08284 7.88284C5.15786 7.80783 5.2 7.70609 5.2 7.6V6C5.2 5.89391 5.15786 5.79217 5.08284 5.71716C5.00783 5.64214 4.90609 5.6 4.8 5.6ZM7.6 5.6H6C5.89391 5.6 5.79217 5.64214 5.71716 5.71716C5.64214 5.79217 5.6 5.89391 5.6 6V7.6C5.6 7.70609 5.64214 7.80783 5.71716 7.88284C5.79217 7.95786 5.89391 8 6 8H7.6C7.70609 8 7.80783 7.95786 7.88284 7.88284C7.95786 7.80783 8 7.70609 8 7.6V6C8 5.89391 7.95786 5.79217 7.88284 5.71716C7.80783 5.64214 7.70609 5.6 7.6 5.6ZM2 2.8H0.4C0.293913 2.8 0.192172 2.84214 0.117157 2.91716C0.0421427 2.99217 0 3.09391 0 3.2V4.8C0 4.90609 0.0421427 5.00783 0.117157 5.08284C0.192172 5.15786 0.293913 5.2 0.4 5.2H2C2.10609 5.2 2.20783 5.15786 2.28284 5.08284C2.35786 5.00783 2.4 4.90609 2.4 4.8V3.2C2.4 3.09391 2.35786 2.99217 2.28284 2.91716C2.20783 2.84214 2.10609 2.8 2 2.8ZM4.8 2.8H3.2C3.09391 2.8 2.99217 2.84214 2.91716 2.91716C2.84214 2.99217 2.8 3.09391 2.8 3.2V4.8C2.8 4.90609 2.84214 5.00783 2.91716 5.08284C2.99217 5.15786 3.09391 5.2 3.2 5.2H4.8C4.90609 5.2 5.00783 5.15786 5.08284 5.08284C5.15786 5.00783 5.2 4.90609 5.2 4.8V3.2C5.2 3.09391 5.15786 2.99217 5.08284 2.91716C5.00783 2.84214 4.90609 2.8 4.8 2.8ZM7.6 2.8H6C5.89391 2.8 5.79217 2.84214 5.71716 2.91716C5.64214 2.99217 5.6 3.09391 5.6 3.2V4.8C5.6 4.90609 5.64214 5.00783 5.71716 5.08284C5.79217 5.15786 5.89391 5.2 6 5.2H7.6C7.70609 5.2 7.80783 5.15786 7.88284 5.08284C7.95786 5.00783 8 4.90609 8 4.8V3.2C8 3.09391 7.95786 2.99217 7.88284 2.91716C7.80783 2.84214 7.70609 2.8 7.6 2.8Z"
                  fill={viewMode === "grid" ? "#ffffff" : "#6B7280"} // 👈 conditional fill
                  stroke={viewMode === "grid" ? "#ffffff" : "#126F77"} // 👈 conditional stroke
                  strokeWidth="0.1"
                />
              </svg>
              {/* <Grid className="w-4.5 sm:w-3.5 h-auto" /> */}
            </button>
          </div>

          {/* Filter button */}
          <div className="relative flex-shrink-0" ref={filterRef}>
            <button
              onClick={() => {
                setShowFilterMenu((prev) => !prev);
                setShowSortMenu(false);
              }}
              className="border border-gray-300  rounded-sm flex items-center justify-center"
            >
              <img src={filter} alt="" className="w-6 sm:w-8 h-auto p-1" />
            </button>
            {showFilterMenu && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded shadow-md z-10 p-4">
                <h3 className="font-semibold text-sm mb-3">Filter Divisions</h3>

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
                    {[...new Set(division.map((t) => t.class))].map((cls) => (
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
                    {[...new Set(division.map((t) => t.subject))].map((sub) => (
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
                    {[...new Set(division.map((t) => t.status))].map((stat) => (
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

          {/* Column manager */}
          <div className="relative flex-shrink-0" ref={sortRef}>
            <button
              onClick={() => {
                setShowSortMenu((prev) => !prev);
                setShowFilterMenu(false);
              }}
              className="border border-gray-300  rounded-sm flex items-center justify-center"
            >
              <img src={sort} alt="" className="w-6 sm:w-8 h-auto p-1" />
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
                        id: true,
                        division_name: true,
                        classes: true,
                        description: true,
                        status: true,
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
      {/* Search bar div */}
      <div
        className={`relative w-full  transition-all p-2 duration-300 ${
          showSearchBar ? "block" : "hidden md:hidden"
        }`}
      >
        <span className="absolute inset-y-0 left-2 flex items-center pl-2">
          <Search className="w-4 h-4 text-gray-400" />
        </span>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="border border-[#F2F2F2] pl-8 pr-2.5 py-2 rounded-sm text-sm font-normal sm:text-base placeholder:text-xs w-full"
        />
      </div>
      {/* Action bar */}
      {selectedRows.length > 0 && (
        <div className="flex items-center gap-4 mb-3 px-3 pt-3">
          <select className="border rounded px-2 py-1 text-sm">
            <option>Action</option>
            <option>Edit</option>
            <option>Delete</option>
          </select>
          <span className="text-sm text-gray-600">
            {selectedRows.length} Selected
          </span>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto w-full custom-scrollbar">
        {/* ✅ Table or Grid View */}
        {viewMode === "table" ? (
          // ---------- TABLE ----------
          <div className="overflow-x-auto w-full custom-scrollbar">
            <table className="mt-4 w-full min-w-[650px] ">
              <thead>
                <tr className="border-b border-[#F2F2F2] text-primary text-sm sm:text-base">
                  <th className="p-2 text-center w-10">
                    <input
                      type="checkbox"
                      checked={selectedRows.length === currentRecords.length}
                      onChange={toggleSelectAll}
                      className="accent-[#126F77] border"
                    />
                  </th>
                  {visibleColumns.id && (
                    <th
                      onClick={() => handleSort("id")}
                      className="cursor-pointer text-left"
                    >
                      ID {renderSortIcon("id")}
                    </th>
                  )}
                  {visibleColumns.name && (
                    <th
                      onClick={() => handleSort("name")}
                      className="cursor-pointer text-left"
                    >
                      subjects Name {renderSortIcon("name")}
                    </th>
                  )}
                  {visibleColumns.description && (
                    <th className="text-left">Description</th>
                  )}
                  {visibleColumns.classes && (
                    <th className="text-left">Classes</th>
                  )}
                  {visibleColumns.action && (
                    <th className="text-left">Action</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {currentRecords.length > 0 ? (
                  currentRecords.map((subjects, idx) => {
                    const globalIndex = idx + indexOfFirstRecord;
                    const isSelected = selectedRows.includes(globalIndex);

                    return (
                      <tr
                        key={subjects.id}
                        className="border-b border-[#F2F2F2] text-sm sm:text-sm hover:bg-gray-50"
                      >
                        {/* Checkbox */}
                        <td className="p-2 text-center">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleRow(globalIndex)}
                            className="accent-[#126F77]"
                          />
                        </td>

                        {visibleColumns.id && (
                          <td className="p-2">{subjects.id}</td>
                        )}
                        {visibleColumns.name && (
                          <td
                            className="text-left hover:text-blue-600 cursor-pointer"
                            onClick={() => navigate(`/subjects/${subjects.id}`)}
                          >
                            {subjects.name}
                          </td>
                        )}
                        {visibleColumns.description && (
                          <td>{subjects.description}</td>
                        )}
                        {visibleColumns.classes && (
                          <td>{subjects.classes.join(", ")}</td>
                        )}
                        {visibleColumns.action && (
                          <td className="flex justify-center gap-2 p-2">
                            <button>
                              <img src={view} alt="View" className="w-5 h-5" />
                            </button>
                            <button>
                              <img src={edit} alt="Edit" className="w-5 h-5" />
                            </button>
                            <button>
                              <img
                                src={deleteIcon}
                                alt="Delete"
                                className="w-5 h-5"
                              />
                            </button>
                          </td>
                        )}
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="10" className="text-left text-gray-500 py-4">
                      No subjects found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ) : (
          // ---------- GRID ----------
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
            {subjects.length > 0 ? (
              subjects.map((subject) => (
                <div
                  key={subject.id}
                  className="border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {subject.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {subject.description}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Classes: {subject.classes.join(", ")}
                  </p>

                  <div className="flex justify-end gap-2">
                    <button>
                      <img src={view} alt="View" className="w-5 h-5" />
                    </button>
                    <button>
                      <img src={edit} alt="Edit" className="w-5 h-5" />
                    </button>
                    <button>
                      <img src={deleteIcon} alt="Delete" className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full">No subjects found</p>
            )}
          </div>
        )}
      </div>

      {/* ✅ Pagination (only show in table mode) */}
      {viewMode !== "grid" && (
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
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
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
      )}
    </div>
  );
};

export default SubjectsTable;
1;
