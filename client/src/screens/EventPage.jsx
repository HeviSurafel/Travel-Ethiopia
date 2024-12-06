import  { useState } from "react";

function EventPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Enhanced Event Description */}
        <div className="px-8 py-6 bg-blue-50 rounded-lg shadow-md mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Grand Adventure Tour</h1>
          <p className="text-lg text-gray-700 mb-4">
            Join us for an unforgettable adventure through some of the most
            beautiful and remote locations. This event will take you through
            rugged mountains, serene beaches, and hidden caves. Don't miss this
            opportunity to explore breathtaking landscapes and make unforgettable memories.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-lg text-gray-600">Date: <span className="font-semibold text-gray-800">15th January 2025</span></p>
              <p className="text-lg text-gray-600">Duration: <span className="font-semibold text-gray-800">7 Days</span></p>
              <p className="text-lg text-gray-600">Price: <span className="font-semibold text-gray-800">$1,200</span> (Includes transportation, meals, and lodging)</p>
            </div>
            <div>
              <p className="text-lg text-gray-600">
                Limited spots available. Don't miss out on this incredible journey! 
                Register now to reserve your place for the most exciting adventure of your life.
              </p>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-gray-50 px-6 py-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Register for the Event</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 font-semibold mb-2"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Register Now
              </button>
            </div>
          </form>
        </div>

        {/* Confirmation Message */}
        {submitted && (
          <div className="p-6 text-center bg-green-100 text-green-800 rounded-lg mt-6">
            <h3 className="font-semibold text-lg">Registration Successful!</h3>
            <p className="mt-2">Thank you for registering. We will contact you with more details.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default EventPage;
