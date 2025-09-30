function RecentActivities() {
  const activities = [
    {
      label: "New Madrasa Registration",
      desc: "Al-Noor Islamic Academy",
      color: "bg-green-600",
      time: "2 Minutes ago",
    },
    {
      label: "Subscription Renewed",
      desc: "Madrasa Al-Huda",
      color: "bg-blue-600",
      time: "15 Minutes ago",
    },
    {
      label: "Payment failed",
      desc: "Darul Uloom Center",
      color: "bg-red-600",
      time: "1 Hour ago",
    },
    {
      label: "Plan Upgraded",
      desc: "Islamic Learning Hub",
      color: "bg-orange-500",
      time: "3 Hours ago",
    },
    {
      label: "Support ticket created",
      desc: "Madrasa Baitul Hikmah",
      color: "bg-gray-500",
      time: "5 Hours ago",
    },
  ];

  return (
    <div className="bg-white rounded-md  p-5">
      <h3 className="font-bold  text-sm mb-4  sm:text-base">Recent Activities</h3>
      <ul className="space-y-4">
        {activities.map((activity, i) => (
          <li key={i} className="flex justify-between items-center text-sm">
            {/* Left: color dot + text */}
            <div className="flex items-start space-x-2">
              <span
                className={`w-3 h-3 rounded-full mt-1 ${activity.color}`}
              ></span>
              <div>
                <p className="font-semibold text-sm text-gray-800">{activity.label}</p>
                <p className="text-gray-500 text-xs">{activity.desc}</p>
              </div>
            </div>

            {/* Right: time */}
            <span className="text-gray-500 text-xs border px-2 py-1 rounded-full">
              {activity.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentActivities;
