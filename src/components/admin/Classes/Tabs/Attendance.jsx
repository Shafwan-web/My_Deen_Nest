// components/tabs/Attendance.jsx
import React, { useState } from "react";

const Attendance = () => {
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");

  // Dummy student list
  const students = [
    { id: 647, name: "Jacob Jones", status: "Active" },
    { id: 600, name: "Marvin McKinney", status: "Active" },
    { id: 994, name: "Leslie Alexander", status: "Active" },
    { id: 583, name: "Ralph Edwards", status: "Active" },
    { id: 556, name: "Theresa Webb", status: "Active" },
    { id: 877, name: "Guy Hawkins", status: "Active" },
    { id: 883, name: "Robert Fox", status: "Active" },
  ];

  const [attendanceData, setAttendanceData] = useState(
    students.reduce((acc, s) => {
      acc[s.id] = false; // unchecked by default
      return acc;
    }, {})
  );

  // Toggle single student attendance
  const handleAttendanceChange = (id) => {
    setAttendanceData((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Toggle all students attendance
  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const updated = {};
    students.forEach((s) => {
      updated[s.id] = checked;
    });
    setAttendanceData(updated);
  };

  const handleSubmit = () => {
    console.log("Submitting attendance:", { subject, date, attendanceData });
    // Later connect to API
  };

  return (
    <div className="p-4 font-primary">
      {/* Filter Section */}
      <div className="flex justify-end gap-4 mb-6">
        <div>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full border border-primary rounded px-2 py-1 text-sm"
          >
            <option value="">Enter subject</option>
            <option value="Quran">Quran</option>
            <option value="Arabi">Arabi</option>
            <option value="Tarb">Tarb</option>
          </select>
        </div>
        <div>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-primary rounded px-2 py-1 text-sm"
          />
        </div>
      </div>

      {/* Step 1: No subject/date selected */}
      {!subject || !date ? (
        <div className="border rounded border-primary p-10 text-center text-black">
          <div className="text-2xl mb-2">📋</div>
          <p className="font-bold">Select subject and date</p>
          <p className="text-sm">
            Choose a subject & date to begin attendance data
          </p>
        </div>
      ) : (
        <>
          {/* Step 2: Show table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 text-primary text-sm">
                  <th className="p-2 text-left">G.R. No.</th>
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Status</th>
                  <th className="p-2 text-center w-32">
                    <div className="flex items-center justify-center gap-1">
                      <span>Attendance</span>
                      <input
                        type="checkbox"
                        className="accent-[#126F77]"
                        onChange={handleSelectAll}
                        checked={Object.values(attendanceData).every(Boolean)}
                      />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr
                    key={s.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="p-2 text-left">{s.id}</td>
                    <td className="p-2 text-left font-medium hover:text-blue-600">
                      {s.name}
                    </td>
                    <td className="p-2 text-left">
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
                    <td className="p-2 text-center">
                      <input
                        type="checkbox"
                        className="accent-[#126F77]"
                        checked={attendanceData[s.id]}
                        onChange={() => handleAttendanceChange(s.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Action buttons */}
          <div className="flex justify-end gap-3 mt-4">
            <button className="px-4 py-2   rounded bg-gray-100">Cancel</button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-primary text-white rounded hover:bg-teal-700 transition"
            >
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Attendance;
