import React, { useState } from "react";

function EventForm({addEvent, setShowForm}) {
  // State for form inputs
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    category: "Social",
    description: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Event:", formData);
    addEvent(formData)
    setShowForm(false); // Close modal after submission
  };

  return (
    <div className=" bg-white p-6 rounded-lg w-full max-w-lg">
      

      {/* Form Title */}
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
        Add New Event
      </h2>

      {/* Event Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Event Title */}
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-blue-400"
        />

        {/* Event Date */}
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-blue-400"
        />

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-blue-400"
        />

        {/* Category Dropdown */}
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-blue-400"
        >
          <option value="social">Social</option>
          <option value="educational">Educational</option>
          <option value="religious">Religious</option>
          <option value="charity">Charity</option>
        </select>

        {/* Event Description */}
        <textarea
          name="description"
          placeholder="Event Description"
          value={formData.description}
          onChange={handleChange}
          required
          rows="3"
          className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-blue-400"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add Event
        </button>

        {/* Cancel Button */}
        <button
          type="button"
          onClick={() => setShowForm(false)}
          className="bg-gray-400 text-white py-2 rounded-md hover:bg-gray-500 transition"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EventForm;

