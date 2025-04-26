"use client";
import { useState } from "react";

const countries = [
  { name: "Malaysia", flag: "🇲🇾" },
  { name: "Dubai", flag: "🇦🇪" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Turkey", flag: "🇹🇷" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "France", flag: "🇫🇷" },
  { name: "Thailand", flag: "🇹🇭" },
  { name: "Vietnam", flag: "🇻🇳" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "Switzerland", flag: "🇨🇭" },
  { name: "USA", flag: "🇺🇸" },
  { name: "South Africa", flag: "🇿🇦" },
];

const countryDetails: { [key: string]: string } = {
  Malaysia: `
Passport:

Passport should be valid for at least 6 months from the date of departure from Malaysia.
Handwritten passport and passports valid for more than 10 years are not accepted.
Coloured scanned copy of the passport.

Travel Details

Flight Tickets
Copy of confirmed Arrival and Departure tickets.

Hotel Reservation

Copy of confirmed hotel reservation, including the hotel address, contact number, applicant's name, and reservation dates for the entire duration of travel.

Additional Information

Process Time
MDAC process time to apply is 48 Hours prior including arrival date
  
  `,
  Dubai: `
  Passport:
  - Valid for 6 months.
  - Clear scan required.

  Travel:
  - Round trip flight tickets.
  - Hotel reservation.

  Extras:
  - Processing: 48 Hours
  `,
  // Add rest countries similarly
};

export default function VisaRequirements() {
  const [selectedCountry, setSelectedCountry] = useState("Malaysia");

  return (
    <div className="bg-[#101623] text-white mt-10 ">
      <h1 className="text-5xl font-bold mb-6 text-center pt-20">
        Visa Requirements
      </h1>
      <div className="max-w-7xl mx-auto px-8 py-12 flex gap-8">
        {/* Left - Selectors */}
        <div className="w-1/2 ">
          <h2 className="text-lg font-semibold mb-4">Select a purpose:</h2>
          <div className="flex gap-4 mb-8">
            <button className="bg-[#1e273d] px-6 py-2 rounded flex items-center gap-2">
              🧳 Tourism
            </button>
            <button className="bg-[#1e273d] px-6 py-2 rounded flex items-center gap-2">
              💼 Business
            </button>
          </div>

          <h2 className="text-lg font-semibold mb-4">Select a country:</h2>
          <div className="grid grid-cols-2 gap-3">
            {countries.map((country) => (
              <button
                key={country.name}
                onClick={() => setSelectedCountry(country.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded ${
                  selectedCountry === country.name
                    ? "bg-[#1e273d]"
                    : "hover:bg-[#1e273d]/50"
                }`}
              >
                <span>{country.flag}</span>
                {country.name}
              </button>
            ))}
          </div>

          <button className="mt-8 px-6 py-3 rounded bg-[#1e273d] flex items-center justify-between gap-2 w-fit">
            🌍 & 98+ other countries →
          </button>
        </div>

        {/* Center divider */}
        <div className="w-px bg-gray-600 opacity-40" />

        {/* Right - Visa Info Box */}
        <div className="w-1/2 bg-[#1e273d] p-6 rounded-xl max-h-[80vh] overflow-y-auto">
          <h3 className="text-xl font-bold mb-4">Traveller Details</h3>
          <pre className="whitespace-pre-wrap leading-relaxed text-sm">
            {countryDetails[selectedCountry] || "Details coming soon..."}
          </pre>
          {/* <div className="mt-6 flex justify-end">
            <button className="bg-[#635bff] px-4 py-2 rounded text-white text-sm hover:bg-[#7e76ff] transition">
              🔗 Share requirements
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
