import React, { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md border-b border-gray-200 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo with proper routing */}
        <Link to="/" className="flex items-center">
          <img
            src="https://communionhub.org/static/media/Logocommunion.0485ada0760e4748313f.png"
            alt="Communion Logo"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-x-8 text-xl text-gray-700 font-semibold">
          <li className="hover:text-blue-500 transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-500 transition duration-300">
            <Link to="/events">Events</Link>
          </li>
          <li className="hover:text-blue-500 transition duration-300">
            <Link to="/about">About</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (with animation) */}
      <div
        className={`md:hidden fixed top-0 left-0 h-screen w-full bg-white transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-6 text-gray-700"
          onClick={() => setMenuOpen(false)}
        >
          <X size={32} />
        </button>
        <ul className="flex flex-col items-center gap-y-6 text-lg text-gray-700 mt-20">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
