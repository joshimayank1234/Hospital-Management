const Footer = () => {
  return (
    <footer className="bg-white shadow-sm px-6 py-4 mt-auto">
      <div className="flex justify-between items-center">
        <p className="text-gray-600">© 2024 HealthCare. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">Privacy Policy</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Terms of Service</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;