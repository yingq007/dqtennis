import React from "react";

export default function Card({ title, children }) {
  return (
    <div className="card bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{children}</p>
    </div>
  );
}
