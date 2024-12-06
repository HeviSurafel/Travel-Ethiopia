import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./screens/homepage";
import LoginPage from "./screens/LogInPage";
import Blog from "./screens/Blog";
import Service from "./components/Service";
import ContactForm from "./components/ContactForm";
import SignUp from "./screens/SignUp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import BlogLayout from "./Layout/BlogLayout";
import Event from "./screens/Event";
import DestinationPage from "./screens/DestinationPage";
import DetailPage from "./screens/DetailPage";
import EventPage from "./screens/EventPage";
import Dashboard from "./screens/Dashboard";
import useAuthStore from "./store/store";
import { useEffect } from "react";

function ProtectedRoute({
  element: Component,
  isAuthenticated,
  path,
  ...rest
}) {
  return isAuthenticated ? <Component {...rest} /> : <Navigate to={path} />;
}

function App() {
  const { checkAuth, user } = useAuthStore();
  const isUserLoggedIn = !!user?.username; // Boolean value for user authentication
  // useEffect(() => {
  //   const res = checkAuth();
  //   console.log(res);
  // });

  return (
    <div className="flex flex-col gap-5">
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route index element={<Homepage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/event" element={<Event />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/eventpage" element={<EventPage />} />
        
        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              element={Dashboard}
              isAuthenticated={isUserLoggedIn}
              path="/dashboard"
            />
          }
        />
        <Route
          path="/blog"
          element={
            <ProtectedRoute
              element={BlogLayout}
              isAuthenticated={isUserLoggedIn}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
