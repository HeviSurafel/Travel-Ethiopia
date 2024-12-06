import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
// Sample data, could be fetched from an API
const destinations = [
  {
    id: 1,
    name: 'Santorini, Greece',
    description: 'Breathtaking sunsets and stunning views.',
    reviews: 342,
    image: '../../assets/Arba-Minch-edited.jpg',
  },
  {
    id: 2,
    name: 'Kyoto, Japan',
    description: 'Experience ancient temples and peaceful gardens.',
    reviews: 287,
    image: '../../assets/Arba-Minch-edited.jpg',
  },
  {
    id: 3,
    name: 'Machu Picchu, Peru',
    description: 'Explore the ruins of a magnificent Inca city.',
    reviews: 214,
    image: '../../assets/Arba-Minch-edited.jpg',
  },
  {
    id: 4,
    name: 'Bali, Indonesia',
    description: 'Tropical beaches and rich culture.',
    reviews: 290,
    image: '../../assets/Arba-Minch-edited.jpg',
  },
];

const TopReviewedDestinations = () => {
  // Sort the destinations by reviews in descending order
  const sortedDestinations = destinations.sort((a, b) => b.reviews - a.reviews);

  return (
    <section className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Top Reviewed Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedDestinations.map((destination) => (
          <div key={destination.id} className="bg-white rounded shadow-md overflow-hidden">
            <img src={destination.image} alt={destination.name} className="w-full h-40 object-cover" />
            <div className="px-2">
              <h3 className="text-xl font-semibold flex justify-between items-center gap-3">{destination.name} <span className="flex justify-end text-yellow-400"><FaStar size={15}/><FaStar size={15}/><FaStar size={15}/><FaStar size={15}/> <FaStarHalfAlt size={15}/></span></h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusantium recusandae dolores doloribus, nisi excepturi veritatis nesciunt sint quod odio?</p>
              <div className="w-full h-min flex justify-between items-center my-3 border-y  py-2">
                <div className="flex  justify-between items-center gap-2">
                  <img src="../../assets/hevi.jpg" alt="" className="w-[50px] h-[50px] rounded-full"/>
                  <div className="flex flex-col justify-between " >
                    <h2>Name</h2>
                    <p>posted now</p>
                  </div>
                </div>
                <div>
                  <h3 className="flex justify-center items-center gap-1">{destination.reviews} <FaEye/></h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopReviewedDestinations;