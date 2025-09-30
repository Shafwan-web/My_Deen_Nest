import React from 'react';

const TimeTable = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const times = ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 1:00", "1:00 - 2:00"];
  const subjects = [
    { subject: "Quran", teacher: "Maulana raza" },
    { subject: "Quran", teacher: "Maulana raza" },
    { subject: "Quran", teacher: "Maulana raza" },
    { subject: "Quran", teacher: "Maulana raza" },
    { subject: "Quran", teacher: "Maulana raza" },
    { subject: "Quran", teacher: "Maulana raza" },
  ];

  return (
    <div className="container mx-auto p-4">
  
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            
            <th className="border border-gray-300 p-2">Time</th>
            {days.map((day) => (
              <th key={day} className="border border-gray-300 p-2">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time, index) => (
            <tr key={time}>
              <td className="border border-gray-300 p-2">{time}</td>
              {days.map((day) => (
                <td key={`${day}-${time}`} className="border border-gray-300 p-4">
                  <div className="bg-teal-700 text-white text-center p-2 rounded text-xs">
                    {subjects[index].subject}<br />{subjects[index].teacher}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeTable;