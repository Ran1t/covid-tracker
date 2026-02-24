import React, { useState, useEffect } from 'react'
import axios from "axios"
import CountrySelector from "../components/CountrySelector"
import StatsCard from "../components/StatsCard"
import StatsTable from "../components/StatsTable"
import ToggleView from "../components/ToggleView"

function Dashboard() {
    const [data, setData] = useState([])
    const [selectCountry, setSelectedCountry] = useState("")
    const [view, setView] = useState("card")
    const [globalData, setGlobalData] = useState(null)

    useEffect(() => {
        axios.get("https://disease.sh/v3/covid-19/countries")
            .then((res) => setData(res.data))

        axios.get("https://disease.sh/v3/covid-19/all")
            .then((res) => setGlobalData(res.data))
    }, [])

    const selectedData = data.find(
        (c) => c.country === selectCountry
    )

    return (
        <div
            className="min-h-screen bg-cover bg-center p-6"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1589519160732-57fc498494f8')"
            }}
        >
            {/* Overlay */}
            <div className="bg-black/60 min-h-screen p-6 rounded-xl">

                {/* 🌍 Global Summary */}
                <div className="flex justify-center">
                    {globalData && (
                        <div className="bg-white shadow-xl rounded-2xl p-6 mb-6 text-center w-87.5">
                            <h2 className="text-xl font-semibold mb-3">
                                🌍 Global Summary
                            </h2>
                            <p>Cases: {globalData.cases.toLocaleString()}</p>
                            <p>Recovered: {globalData.recovered.toLocaleString()}</p>
                            <p>Deaths: {globalData.deaths.toLocaleString()}</p>
                        </div>
                    )}
                </div>

                {/* Dropdown */}
                <div className="flex justify-center mt-4">
                    <div className="bg-white/90 p-4 rounded-xl shadow-lg">
                        <CountrySelector
                            data={data}
                            setSelectedCountry={setSelectedCountry}
                            selectCountry={selectCountry}
                        />
                    </div>
                </div>

                {/* Selected Country */}
                <p className="text-center mt-4 text-lg text-white">
                    Selected Country:
                    <span className="font-semibold ml-2">
                        {selectCountry || "None"}
                    </span>
                </p>

                {/* Toggle */}
                <ToggleView view={view} setView={setView} />

                {/* Card / Table */}
                <div className="flex justify-center mt-8">
                    {selectedData &&
                        (view === "card" ? (
                            <StatsCard data={selectedData} />
                        ) : (
                            <StatsTable data={selectedData} />
                        ))}
                </div>

            </div>
        </div>
    )
}

export default Dashboard