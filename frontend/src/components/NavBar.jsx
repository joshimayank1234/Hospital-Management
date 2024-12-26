import React from 'react';
import {
  Search,
  HelpCircle,
  MessageCircle,
  User
} from 'lucide-react';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-sm px-6 py-4 sticky w-full z-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">HealthCare</h1>

        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search patients, doctors, appointments..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <HelpCircle className="h-6 w-6 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <MessageCircle className="h-6 w-6 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <User className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;