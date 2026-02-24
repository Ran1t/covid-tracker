import React from "react";

function StatsTable({ data }) {
  return (
    <div className="flex justify-center">
      <table className="bg-white shadow-2xl rounded-2xl overflow-hidden text-lg">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-4">Country</th>
            <th className="p-4">Cases</th>
            <th className="p-4">Recovered</th>
            <th className="p-4">Deaths</th>
          </tr>
        </thead>

        <tbody>
          <tr className="text-center">
            <td className="p-4 font-semibold">{data.country}</td>
            <td className="p-4">{data.cases.toLocaleString()}</td>
            <td className="p-4">{data.recovered.toLocaleString()}</td>
            <td className="p-4">{data.deaths.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StatsTable;