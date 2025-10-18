import React from "react";
import { FaSchool, FaShoppingCart, FaUtensils, FaHospital, FaBuilding, FaPlane } from "react-icons/fa";

const facilities = [
  {
    id: 1,
    icon: <FaSchool size={30} className="text-white" />,
    title: "SCHOOL",
    list: [
      "Salt Lake Siksha Niketan – 1.1 kms",
      "The Newtown School – 2.6 kms",
      "DPS Newtown – 4.2 kms",
    ],
  },
  {
    id: 2,
    icon: <FaPlane size={30} className="text-white" />,
    title: "CONNECTIVITY",
    list: [
      "Salt Lake Sec V Metro Station – 3.1 kms",
      "Kolkata Railway Station – 10.5 kms",
      "Airport – 10.6 kms",
    ],
  },
  {
    id: 3,
    icon: <FaShoppingCart size={30} className="text-white" />,
    title: "MARKET",
    list: [
      "Axis Mall – 2.6 kms",
      "City Centre 1 – 5.8 kms",
      "Mani Square – 6.8 kms",
    ],
  },
  {
    id: 4,
    icon: <FaUtensils size={30} className="text-white" />,
    title: "RESTAURANTS",
    list: [
      "Novotel – 2.4 kms",
      "Fairfield – 3.0 kms",
      "Hyatt Regency – 6.5 kms",
    ],
  },
  {
    id: 5,
    icon: <FaHospital size={30} className="text-white" />,
    title: "HOSPITAL",
    list: [
      "Ohio Hospital – 3.6 kms",
      "Tata Medical Centre – 3.9 kms",
      "AMRI Hospital, Salt Lake – 5.7 kms",
    ],
  },
  {
    id: 6,
    icon: <FaBuilding size={30} className="text-white" />,
    title: "COLLEGE",
    list: [
      "Techno India – 3.4 kms",
      "Presidency University – 4.2 kms",
      "St. Xavier’s University – 5.8 kms",
    ],
  },
];

const FacilitiesSection = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center mb-8">
        <button className="bg-teal-400 text-white px-6 py-2 rounded-md font-semibold hover:bg-teal-500 transition">
          DOWNLOAD BROCHURE
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {facilities.map((fac) => (
          <div
            key={fac.id}
            className="light-blue rounded-lg p-6 flex flex-col items-center text-center hover:bg-teal-600 transition"
          >
            <div className="mb-4">{fac.icon}</div>
            <h3 className="font-bold text-lg mb-3">{fac.title}</h3>
            <ul className="text-sm space-y-1">
              {fac.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacilitiesSection;
