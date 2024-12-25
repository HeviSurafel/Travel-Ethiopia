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
  import Sidebar from "./Sidebar";
  import Header from "./Header";
function Activities() {
  return (
   
    <main className="p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <div className="p-3 bg-blue-100 rounded-full">
            <TrendingUp className="w-6 h-6 text-blue-600" />
          </div>
          <div className="ml-4">
            <p className="text-gray-500">Total Sales</p>
            <p className="text-2xl font-semibold">$24,563</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <div className="p-3 bg-green-100 rounded-full">
            <DollarSign className="w-6 h-6 text-green-600" />
          </div>
          <div className="ml-4">
            <p className="text-gray-500">Revenue</p>
            <p className="text-2xl font-semibold">$18,230</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <div className="p-3 bg-purple-100 rounded-full">
            <UserPlus className="w-6 h-6 text-purple-600" />
          </div>
          <div className="ml-4">
            <p className="text-gray-500">New Users</p>
            <p className="text-2xl font-semibold">573</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <div className="p-3 bg-yellow-100 rounded-full">
            <Eye className="w-6 h-6 text-yellow-600" />
          </div>
          <div className="ml-4">
            <p className="text-gray-500">Page Views</p>
            <p className="text-2xl font-semibold">24,312</p>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-8 bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-semibold">Recent Activity</h2>
        <div className="mt-4">
          <div className="border-b py-3">
            <p className="text-sm">New user registered</p>
            <p className="text-xs text-gray-500">2 minutes ago</p>
          </div>
          <div className="border-b py-3">
            <p className="text-sm">New blog post created</p>
            <p className="text-xs text-gray-500">1 hour ago</p>
          </div>
          <div className="border-b py-3">
            <p className="text-sm">Event "Summer Sale" created</p>
            <p className="text-xs text-gray-500">3 hours ago</p>
          </div>
          <div className="py-3">
            <p className="text-sm">New package added</p>
            <p className="text-xs text-gray-500">5 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Activities
