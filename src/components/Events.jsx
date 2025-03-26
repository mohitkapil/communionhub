import React, { useState } from "react";
import EventForm from "./EventForm";
import EventCard from "./EventCard";
import { Plus } from "lucide-react";

function Events() {
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Initial event list
  const [eventList, setEventList] = useState([
    {
      title: "Interfaith Prayer Meeting",
      date: "March 17, 2025",
      location: "Ranchi",
      category: "religious",
      description:
        "Join us for an evening of prayer and reflection across different faith traditions. All are welcome to participate and share.",
    },
    {
      title: "Community Picnic & Networking",
      date: "March 4, 2025",
      location: "Dhanbad",
      category: "social",
      description:
        "Come and enjoy a fun-filled picnic with food, games, and networking opportunities. Bring your family and friends!",
    },
    {
      title: "Sunday Morning Worship",
      date: "March 16, 2025",
      location: "Ranchi",
      category: "educational",
      description:
        "Join our weekly worship service and spiritual discussions. Everyone is welcome to share their experiences and learn.",
    },
    {
      title: "Fundraiser for Local Shelter",
      date: "March 2, 2025",
      location: "Kolkata",
      category: "charity",
      description:
        "Help support our local homeless shelter by attending this fundraising dinner. Your contributions will make a difference.",
    },
  ]);

  // Function to add a new event
  const addEvent = (newEvent) => {
    setEventList([...eventList, newEvent]); // Add new event
  };

  // Function to filter events by category
  const filteredEvents =
    selectedCategory === "all"
      ? eventList
      : eventList.filter((event) => event.category === selectedCategory);

  return (
    <div className="flex flex-col items-center gap-y-6 px-4 relative">
      {/* Main Heading */}
      <h1 className="text-3xl md:text-5xl font-normal text-center">
        Bringing communities together to thrive
      </h1>

      {/* Upcoming Events Title */}
      <h2 className="text-2xl md:text-4xl font-semibold text-sky-700 text-center">
        Upcoming Events
      </h2>

      {/* Add Event Button */}
      <button
        onClick={() => setShowForm(true)}
        className="flex items-center justify-center rounded-md bg-gradient-to-r from-sky-400 to-sky-700 bg-[length:200%] py-2 px-4 text-lg text-white transition-all duration-500 hover:bg-right shadow-md"
      >
        <Plus /> Add New Event
      </button>

      {/* Event Form Modal */}
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full">
            <button
              onClick={() => setShowForm(false)}
              className="text-gray-600 hover:text-gray-900 float-right text-lg font-bold"
            >
              ✕
            </button>
            <EventForm addEvent={addEvent}  setShowForm={setShowForm}/>
          </div>
        </div>
      )}

      {/* Event Filter Buttons */}
      <div className="px-6 py-10 bg-gradient-to-br from-blue-100 to-white min-h-screen w-full">
        <div className="mb-6 flex justify-center gap-3 flex-wrap">
          {["all", "social", "religious", "educational", "charity"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-lg px-4 py-1 text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-sky-500 text-white"
                    : "bg-white text-gray-600 border border-gray-300"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            )
          )}
        </div>

        {/* Event Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No events available in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Events;
