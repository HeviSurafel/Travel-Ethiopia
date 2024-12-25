import {
    Users,
    PenTool,
    Calendar,
    Package,
    BarChart2,
    Menu,
    X,
    TrendingUp,
    DollarSign,
    UserPlus,
    Eye,
    LogOut,
  } from "lucide-react";
  import React, { useState } from "react";
  import { render } from "react-dom";
  import {Link} from "react-router-dom"
function Sidebar({setActiveTab }) {
  return (
    <nav className="mt-6 px-4 flex-1">
    <span className="flex items-center px-4 py-3 text-gray-700 bg-gray-100 rounded-lg"
     onClick={() => setActiveTab("dashboard")}
    >
      <BarChart2 className="w-5 h-5 mr-4" />
      Dashboard
    </span>
    <span  className="flex items-center px-4 py-3 mt-2 text-gray-600 hover:bg-gray-100 rounded-lg"
     onClick={() => setActiveTab("allUsers")}
    >
      <Users className="w-5 h-5 mr-4" />
      All Users
    </span>
    <span  className="flex items-center px-4 py-3 mt-2 text-gray-600 hover:bg-gray-100 rounded-lg"  onClick={() => setActiveTab("createBlog")}>
      <PenTool className="w-5 h-5 mr-4" />
      Create Blog
    </span>
    <span  className="flex items-center px-4 py-3 mt-2 text-gray-600 hover:bg-gray-100 rounded-lg" onClick={() => setActiveTab("createEvent")}>
      <Calendar className="w-5 h-5 mr-4" />
      Create Event
    </span>
    <span  className="flex items-center px-4 py-3 mt-2 text-gray-600 hover:bg-gray-100 rounded-lg" onClick={() => setActiveTab("createPackage")}>
      <Package className="w-5 h-5 mr-4" />
      Create Package
    </span>
  </nav>
  )
}

export default Sidebar
