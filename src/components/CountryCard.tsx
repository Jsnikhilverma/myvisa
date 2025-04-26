// components/CountryCard.tsx
import React from "react";

interface CountryCardProps {
  country: string;
  image: string;
  visaType: string;
  onClick: () => void;
}

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  image,
  visaType,
  onClick,
}) => (
  <div
    className="rounded-xl shadow-md overflow-hidden relative cursor-pointer"
    onClick={onClick}
  >
    <img src={image} alt={country} className="w-full h-48 object-cover" />
    <button className="absolute top-3 left-3 bg-black bg-opacity-60 text-white px-3 py-1 text-sm rounded">
      Apply for {country} Visa
    </button>
    <div className="p-3">
      <h3 className="font-semibold">{country}</h3>
      <p className="text-sm text-gray-500">{visaType}</p>
    </div>
  </div>
);

export default CountryCard;
