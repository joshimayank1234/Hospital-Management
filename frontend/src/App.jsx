import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SideBar from './components/SideBar'

import Doctor from './pages/Doctor'
import Appointment from './pages/Appointment'
import Home from './pages/Home'
import Feed from './pages/Feed'
import Patient from './pages/Patient'



// App.jsx
const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <BrowserRouter>
        <NavBar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="flex">
          <SideBar isOpen={isSidebarOpen} />
          <main className={`flex-1 p-6 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Doctor" element={<Doctor />} />
              <Route path="/Feed" element={<Feed />} />
              <Route path="/Patient" element={<Patient />} />
              <Route path="/Appointment" element={<Appointment />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App