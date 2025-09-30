import React, { useState, useRef, useEffect } from "react";
import attendance from "../../../../utils/teacherAttendanceData";
import edit from "../../../../assets/icons/edit.svg";
import deleteIcon from "../../../../assets/icons/delete.svg";
import lessthan from "../../../../assets/icons/lessthan.svg";
import greaterthan from "../../../../assets/icons/greaterthan.svg";
import CalenderIcn from "../../../../assets/icons/CalenderIcn.svg";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "../../../../index.css";

const Attendance = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const [filters, setFilters] = useState({
    class: "",
    subject: "",
    status: "",
  });
  // const [filters, setFilters] = useState({
  //   class: "",
  //   subject: "",
  //   status: "",
  // });

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  const [visibleColumns, setVisibleColumns] = useState({
    date: true,
    time: true,
    notes: true,
    status: true,
    action: true,
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

  // 🔍 Filter teachers
  let filteredTeachers = attendance.filter((attendance) => {
    const matchesSearch = Object.values(attendance)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesClass =
      filters.class === "" || attendance.class === filters.class;

    const matchesSubject =
      filters.subject === "" || attendance.subject === filters.subject;

    const matchesStatus =
      filters.status === "" || attendance.status === filters.status;

    return matchesSearch && matchesClass && matchesSubject && matchesStatus;
  });

  // 🔽 Sorting logic
  if (sortConfig.key) {
    filteredTeachers = [...filteredTeachers].sort((a, b) => {
      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];

      if (sortConfig.key === "notes") {
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
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [open, setOpen] = useState(false);
  const ref = useRef();

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setOpen(!open);
  };

  // Close on outside click
  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="flex flex-col mt-4 bg-white shadow-md rounded-md w-full font-primary">
      {/* Header with search + buttons */}
      <div className="flex w-full justify-between items-center text-[#1E293B] font-bold border-b border-[#F2F2F2] p-4">
        <h2>Leave & Attendance</h2>
        <div className="flex gap-x-2.5">
          <div className="relative w-54" ref={ref}>
            {/* Input Field */}
            <div
              className="flex items-center justify-between border border-[#F2F2F2] rounded px-3 py-1.5 cursor-pointer h-[28px]"
              onClick={toggleDropdown}
            >
              <span className="text-gray-600 text-[12px]">
                 {`${format(range[0].startDate, "dd-MM-yyyy")} to ${format(
            range[0].endDate,
            "dd-MM-yyyy"
          )}`}
              </span>
              <img src={CalenderIcn} className="h-3 w-3" />
            </div>

            {/* Date Picker Dropdown */}
            {open && (
              <div className="absolute right-0 z-50 mt-2 bg-white shadow-xl border border-[#f2f2f2] rounded-lg p-3">
                <DateRange
                  onChange={(item) => setRange([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={range}
                  rangeColors={["#126F77"]} // Tailwind teal-500
                  editableDateInputs={true}
                />
                <div className="flex justify-end gap-2 mt-2">
                  <button
                    className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-3 py-1 rounded bg-[#0e626a] text-white text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
          <div>
            <select className="border border-[#F2F2F2] rounded px-2 py-1 text-xs">
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <table className="mt-4 w-full">
        <thead className="">
          <tr className="border-b border-[#F2F2F2] text-primary text-sm">
            <th className=" p-2">
              <input type="checkbox" className="accent-[#126F77]" />
            </th>
            {visibleColumns.date && (
              <th className="cursor-pointer text-start p-2">Date</th>
            )}
            {visibleColumns.status && <th className="text-start ">Status</th>}
            {visibleColumns.time && <th className="text-start ">TimeIn/Out</th>}
            {visibleColumns.notes && <th className="text-start ">Notes</th>}
            {visibleColumns.action && <th className="text-start ">Action</th>}
          </tr>
        </thead>
        <tbody>
          {currentRecords.length > 0 ? (
            currentRecords.map((attendance) => (
              <tr
                key={attendance.date}
                className="border-b border-[#F2F2F2] text-sm hover:bg-gray-50"
              >
                <td className="text-center p-2">
                  <input type="checkbox" className="accent-[#126F77]" />
                </td>
                {visibleColumns.date && (
                  <td className=" p-2">{attendance.date}</td>
                )}
                {visibleColumns.status && (
                  <td className="text-start">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        attendance.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {attendance.status}
                    </span>
                  </td>
                )}
                {visibleColumns.time && (
                  <td className="text-start">{attendance.time}</td>
                )}
                {visibleColumns.notes && (
                  <td className="text-start">{attendance.notes}</td>
                )}

                {visibleColumns.action && (
                  <td className="flex gap-2 p-2">
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
          {totalEntries !== attendance.length && (
            <span className="text-gray-500 ml-1">
              (filtered from {attendance.length} total entries)
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

export default Attendance;
