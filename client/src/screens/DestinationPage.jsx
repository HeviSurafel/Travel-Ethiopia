import React, { useState } from "react";
import Hero from "../components/Hero";

const destinations = [
  {
    name: "Paris, France",
    category: "City",
    image: "../../assets/pexels-karolina-grabowska-5632381.jpg",
    description: "The city of lights and romance, featuring the Eiffel Tower.",
    adminPhoto: "../../assets/admin1.jpg",
    date: "December 3, 2024",
    postedTime: "3 min ago",
  },
  {
    name: "Tokyo, Japan",
    category: "City",
    image: "../../assets/Ethiopia-12.jpg",
    description: "A bustling city blending tradition and modernity.",
    adminPhoto: "../../assets/admin2.jpg",
    date: "December 2, 2024",
    postedTime: "1 hour ago",
  },
  {
    name: "Bali, Indonesia",
    category: "Beach",
    image: "../../assets/Ethiopia-27.jpg",
    description: "A tropical paradise with stunning beaches and temples.",
    adminPhoto: "../../assets/admin3.jpg",
    date: "November 30, 2024",
    postedTime: "2 days ago",
  },
  {
    name: "New York, USA",
    category: "City",
    image: "../../assets/Arba-Minch-edited.jpg",
    description: "The city that never sleeps, home to iconic landmarks.",
    adminPhoto: "../../assets/admin4.jpg",
    date: "November 29, 2024",
    postedTime: "3 days ago",
  },
  {
    name: "Cape Town, South Africa",
    category: "Adventure",
    image: "../../assets/pexels-andrew-3178786.jpg",
    description: "A vibrant city with breathtaking landscapes.",
    adminPhoto: "../../assets/admin5.jpg",
    date: "November 28, 2024",
    postedTime: "4 days ago",
  },
];

const categories = ["All", "City", "Beach", "Adventure"];

const articles = [
  {
    title: "Top 10 Beaches to Visit in 2024",
    snippet: "Explore the most breathtaking beaches around the globe.",
    date: "December 1, 2024",
  },
  {
    title: "City Escapes: A Guide to Urban Adventures",
    snippet: "Discover the hidden gems in the world's busiest cities.",
    date: "November 25, 2024",
  },
  {
    title: "Adventurous Destinations for Thrill Seekers",
    snippet: "Push your limits with these adrenaline-pumping locations.",
    date: "November 20, 2024",
  },
];

function DestinationPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
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

  const filteredDestinations = destinations.filter((destination) => {
    const matchesCategory =
      selectedCategory === "All" || destination.category === selectedCategory;
    const matchesQuery = destination.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <Hero title="Discover Your Next Adventure" />

      {/* Search and Category Filters */}
      <div className="container mx-auto mt-6 px-6">
        <div className="text-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Search what you want</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Search for destinations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="container mx-auto py-10 px-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Destination Grid */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Popular Articles Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Popular Articles</h3>
          <ul className="space-y-4">
            {articles.map((article, index) => (
              <li key={index}>
                <h4 className="text-lg font-medium text-blue-500 hover:underline cursor-pointer">
                  {article.title}
                </h4>
                <p className="text-sm text-gray-600">{article.snippet}</p>
                <p className="text-xs text-gray-400">{article.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DestinationPage;
