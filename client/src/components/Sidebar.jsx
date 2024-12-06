import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <ul>
        <li><Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-700 rounded">Dashboard</Link></li>
        <li><Link to="/dashboard/events" className="block py-2 px-4 hover:bg-gray-700 rounded">Events</Link></li>
        <li><Link to="/dashboard/packages" className="block py-2 px-4 hover:bg-gray-700 rounded">Packages</Link></li>
        <li><Link to="/dashboard/users" className="block py-2 px-4 hover:bg-gray-700 rounded">Users</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
