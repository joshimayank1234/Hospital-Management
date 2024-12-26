import React from 'react';
import {
  Users,
  Activity,
  Clock,
  Calendar,
  Stethoscope ,
  ArrowUp,
  Bell,
  ArrowDown
} from 'lucide-react';

const Home = () => {
  // Sample data for stats and appointments
  const stats = [
    { label: 'Total Patients', value: '1,234', trend: '+12%', isUp: true },
    { label: 'Available Doctors', value: '48', trend: '+3%', isUp: true },
    { label: 'Appointments Today', value: '86', trend: '-5%', isUp: false },
    { label: 'Active Treatments', value: '156', trend: '+8%', isUp: true }
  ];

  const upcomingAppointments = [
    { time: '09:00 AM', patient: 'Sarah Johnson', doctor: 'Dr. Smith', type: 'General Checkup' },
    { time: '10:30 AM', patient: 'Michael Brown', doctor: 'Dr. Davis', type: 'Dental Care' },
    { time: '11:45 AM', patient: 'Emma Wilson', doctor: 'Dr. Garcia', type: 'Cardiology' }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Welcome to HealthCare</h1>
            <p className="text-gray-600 mt-1">Dashboard Overview • {new Date().toLocaleDateString()}</p>
          </div>
          <button className="p-2 relative bg-gray-100 hover:bg-blue-100 rounded-full">
            <Stethoscope className="h-9 w-9 text-gray-600" /> 
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
              </div>
              <span className={`flex items-center text-sm ${stat.isUp ? 'text-green-600' : 'text-red-600'}`}>
                {stat.isUp ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
                {stat.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Appointments */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Today's Appointments
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">
                      {appointment.patient.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="font-semibold">{appointment.patient}</h4>
                    <p className="text-sm text-gray-600">{appointment.doctor} • {appointment.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{appointment.time}</p>
                    <span className="text-xs text-green-600">Confirmed</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold">Quick Actions</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Users className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                <span className="text-sm font-medium">New Patient</span>
              </button>
              <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Calendar className="h-6 w-6 mx-auto mb-2 text-green-600" />
                <span className="text-sm font-medium">Schedule</span>
              </button>
              <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Activity className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                <span className="text-sm font-medium">Reports</span>
              </button>
              <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Bell className="h-6 w-6 mx-auto mb-2 text-orange-600" />
                <span className="text-sm font-medium">Notifications</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;