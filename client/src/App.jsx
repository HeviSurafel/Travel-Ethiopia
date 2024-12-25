import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Homepage from "./screens/homepage";
import LoginPage from "./screens/LogInPage";
import Blog from "./screens/Blog";
import Service from "./components/Service";
import ContactForm from "./components/ContactForm";
import SignUp from "./screens/SignUp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import DestinationPage from "./screens/DestinationPage";
import AdminDashboard from "./screens/AdminScreen/AdminDashboard";
import LoadingSpinner from "./components/LoadingSpinner";
import { Toaster } from "react-hot-toast";
import useAuthStore from "./store/store";
import Alluser from "./screens/AdminScreen/Alluser";
import Detail from "./screens/Detail";
import ScrollToTop from "./components/ScrollToTop";
import EventShowPage from "./screens/EventShowPage";
import EventDetailPage from "./screens/EventDetailPage";
const ProtectedRoute = ({ element, condition, redirectTo = "/login" }) => {
  if (condition === undefined || condition === null) {
    return <Navigate to={redirectTo} />;
  }
  return condition ? element : <Navigate to={redirectTo} />;
};

function App() {
  const { user, checkAuth, checkingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (checkingAuth) return <LoadingSpinner />;

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="pt-16 bg-[#F3F4F6]">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Homepage />} />
          <Route
            path="/login"
            element={user === null ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={user === null ? <SignUp /> : <Navigate to="/" />}
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/event" element={<EventShowPage />} />
          <Route path="/event/detail/:id" element={<EventDetailPage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/detail/:id" element={<Detail />} />
          Admin Route
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute
                element={<AdminDashboard />}
                condition={user?.role === "admin"}
              />
            }
          />
          <Route
            path="/dashboard/users"
            element={
              <ProtectedRoute
                element={<Alluser />}
                condition={user?.role === "admin"}
              />
            }
          />
        
        </Routes>
      </div>
      <ScrollToTop />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
