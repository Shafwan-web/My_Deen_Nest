import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";


const data = [
  { name: "Subscription", value: 75, color: "#0f766e" }, // teal
  { name: "Demo", value: 25, color: "#f97316" }, // orange
];

function PlanDistribution() {
  return (
    <div className="bg-white rounded-md  p-5">
      <h3 className="font-bold  text-sm mb-4  sm:text-base">Plan Distribution</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            
            outerRadius={90}
            innerRadius={60}
            dataKey="value"
            label={({ name, value }) => `${name} (${value})`}
          
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
              <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PlanDistribution;
