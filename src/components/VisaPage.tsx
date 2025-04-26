// app/visa/page.tsx (or use inside any Next.js page)
"use client";

import React, { useState } from "react";
import CountryCard from "@/components/CountryCard";

const visaData = [
  {
    country: "Australia",
    category: "Instant",
    image: "/australia.jpeg",
    visaType: "Visa issued on arrival",
  },
  {
    country: "Belgium",
    category: "Instant",
    image: "/belgium.jpeg",
    visaType: "Visa issued on arrival",
  },
  {
    country: "Bulgaria",
    category: "Instant",
    image: "/bulgaria.jpeg",
    visaType: "Visa issued on arrival",
  },
  {
    country: "Canada",
    category: "In a month",
    image: "/canada.jpeg",
    visaType: "Visa issued on arrival",
  },
  {
    country: "China",
    category: "In a week",
    image: "/china.jpeg",
    visaType: "Visa issued in a week",
  },
  {
    country: "Combodia",
    category: "In a week",
    image: "/combodia.jpeg",
    visaType: "Visa issued in a week",
  },
];

const VisaPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredData =
    selectedFilter === "All"
      ? visaData
      : visaData.filter((item) => item.category === selectedFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-10">
      <h1 className="text-5xl font-bold mb-6 text-center">Tranding Visas</h1>

      {/* Search Bar */}
      {/* Filters */}
      <div className="flex gap-3 justify-center mb-8 mt-20">
        {["All", "Instant", "In a week", "In a month"].map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-2 rounded-full border ${
              selectedFilter === filter
                ? "bg-black text-white"
                : "bg-white text-gray-800"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Country Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <CountryCard
            key={item.country}
            country={item.country}
            image={item.image}
            visaType={item.visaType}
            onClick={() => alert(`More details about ${item.country}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default VisaPage;
