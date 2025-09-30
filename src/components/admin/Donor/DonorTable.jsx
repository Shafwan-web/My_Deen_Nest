import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import view from "../../../assets/icons/view.svg";
import edit from "../../../assets/icons/edit.svg";
import deleteIcon from "../../../assets/icons/delete.svg";
import filter from "../../../assets/icons/filters.svg";
import sort from "../../../assets/icons/sort2.svg";
import sorticon from "../../../assets/icons/sorticon.svg";
import lessthan from "../../../assets/icons/lessthan.svg";
import greaterthan from "../../../assets/icons/greaterthan.svg";
import donorsData from "../../../utils/donorsData"; 
 

const DonorTable = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);

  const [filters, setFilters] = useState({
    name: "",
  });

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  const [visibleColumns, setVisibleColumns] = useState({
    name: true,
    phone: true,
    students: true,
    action: true,
  });

  const filterRef = useRef(null);
  const sortRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdowns when clicking outside
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

  // Filter donors
  let filteredDonors = donorsData.filter((donor) => {
    const matchesSearch = Object.values(donor)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesSearch;
  });

  // Sorting
  if (sortConfig.key) {
    filteredDonors = [...filteredDonors].sort((a, b) => {
      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];

      // Students is array, sort by first student's name if exists
      if (sortConfig.key === "students") {
        aValue = aValue.length ? aValue[0] : "";
        bValue = bValue.length ? bValue[0] : "";
      }

      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }

  // Pagination
  const totalEntries = filteredDonors.length;
  const totalPages = Math.ceil(totalEntries / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredDonors.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const toggleColumn = (col) => {
    setVisibleColumns((prev) => ({ ...prev, [col]: !prev[col] }));
  };

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: "asc" };
    });
  };

  const renderSortIcon = (col) => {
    const isActive = sortConfig.key === col;
    const direction = sortConfig.direction;
    return (
      <img
        src={sorticon}
        alt="Sort"
        className={`inline-block w-3 h-3 ml-1 transition-transform duration-200 ${
          isActive ? (direction === "asc" ? "rotate-180" : "rotate-0") : "opacity-40"
        }`}
      />
    );
  };

  return (
    <div className="flex flex-col mt-4 bg-white shadow-md rounded-md w-full font-primary">
      {/* Header */}
      <div className="flex w-full justify-between items-center text-[#1E293B] font-bold border-b border-[#F2F2F2] p-4">
        <h2>Donor Details</h2>
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

          {/* Column Manager */}
          <div className="relative" ref={sortRef}>
            <button
              onClick={() => {
                setShowSortMenu((prev) => !prev);
              }}
              className="bg-primary p-1.5 rounded-sm"
            >
              <img src={sort} alt="Columns" className="h-5" />
            </button>
            {showSortMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded shadow-md z-10 p-4">
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
                        phone: true,
                        students: true,
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

      {/* Table */}
      <table className="mt-4 w-full">
        <thead>
          <tr className="border-b border-[#F2F2F2] text-primary text-sm">
            {visibleColumns.name && (
              <th className="cursor-pointer" onClick={() => handleSort("name")}>
                Donor Name {renderSortIcon("name")}
              </th>
            )}
            {visibleColumns.phone && <th>Phone</th>}
            {visibleColumns.students && <th>Students</th>}
            {visibleColumns.action && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {currentRecords.length > 0 ? (
            currentRecords.map((donor) => (
              <tr key={donor.id} className="border-b border-[#F2F2F2] text-sm hover:bg-gray-50">
                {visibleColumns.name && (
                  <td
                    className="text-center hover:text-blue-600 cursor-pointer"
                    onClick={() => navigate(`/donors/${donor.id}`)}
                  >
                    {donor.name}
                  </td>
                )}
                {visibleColumns.phone && <td className="text-center">{donor.phone}</td>}
                {visibleColumns.students && (
                  <td className="text-center">
                    {donor.students.join(", ")}
                  </td>
                )}
                {visibleColumns.action && (
                  <td className="flex justify-center gap-2 p-2">
                    <button>
                      <img src={view} alt="View" className="w-5 h-5 cursor-pointer" />
                    </button>
                    <button>
                      <img src={edit} alt="Edit" className="w-5 h-5 cursor-pointer" />
                    </button>
                    <button>
                      <img src={deleteIcon} alt="Delete" className="w-5 h-5 cursor-pointer" />
                    </button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center text-gray-500 py-4">
                No donors found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center p-4 text-sm">
        <div>
          Showing {indexOfFirstRecord + 1} to {Math.min(indexOfLastRecord, totalEntries)} of {totalEntries} entries
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
            {[5, 10, 20, 50].map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <span>Per Page</span>
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={`border border-[#F2F2F2] rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
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
            className={`border border-[#F2F2F2] rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <img src={greaterthan} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonorTable;
