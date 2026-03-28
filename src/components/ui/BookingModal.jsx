import React, { useEffect } from "react";
import { BOOKING_URL } from "@/config";

export default function BookingModal({ onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="fixed inset-0 z-[200] flex flex-col">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div className="relative z-10 flex flex-col w-full h-full md:m-auto md:w-[90vw] md:h-[90vh] md:max-w-5xl md:rounded-2xl overflow-hidden shadow-2xl">
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3 bg-forest text-white flex-shrink-0">
          <span className="font-semibold tracking-wide text-sm">Book a Court — DQ Tennis</span>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors text-2xl leading-none focus:outline-none"
            aria-label="Close booking"
          >
            ✕
          </button>
        </div>

        {/* iframe */}
        <iframe
          src={BOOKING_URL}
          title="Book a Court"
          className="flex-1 w-full border-0 bg-white"
          allow="payment"
        />
      </div>
    </div>
  );
}
