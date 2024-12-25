import { X, LogOut } from "lucide-react";
import  { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Activities from "./Activities";
import Allusers from "./Alluser"; // Assuming you have this component for user management
import CreateBlog from "./CreateBlog"; // Assuming you have this component
import CreateEvent from "./CreateEvent"; // Assuming you have this component
import CreatePackage from "./CreatePackage";
function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard"); // Default to "dashboard" or any other component

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Activities />;
      case "allUsers":
        return <Allusers />;
      case "createBlog":
        return <CreateBlog />;
      case "createEvent":
        return <CreateEvent />;
      case "createPackage":
        return <CreatePackage />;
      default:
        return <Activities />;
    }
  };

  return (
    <div className="flex gap-5 h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 w-64  bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 flex flex-col`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <h1 className="text-xl font-semibold">Admin Panel</h1>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden">
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Links with Active Tab Management */}
        <Sidebar setActiveTab={setActiveTab} />
        <div className="mt-auto border-t border-gray-200">
          <button className="w-full flex items-center px-8 py-3 text-gray-600 hover:bg-gray-100 transition-colors">
            <LogOut className="w-5 h-5 mr-4" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Header />
        {renderTabContent()}
      </div>
    </div>
  );
}

export default AdminDashboard;
