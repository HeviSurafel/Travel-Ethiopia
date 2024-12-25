import {useState} from 'react'
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
  import { render } from "react-dom";
function Header() {
      const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <header className="bg-white border-b border-gray-200">
    <div className="flex items-center justify-between px-6 h-16">
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="lg:hidden"
      >
        <Menu size={24} />
      </button>
      <div className="flex items-center">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Admin profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  </header>
  )
}

export default Header
