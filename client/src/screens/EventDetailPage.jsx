import {
  Calendar,
  Clock,
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import useAuthStore from "../store/store"
import  { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import eventStore from "../store/event.store";
import toast from "react-hot-toast";
function Modal({ isVisible, onClose, children }) {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
 
function EventDetailPage() {
  const { id } = useParams();
  const { event, upcommingEvents, detailEvent } = eventStore();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const{user}=useAuthStore();
  useEffect(() => {
    detailEvent(id);
  }, [id, detailEvent]);
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === (event?.images?.length || 1) - 1 ? 0 : prevIndex + 1,
    );
  };
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? (event?.images?.length || 1) - 1 : prevIndex - 1,
    );
  };
  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }
  const handleRegister=()=>{
    
  }
  return (
    <main className="min-h-screen bg-white">
      <header className="relative h-[75vh] w-full overflow-hidden">
        <motion.img
          initial={{
            scale: 1.1,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-[2px]">
          <div className="h-full flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl mx-auto">
              <motion.h1
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              >
                {event.title}
              </motion.h1>
              <motion.div
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
                className="flex flex-col md:flex-row items-center justify-center gap-8 text-lg backdrop-blur-sm bg-white/10 py-4 px-6 rounded-2xl"
              >
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-blue-400" />
                  <span className="font-medium">{event.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-blue-400" />
                  <span className="font-medium">{event.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <span className="font-medium">{event.location}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {event.images && event.images.length > 0 && (
        <section className="py-20 px-4 md:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Event Gallery
            </h2>
            <div className="relative">
              <motion.img
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                key={currentImageIndex}
                src={event.images[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                className="w-full h-[400px] md:h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              {event.images.length > 1 && (
                <>
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg backdrop-blur-sm hover:bg-white transition-all"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                  </motion.button>
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg backdrop-blur-sm hover:bg-white transition-all"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-700" />
                  </motion.button>
                </>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">
              {event.description}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              whileHover={{
                y: -5,
              }}
              className="bg-white p-6 rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-gray-100"
            >
              <h3 className="font-semibold text-lg mb-4 text-gray-900">
                Date & Time
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span>{event.time}</span>
                </div>
              </div>
            </motion.div>
            <div className="bg-white p-6 rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-gray-100">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">
                Location
              </h3>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>{event.location}</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-gray-100">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">
                Category
              </h3>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {event.category || "Music Festival"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {upcommingEvents && upcommingEvents.length > 0 && (
        <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcommingEvents.slice(0, 3).map((upcomingEvent, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  key={index}
                  className="group bg-white rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] overflow-hidden border border-gray-100"
                >
                  <img
                    src={upcomingEvent.image}
                    alt={upcomingEvent.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      {upcomingEvent.title}
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{upcomingEvent.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{upcomingEvent.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-24 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Don't Miss Out!
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Secure your spot at {event.title}. Limited tickets available!
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-gray-50 transition-colors"
              onClick={() => {
                if(user){
                  setIsModalOpen(true)
                }
                else{
                  toast.error("Please login to register for the event")
                }
               }}
                >
              Register Now
            </motion.button>
          </motion.div>
        </div>
      </section>
      <Modal isVisible={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Register for Event
          </h2>
          <p className="text-gray-600">
            Fill out the form below to secure your spot at {event.title}
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          <div className="pt-4">
            <motion.button
              whileHover={{
                scale: 1.01,
              }}
              whileTap={{
                scale: 0.99,
              }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
            >
              Register Now
            </motion.button>
            <p className="text-sm text-gray-500 mt-4 text-center">
              By registering, you agree to our Terms of Service and Privacy
              Policy
            </p>
          </div>
        </form>
      </Modal>
    </main>
  );
}
export default EventDetailPage;