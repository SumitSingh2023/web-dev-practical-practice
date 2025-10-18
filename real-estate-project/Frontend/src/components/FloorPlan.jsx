// FloorPlanComponent.jsx
import React, { useState } from "react";

const plans = [
  "Master Plan",
  "Ground Floor Plan",
  "Typical Floor Plan",
  "Terrace Floor Plan",
  "Unit Plan A",
  "Unit Plan B",
  "Unit Plan C",
];

const FloorPlanComponent = () => {
  const [activePlan, setActivePlan] = useState("Typical Floor Plan");

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Plans</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {plans.map((plan) => (
          <button
            key={plan}
            onClick={() => setActivePlan(plan)}
            className={`px-4 py-2 rounded-lg border transition-colors ${
              activePlan === plan
                ? "bg-teal-500 text-white border-teal-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-teal-100"
            }`}
          >
            {plan}
          </button>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800"
          alt="Floor Plan"
          className="w-full md:w-2/3 rounded-lg shadow-md"
        />
        <div className="md:w-1/3 bg-gray-50 p-4 rounded-lg shadow-inner">
          <h3 className="font-semibold mb-2">Floor Plan Details</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">Flat</th>
                <th>Area (sq ft)</th>
                <th>Total Carpet</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>1480</td>
                <td>2454</td>
              </tr>
              <tr className="bg-gray-100">
                <td>2</td>
                <td>1480</td>
                <td>2454</td>
              </tr>
              <tr>
                <td>3</td>
                <td>1480</td>
                <td>2454</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FloorPlanComponent;
