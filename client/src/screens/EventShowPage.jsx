import { Calendar, Clock, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";
import eventStore from "../store/event.store";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

function EventShowPage() {
  const { getEvent, upcommingevent, event, upcommingEvents } = eventStore();

  useEffect(() => {
    getEvent();
    upcommingevent();
  }, []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("current");

  const images = [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
    "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec",
    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative h-[60vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea"
          alt="Event main banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Summer Music Festival 2024
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>July 15-17, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Gates open at 2 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Central Park, NYC</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Events Section */}
      <section className="py-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Festival Events</h2>
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("current")}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              activeTab === "current"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Current Events
          </button>
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              activeTab === "upcoming"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Upcoming Events
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {(activeTab === "current" ? [event] : upcommingEvents || []).map(
            (eventItem, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={eventItem.image}
                  alt={eventItem.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{eventItem.title}</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{eventItem.date}</span>
                    </div>
                    {eventItem.time && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{eventItem.time}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{eventItem.location}</span>
                    </div>
                  </div>
                  {/* <p className="mt-4 text-gray-600">{eventItem.description}</p> */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold"
                  >
                    <Link to={`/event/detail/:${event._id}`}>Learn More</Link>
                  </motion.button>
                  
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default EventShowPage;
