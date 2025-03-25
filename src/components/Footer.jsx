import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-semibold text-white">Community Hub</h2>
            <p className="mt-2 text-sm">
              Connecting people through events, fostering relationships, and building a stronger community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Events</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white"><Facebook size={24} /></a>
              <a href="#" className="hover:text-white"><Twitter size={24} /></a>
              <a href="#" className="hover:text-white"><Instagram size={24} /></a>
              <a href="#" className="hover:text-white"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Community Hub. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
