function StatsCard({
  title,
  value,
  subtitle,
  icon,
  color = "bg-blue-100",
  iconColor = "text-blue-600",
}) {
  return (
    <div className="flex-1 rounded-md  bg-white p-5 flex items-start justify-between  transition-shadow duration-300">
      {/* Text Section */}
      <div>
        <h4 className="text-sm sm:text-lg  font-medium text-gray-500">
          {title}
        </h4>
        <p className="text-lg sm:text-2xl  font-extrabold text-gray-900 mt-1">
          {value}
        </p>
        <span className="text-xs  text-gray-400">{subtitle}</span>
      </div>

      {/* Icon Section */}
      <div className={`p-2  rounded-sm ${color}`}>
        <div className={` rounded-sm ${color}`}>
          <img src={icon} alt="icon" className="w-6 h-6 p-0.5" />
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
