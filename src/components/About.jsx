import React from "react";

function About() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-white min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text mb-6">
          About Community Hub
        </h1>

        {/* Introduction Section */}
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10">
          Community Hub is a platform dedicated to bringing people together through meaningful events. 
          Whether it's social gatherings, educational workshops, or charity drives, we strive to foster 
          a sense of belonging and unity among communities.
        </p>

        {/* Core Values Section */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-gradient-to-b from-sky-500 to-sky-200 shadow-lg rounded-xl">
            <h3 className="text-xl font-semibold text-white">Inclusivity</h3>
            <p className="text-white mt-2">
              We welcome people from all backgrounds to participate and connect.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-b from-sky-500 to-sky-200 shadow-lg rounded-xl">
            <h3 className="text-xl font-semibold text-white">Collaboration</h3>
            <p className="text-white mt-2">
              We believe in the power of teamwork and collective efforts.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-b from-sky-500 to-sky-200 shadow-lg rounded-xl">
            <h3 className="text-xl font-semibold text-white">Growth</h3>
            <p className="text-white mt-2">
              Our goal is to provide opportunities for learning and development.
            </p>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center text-sky-700 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
            At Community Hub, our mission is to create a strong, connected, and engaged society 
            by organizing impactful events. We aim to be the bridge that fosters social well-being 
            and supports meaningful initiatives.
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center text-sky-700 mb-6">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white shadow-lg rounded-xl">
              <img
                src="https://via.placeholder.com/100"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-sky-600">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-xl">
              <img
                src="https://via.placeholder.com/100"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-sky-600">Jane Smith</h3>
              <p className="text-gray-600">Event Coordinator</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-xl">
              <img
                src="https://via.placeholder.com/100"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-sky-600">Michael Lee</h3>
              <p className="text-gray-600">Community Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

