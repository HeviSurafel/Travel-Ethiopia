import  { useState, useEffect } from "react";

const Hero = ({ title }) => {
  const images = [
    "../../assets/Arba-Minch-edited.jpg",
    "../../assets/Ethiopia-11.jpg",
    "../../assets/Ethiopia-24.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5000ms = 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative">
      {/* Carousel Image */}
      <div className="relative w-full h-[600px]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Overlay with Text */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-2 text-lg">Join us on epic adventures and explore hidden gems.</p>
        <button className="mt-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
