import React from "react";

export default function Card({ title, children }) {
  return (
    <div className="card bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-clay">
      <h3 className="text-xl font-semibold mb-2 text-forest">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  );
}
