import React from "react";

const Attendance = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = Array.from({ length: 14 }, (_, i) => i + 1);
  const attendanceData = {
    "01": {
      Jan: "present",
      Feb: "present",
      Mar: "present",
      Apr: "present",
      May: "present",
      Jun: "present",
      Jul: "present",
      Aug: "absent",
      Sep: "present",
      Oct: "present",
      Nov: "present",
      Dec: "present",
    },
    "02": {
      Jan: "present",
      Feb: "absent",
      Mar: "present",
      Apr: "present",
      May: "present",
      Jun: "present",
      Jul: "present",
      Aug: "present",
      Sep: "present",
      Oct: "holiday",
      Nov: "present",
      Dec: "present",
    },
    "03": {
      Jan: "present",
      Feb: "present",
      Mar: "present",
      Apr: "present",
      May: "present",
      Jun: "present",
      Jul: "holiday",
      Aug: "present",
      Sep: "present",
      Oct: "present",
      Nov: "present",
      Dec: "present",
    },
    "04": {
      Jan: "present",
      Feb: "present",
      Mar: "present",
      Apr: "present",
      May: "present",
      Jun: "present",
      Jul: "present",
      Aug: "present",
      Sep: "absent",
      Oct: "present",
      Nov: "present",
      Dec: "present",
    },
    "05": {
      Jan: "present",
      Feb: "holiday",
      Mar: "present",
      Apr: "present",
      May: "present",
      Jun: "present",
      Jul: "present",
      Aug: "present",
      Sep: "present",
      Oct: "present",
      Nov: "present",
      Dec: "present",
    },
    "06": {
      Jan: "present",
      Feb: "present",
      Mar: "present",
      Apr: "absent",
      May: "present",
      Jun: "present",
      Jul: "present",
      Aug: "present",
      Sep: "present",
      Oct: "present",
      Nov: "holiday",
      Dec: "present",
    },
    "07": {
      Jan: "present",
      Feb: "present",
      Mar: "present",
      Apr: "present",
      May: "holiday",
      Jun: "present",
      Jul: "present",
      Aug: "present",
      Sep: "present",
      Oct: "present",
      Nov: "present",
      Dec: "present",
    },
    "08": {
      Jan: "absent",
      Feb: "present",
      Mar: "present",
      Apr: "present",
      May: "present",
      Jun: "present",
      Jul: "present",
      Aug: "present",
      Sep: "present",
      Oct: "present",
      Nov: "present",
      Dec: "present",
    },
    "09": {
      Jan: "present",
      Feb: "present",
      Mar: "present",
      Apr: "present",
      May: "present",
      Jun: "present",
      Jul: "present",
      Aug: "present",
      Sep: "present",
      Oct: "present",
      Nov: "present",
      Dec: "present",
    },
    10: {
      Jan: "present",
      Feb: "present",
      Mar: "present",
      Apr: "present",
      May: "present",
      Jun: "absent",
      Jul: "present",
      Aug: "present",
      Sep: "present",
      Oct: "absent",
      Nov: "present",
      Dec: "present",
    },
    11: {
      Jan: "present",
      Feb: "holiday",
      Mar: "present",
      Apr: "present",
      May: "present",
      Jun: "present",
      Jul: "present",
      Aug: "present",
      Sep: "present",
      Oct: "present",
      Nov: "present",
      Dec: "present",
    },
    12: {
      Jan: "present",
      Feb: "present",
      Mar: "present",
      Apr: "present",
      May: "present",
      Jun: "present",
      Jul: "present",
      Aug: "present",
      Sep: "present",
      Oct: "present",
      Nov: "present",
      Dec: "present",
    },
    13: {
      Jan: "present",
      Feb: "present",
      Mar: "present",
      Apr: "holiday",
      May: "present",
      Jun: "present",
      Jul: "present",
      Aug: "absent",
      Sep: "present",
      Oct: "present",
      Nov: "present",
      Dec: "present",
    },
    14: {
      Jan: "present",
      Feb: "present",
      Mar: "present",
      Apr: "present",
      May: "present",
      Jun: "present",
      Jul: "present",
      Aug: "present",
      Sep: "present",
      Oct: "present",
      Nov: "present",
      Dec: "present",
    },
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "present":
        return "bg-green-500";
      case "absent":
        return "bg-red-500";
      case "holiday":
        return "bg-gray-300";
      default:
        return "bg-gray-200";
    }
  };
  return (
    <div>
      <div className="container mx-auto p-4 border-2 border-blue-300 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Leave & Attendance</h2>
          <div>
            <select className="border p-1 rounded">
              <option>This Month</option>
            </select>
            <button className="ml-2 bg-gray-200 p-1 rounded">Export</button>
          </div>
        </div>
        <div className="flex justify-start mb-2 text-sm">
          <span className="mr-4">
            <span className="inline-block w-4 h-4 bg-green-500 mr-1"></span>
            Present
          </span>
          <span className="mr-4">
            <span className="inline-block w-4 h-4 bg-red-500 mr-1"></span>Absent
          </span>
          <span>
            <span className="inline-block w-4 h-4 bg-gray-300 mr-1"></span>
            Holiday
          </span>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Date & Month</th>
              {months.map((month) => (
                <th key={month} className="border p-2">
                  {month}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((day) => (
              <tr key={day}>
                <td className="border p-2">
                  {day.toString().padStart(2, "0")}
                </td>
                {months.map((month) => (
                  <td
                    key={`${day}-${month}`}
                    className="border p-1 text-center"
                  >
                    <div
                      className={`w-4 h-4 mx-auto ${getStatusColor(
                        attendanceData[day.toString().padStart(2, "0")][
                          month.toLowerCase()
                        ]
                      )} ${
                        attendanceData[day.toString().padStart(2, "0")][
                          month.toLowerCase()
                        ] === "holiday"
                          ? "tooltip"
                          : ""
                      }`}
                      data-tooltip={
                        attendanceData[day.toString().padStart(2, "0")][
                          month.toLowerCase()
                        ] === "holiday"
                          ? "Gandhi Jayant"
                          : ""
                      }
                    ></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4 text-sm">
          <span>Showing 1 to 10 of 30 entries</span>
          <div className="flex items-center">
            <select className="border p-1 rounded mr-2">
              <option>10</option>
            </select>
            <span>Per Page</span>
            <button className="ml-2 p-1 border rounded">&lt;</button>
            <span className="mx-2">6 of 10</span>
            <button className="ml-2 p-1 border rounded">&gt;</button>
          </div>
        </div>
      </div>
      );
    </div>
  );
};

export default Attendance;
