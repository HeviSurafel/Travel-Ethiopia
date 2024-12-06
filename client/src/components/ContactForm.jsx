import contact from "../../assets/contact us.jpg";

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 animate-fade-in-up my-3">
        Get In Touch
      </h1>
      <div className="flex flex-wrap bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-5xl transform hover:scale-105 transition duration-500">
        {/* Contact Form Section */}
        <div className="p-8 w-full md:w-1/2 bg-gray-100 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h2>
          <form className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="flex-1 min-w-[calc(50%-0.5rem)] px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 min-w-[calc(50%-0.5rem)] px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <textarea
              placeholder="Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none transition"
            ></textarea>
            <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 hover:shadow-lg transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Map/Contact Image Section */}
        <div className="w-full md:w-1/2 overflow-hidden">
          <img
            src={contact}
            alt="Map"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="flex flex-wrap justify-center mt-12 space-x-8 space-y-4 text-center md:text-left text-sm animate-fade-in-up">
        <div className="flex items-center space-x-2">
          <span className="text-blue-600 text-lg">
            <i className="fas fa-map-marker-alt"></i>
          </span>
          <p>Arbaminch Sikela</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-blue-600 text-lg">
            <i className="fas fa-phone-alt"></i>
          </span>
          <p>+251964945647</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-blue-600 text-lg">
            <i className="fas fa-envelope"></i>
          </span>
          <p>Surafelwondu47@gmail.com</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-blue-600 text-lg">
            <i className="fas fa-globe"></i>
          </span>
          <p>Let us build something amazing</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
