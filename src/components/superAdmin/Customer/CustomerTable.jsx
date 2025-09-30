import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import filter from "../../../assets/icons/filters.svg";
import sort from "../../../assets/icons/sort2.svg";
import edit from "../../../assets/icons/edit.svg";
import deleteIcon from "../../../assets/icons/delete.svg";
import view from "../../../assets/icons/view.svg";
import sorticon from "../../../assets/icons/sorticon.svg"; // ✅ single sort icon
import lessthan from "../../../assets/icons/lessthan.svg";
import greaterthan from "../../../assets/icons/greaterthan.svg";
import customers from "../../../../src/utils/CustomerData"; // ✅ import data
import CustomerForm from "../../../components/superAdmin/Customer/tabs/CustomerForm";

const CustomerTable = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const navigate = useNavigate();

  const filterRef = useRef(null);
  const sortRef = useRef(null);

  // Filters
  const [filters, setFilters] = useState({
    plan: "",
    status: "",
  });

  // Sorting state
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  // Column visibility
  const [visibleColumns, setVisibleColumns] = useState({
    id: true,
    schoolName: true,
    admin: true,
    email: true,
    contact: true,
    plan: true,
    expiryDate: true,
    status: true,
    action: true,
  });

  // Close dropdowns on outside click
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

  // 🔍 Filtering
  let filteredCustomers = customers.filter((customer) => {
    const matchesSearch = Object.values(customer)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesPlan = filters.plan === "" || customer.plan === filters.plan;

    const matchesStatus =
      filters.status === "" || customer.status === filters.status;

    return matchesSearch && matchesPlan && matchesStatus;
  });

  // 🔽 Sorting
  if (sortConfig.key) {
    filteredCustomers = [...filteredCustomers].sort((a, b) => {
      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];

      if (sortConfig.key === "expiryDate") {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }

      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }

  // 📄 Pagination
  const totalEntries = filteredCustomers.length;
  const totalPages = Math.ceil(totalEntries / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredCustomers.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  // Toggle column visibility
  const toggleColumn = (col) => {
    setVisibleColumns((prev) => ({ ...prev, [col]: !prev[col] }));
  };

  // Select all toggle
  const toggleSelectAll = () => {
    if (selectedRows.length === currentRecords.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(currentRecords.map((c) => c.id));
    }
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
    <div>
      <div className="flex flex-col mt-4 bg-white shadow-md rounded-md w-full font-primary">
        {/* Header */}
        <div className="flex w-full justify-between items-center border-b border-[#F2F2F2] p-4 text-sm md:text-base">
          <h2 className="font-bold text-[#1E293B]">Customer Details</h2>

          <div className="flex gap-2 relative">
            {/* Search */}
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="border border-[#F2F2F2] px-2 rounded-sm text-sm"
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
                  <h3 className="font-semibold text-sm mb-3">
                    Filter Customers
                  </h3>

                  {/* Plan Filter */}
                  <div className="mb-2">
                    <label className="block text-xs font-medium text-gray-600">
                      Plan
                    </label>
                    <select
                      value={filters.plan}
                      onChange={(e) =>
                        setFilters({ ...filters, plan: e.target.value })
                      }
                      className="w-full border rounded px-2 py-1 text-sm"
                    >
                      <option value="">All</option>
                      {[...new Set(customers.map((c) => c.plan))].map(
                        (plan) => (
                          <option key={plan} value={plan}>
                            {plan}
                          </option>
                        )
                      )}
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
                      className="w-full border rounded px-2 py-1 text-sm"
                    >
                      <option value="">All</option>
                      {[...new Set(customers.map((c) => c.status))].map(
                        (stat) => (
                          <option key={stat} value={stat}>
                            {stat}
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  <div className="flex justify-end gap-2 mt-3">
                    <button
                      onClick={() => setFilters({ plan: "", status: "" })}
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
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded shadow-md z-10 p-4">
                  <h3 className="font-semibold text-sm mb-3">Manage Columns</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {Object.keys(visibleColumns).map((col) => (
                      <label key={col} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={visibleColumns[col]}
                          onChange={() => toggleColumn(col)}
                        />
                        {col}
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto custom-scrollbar">
          <table className="w-full border-collapse text-sm mt-2 text-left whitespace-nowrap min-w-[1024px]">
            <thead>
              <tr className="border-b border-[#F2F2F2] text-primary text-sm">
                <th className="p-2">
                  <input
                    type="checkbox"
                    onClick={toggleSelectAll}
                    className="accent-[#126F77]"
                  />
                </th>

                {visibleColumns.schoolName && (
                  <th
                    onClick={() => handleSort("schoolName")}
                    className="cursor-pointer"
                  >
                    School {renderSortIcon("schoolName")}
                  </th>
                )}
                {visibleColumns.admin && <th>Admin</th>}
                {visibleColumns.email && <th>Email</th>}
                {visibleColumns.contact && <th>Contact</th>}
                {visibleColumns.plan && <th>Plan</th>}
                {visibleColumns.expiryDate && (
                  <th
                    onClick={() => handleSort("expiryDate")}
                    className="cursor-pointer"
                  >
                    Expiry {renderSortIcon("expiryDate")}
                  </th>
                )}
                {visibleColumns.status && <th>Status</th>}
                {visibleColumns.action && <th>Action</th>}
              </tr>
            </thead>
            <tbody>
              {currentRecords.length > 0 ? (
                currentRecords.map((customer) => (
                  <tr key={customer.id} className="border-b border-[#F2F2F2]">
                    <td className="p-2">
                      <input type="checkbox" className="accent-[#126F77]" />
                    </td>
                    {visibleColumns.schoolName && (
                      <td>{customer.schoolName}</td>
                    )}
                    {visibleColumns.admin && <td>{customer.admin}</td>}
                    {visibleColumns.email && <td>{customer.email}</td>}
                    {visibleColumns.contact && <td>{customer.contact}</td>}
                    {visibleColumns.plan && <td>{customer.plan}</td>}
                    {visibleColumns.expiryDate && (
                      <td>{customer.expiryDate}</td>
                    )}
                    {visibleColumns.status && (
                      <td>
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            customer.status === "Active"
                              ? "bg-green-100 text-green-600"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {customer.status}
                        </span>
                      </td>
                    )}
                    {visibleColumns.action && (
                      <td className="flex gap-2 p-2">
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
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center text-gray-500 py-4">
                    No customers found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center p-4 text-sm">
          <span>
            Showing {indexOfFirstRecord + 1} to{" "}
            {Math.min(indexOfLastRecord, totalEntries)} of {totalEntries}{" "}
            entries
          </span>

          <div className="flex items-center gap-2">
            <select
              value={recordsPerPage}
              onChange={(e) => {
                setRecordsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border px-2 py-1 rounded"
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
              <img src={lessthan} alt="prev" />
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

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`border border-[#F2F2F2] rounded ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <img src={greaterthan} alt="prev" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTable;
