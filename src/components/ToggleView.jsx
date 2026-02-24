import React from "react";

function ToggleView({ view, setView }) {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <button
        onClick={() => setView("card")}
        className={`px-4 py-2 rounded ${
          view === "card"
            ? "bg-blue-500 text-white"
            : "bg-gray-200"
        }`}
      >
        Card View
      </button>

      <button
        onClick={() => setView("table")}
        className={`px-4 py-2 rounded ${
          view === "table"
            ? "bg-blue-500 text-white"
            : "bg-gray-200"
        }`}
      >
        Table View
      </button>
    </div>
  );
}

export default ToggleView;