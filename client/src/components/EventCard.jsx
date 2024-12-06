import { useState } from "react";
import hevi from "../../assets/hevi.jpg";

function EventCard() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const events = [
    {
      title: "Business Conference",
      date: "Mar 21, 2035, 7:00 PM – 11:00 PM",
      location: "Conference Venue, San Francisco",
      description:
        "I’m an event description. Click here to open up the Event Editor and change my text. I’m a great place for you to say a little more about your upcoming event.",
    },
    {
      title: "Technology Summit",
      date: "Apr 5, 2035, 9:00 AM – 4:00 PM",
      location: "Tech Park, New York",
      description:
        "Join us for an engaging technology summit featuring the latest in innovation and tech advancements.",
    },
    {
      title: "Creative Workshop",
      date: "May 12, 2035, 10:00 AM – 2:00 PM",
      location: "Art Center, Los Angeles",
      description:
        "A hands-on creative workshop for artists and designers to hone their skills and learn new techniques.",
    },
  ];

  return (
    <div className="relative w-full">
      {/* Events Container */}
      <div className="w-[80%] mx-auto grid grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative flex flex-col border overflow-hidden h-[400px] bg-gray-100 group"
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Image Section */}
            <div
              className={`relative flex-shrink-0 h-[200px] transition-all duration-300 ${
                hoveredIndex === index ? "h-[0px]" : "h-[200px]"
              }`}
            >
              <img
                src={hevi}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Section */}
            <div
              className={`relative flex flex-col justify-center items-center bg-black text-white p-4 transition-all duration-300 ${
                hoveredIndex === index ? "h-full" : "h-[200px]"
              }`}
            >
              <h1 className="text-[20px] font-semibold mb-2">{event.title}</h1>
              <div className="text-center">
                <span className="block text-sm mb-1">{event.date}</span>
                <span className="block text-sm mb-2">{event.location}</span>
                <p className="text-sm">
                  {hoveredIndex === index
                    ? event.description
                    : "Hover to see more details."}
                </p>
              </div>
              <button
                className={`w-[150px] bg-yellow-400 p-2 mt-4 rounded hover:bg-yellow-500 transition ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
               Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCard;
