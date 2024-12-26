import React from 'react';
import { Link } from "react-router-dom";
import {
  Calendar,
  Users,
  Activity,
  FileText,
  Home
} from 'lucide-react';

const SideBar = () => {
  const menuItems = [
    { icon: Home, label: 'Home', path: '/Home' },
    { icon: Users, label: 'Doctors', path: '/Doctor' },
    { icon: Activity, label: 'Feed', path: '/Feed' },
    { icon: FileText, label: 'Patients', path: '/Patient' },
    { icon: Calendar, label: 'Appointments', path: '/Appointment' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200">
      <div className="flex flex-col h-full">
        {/* Logo Section */}
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-blue-600">HealthCare</h1>
        </div>
        
        {/* Navigation Menu */}
        <div className="flex-1 px-4 py-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg mb-2 transition-colors duration-200"
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3 px-4 py-3 bg-blue-50 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-white font-medium">A</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Admin User</p>
              <p className="text-xs text-gray-500">admin@healthcare.com</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar