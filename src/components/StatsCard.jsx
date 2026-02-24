import React from "react";

function StatsCard({ data }) {
  let bgColor = "bg-green-200";

  if (data.cases > 1000000) bgColor = "bg-red-200";
  else if (data.cases > 100000) bgColor = "bg-yellow-200";

  return (
    <div className={`p-8 rounded-3xl shadow-2xl ${bgColor} w-95`}>
      <h2 className="text-3xl font-bold mb-6 text-center">
        {data.country}
      </h2>

      <div className="space-y-4 text-xl">
        <p>🦠 Cases: {data.cases.toLocaleString()}</p>
        <p>💚 Recovered: {data.recovered.toLocaleString()}</p>
        <p>💀 Deaths: {data.deaths.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default StatsCard;