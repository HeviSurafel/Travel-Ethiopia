import { LayoutDashboard, UserPlus, LogIn, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import useAuthStore from "../store/store";
import { useEffect } from "react";

const Navbar = () => {
  const { user, logout } = useAuthStore();

  useEffect(() => {
    // Optional: Handle any side-effects for user state updates here
  }, [user]);

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };
  // Check if the user is an admin or a regular user
  const isAdmin = user?.role === "admin";
  const isUser = user?.role === "user";

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-emerald-400 flex items-center space-x-2"
          >
            Hevi Travel
          </Link>

          <nav className="flex flex-wrap items-center gap-5">
            <Link
              to="/"
              className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/event"
              className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
            >
              Event
            </Link>
            <Link
              to="/destination"
              className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
            >
              Destination
            </Link>
            <Link
              to="/blog"
              className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
            >
              Blog
            </Link>

            {isAdmin ? (
             <>
              <Link
                to="/admin/dashboard"
                className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center"
              >
                <LayoutDashboard className="inline-block mr-1" size={18} />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
              <button
                  onClick={handleLogout}
                  className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
                >
                  <LogOut size={18} />
                  <span className="hidden sm:inline ml-2">Log Out</span>
                </button>
             </>
            ) : isUser ? (
              <div className="flex justify-center items-center gap-2">
                <span className="px-3 text-emerald-400 font-bold uppercase">
                  {user?.user?.name || "User"}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
                >
                  <LogOut size={18} />
                  <span className="hidden sm:inline ml-2">Log Out</span>
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link
                  to="/signup"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
                >
                  <UserPlus className="mr-2" size={18} />
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
                >
                  <LogIn className="mr-2" size={18} />
                  Login
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
