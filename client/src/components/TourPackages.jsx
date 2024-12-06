
import destination1 from "../../assets/Ethiopia-11.jpg";
import destination2 from "../../assets/Ethiopia-12.jpg";
import destination3 from "../../assets/Ethiopia-24.jpg";

const packages = [
  {
    id: 1,
    image: destination1,
    title: "Maldives Escape",
    price: "$1999",
    description: "5 Nights & 6 Days in a luxurious beach resort.",
    highlights: ["Snorkeling", "Spa", "Private Villas"],
  },
  {
    id: 2,
    image: destination2,
    title: "Swiss Alps Adventure",
    price: "$2499",
    description: "7 Days exploring scenic Swiss mountains.",
    highlights: ["Skiing", "Cable Cars", "Chalet Stay"],
  },
  {
    id: 3,
    image: destination3,
    title: "Paris Getaway",
    price: "$1799",
    description: "4 Nights & 5 Days in the city of love.",
    highlights: ["Eiffel Tower", "Louvre Museum", "Luxury Dining"],
  },
];

const TourPackages = () => {
  return (
    <div className=" min-h-screen py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10 animate-fade-in-up">
        Explore Our Travel Packages
      </h1>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="w-full sm:w-[350px] bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">{pkg.title}</h2>
              <p className="text-gray-600 mt-2">{pkg.description}</p>
              <div className="mt-4">
                <h3 className="text-gray-700 font-semibold">Highlights:</h3>
                <ul className="list-disc ml-5 text-gray-600">
                  {pkg.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <span className="text-lg font-bold text-blue-600">{pkg.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourPackages;
