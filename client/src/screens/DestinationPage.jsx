import React, { useState } from "react";
import Hero from "../components/Hero";

const destinations = [
  {
    name: "Paris, France",
    image: "../../assets/pexels-karolina-grabowska-5632381.jpg",
    description: "The city of lights and romance, featuring the Eiffel Tower.",
    adminPhoto: "../../assets/admin1.jpg",
    date: "December 3, 2024",
    postedTime: "3 min ago",
  },
  {
    name: "Tokyo, Japan",
    image: "../../assets/Ethiopia-12.jpg",
    description: "A bustling city blending tradition and modernity.",
    adminPhoto: "../../assets/admin2.jpg",
    date: "December 2, 2024",
    postedTime: "1 hour ago",
  },
  {
    name: "Bali, Indonesia",
    image: "../../assets/Ethiopia-27.jpg",
    description: "A tropical paradise with stunning beaches and temples.",
    adminPhoto: "../../assets/admin3.jpg",
    date: "November 30, 2024",
    postedTime: "2 days ago",
  },
  {
    name: "New York, USA",
    image: "../../assets/Arba-Minch-edited.jpg",
    description: "The city that never sleeps, home to iconic landmarks.",
    adminPhoto: "../../assets/admin4.jpg",
    date: "November 29, 2024",
    postedTime: "3 days ago",
  },
  {
    name: "Cape Town, South Africa",
    image: "../../assets/pexels-andrew-3178786.jpg",
    description: "A vibrant city with breathtaking landscapes.",
    adminPhoto: "../../assets/admin5.jpg",
    date: "November 28, 2024",
    postedTime: "4 days ago",
  },
];

function DestinationPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [engagement, setEngagement] = useState(
    destinations.map(() => ({
      likes: 0,
      comments: 0,
      views: Math.floor(Math.random() * 1000) + 100,
    }))
  );

  const handleLike = (index) => {
    const updatedEngagement = [...engagement];
    updatedEngagement[index].likes += 1;
    setEngagement(updatedEngagement);
  };

  const handleComment = (index) => {
    const updatedEngagement = [...engagement];
    updatedEngagement[index].comments += 1;
    setEngagement(updatedEngagement);
  };

  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <Hero title="Discover Your Next Adventure" />

      {/* Search Bar */}
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Search for destinations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Destination Grid */}
      <div className="container mx-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Destination Image */}
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-48 object-cover"
              />

              {/* Destination Info */}
              <div className="p-6">
                {/* Admin Info */}
                <div className="flex items-center mb-4">
                  <img
                    src={destination.adminPhoto}
                    alt="Admin"
                    className="w-10 h-10 rounded-full border border-gray-300"
                  />
                  <div className="ml-3">
                    <p className="text-sm text-gray-600">{destination.date}</p>
                    <p className="text-xs text-gray-400">{destination.postedTime}</p>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold mb-2">
                  {destination.name}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm">
                  <a
                    href="#"
                    className="text-blue-500 hover:underline"
                  >
                    {destination.description}
                  </a>
                </p>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                  <div>
                    <span className="font-medium">{engagement[index].views}</span> views
                    &nbsp;|&nbsp;
                    <span
                      className="cursor-pointer text-blue-500 hover:underline"
                      onClick={() => handleComment(index)}
                    >
                      {engagement[index].comments} comments
                    </span>
                  </div>
                  <div>
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => handleLike(index)}
                    >
                      Like ({engagement[index].likes})
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Message for No Results */}
          {filteredDestinations.length === 0 && (
            <div className="col-span-full text-center text-gray-600">
              No destinations found. Try another search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DestinationPage;
