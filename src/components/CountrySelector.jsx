import React from "react";

function CountrySelector({ data, setSelectedCountry, selectCountry }) {
  return (
    <select
      value={selectCountry}
      onChange={(e) => setSelectedCountry(e.target.value)}
      className="w-62.5 p-3 rounded-lg border border-gray-300 bg-white text-black shadow-md appearance-none focus:outline-none"
    >
      <option value="">-- Select Country --</option>

      {data.map((c) => (
        <option key={c.country} value={c.country}>
          {c.country}
        </option>
      ))}
    </select>
  );
}

export default CountrySelector;