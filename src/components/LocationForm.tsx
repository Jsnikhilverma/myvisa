"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface Country {
  name: string;
}

// interface State {
//     name: string;
// }

export default function LocationForm() {
  const [countries, setCountries] = useState<string[]>([]);

  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");

  // Fetch country list
  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/states")
      .then((res) => {
        setCountries(res.data.data.map((c: Country) => c.name));
      })
      .catch((err) => console.error("Error fetching countries:", err));
  }, []);

  // Fetch states for selected country
  // useEffect(() => {
  //     if (selectedCountry) {
  //         axios
  //             .post("https://countriesnow.space/api/v0.1/countries/states", {
  //                 country: selectedCountry,
  //             })
  //             .then((res) => {
  //                 setStates(res.data.data.states.map((s: State) => s.name));
  //             })
  //             .catch((err) => console.error("Error fetching states:", err));
  //     }
  // }, [selectedCountry]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", {
      country: selectedCountry,
      state: selectedState,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-4xl mx-auto text-white p-6 rounded-lg shadow-lg"
    >
      <div className="flex flex-row items-end justify-between gap-4 flex-wrap">
        <div className="flex flex-col flex-1 min-w-[200px]">
          <label htmlFor="country" className="mb-1 font-medium">
            Your Passpost
          </label>
          <select
            id="country"
            className="border px-3 py-3 rounded-md" // Increased height by changing py-2 to py-3
            value={selectedCountry}
            onChange={(e) => {
              setSelectedCountry(e.target.value);
              setSelectedState("");
            }}
          >
            <option value="">Select a country</option>
            {countries.map((country, idx) => (
              <option key={idx} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col flex-1 min-w-[200px]">
          <label htmlFor="country" className="mb-1 font-medium">
            You want to go
          </label>
          <select
            id="country"
            className="border px-3 py-3 rounded-md" // Increased height by changing py-2 to py-3
            value={selectedCountry}
            onChange={(e) => {
              setSelectedCountry(e.target.value);
              setSelectedState("");
            }}
          >
            <option value="">Select a country</option>
            {countries.map((country, idx) => (
              <option key={idx} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>
    </form>
  );
}
