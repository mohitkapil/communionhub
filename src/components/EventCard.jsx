import React from "react";
import { Calendar, MapPin } from "lucide-react";

function EventCard({ title, date, location, category, description }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 max-w-sm transition hover:scale-105 hover:shadow-lg">
      {/* Category Badge */}
      <div className="mb-3">
        <span
          className={`px-3 py-1 text-sm font-semibold rounded-full text-white ${
            category === "social"
              ? "bg-blue-500"
              : category === "religious"
              ? "bg-purple-500"
              : "bg-green-500"
          }`}
        >
          {category}
        </span>
      </div>

      {/* Event Title */}
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>

      {/* Date and Location */}
      <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
        <Calendar size={16} />
        <span>{date}</span>
      </div>
      <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
        <MapPin size={16} />
        <span>{location}</span>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm mt-3">{description}</p>
    </div>
  );
}

export default EventCard;
