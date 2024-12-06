import { MdOutlineEmojiNature } from "react-icons/md";
function AboutUs() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Our Mission</h2>
        <p className="mt-4 text-gray-600">
          At Horizons, we strive to connect travelers with unique adventures
          that inspire personal growth and environmental appreciation.
        </p>
      </div>

      <div className="flex flex-wrap justify-around">
        <div className="w-full md:w-1/3 px-4 mb-8">
          <div className="bg-white p-6 shadow-md rounded-lg text-center flex justify-stretch  items-center">
            <MdOutlineEmojiNature  className="w-[100px] h-full p-3 text-[#34D399] "/>
            <div>
              <h3 className="text-xl font-semibold">Sustainability</h3>
              <p className="mt-4 text-gray-600">
                We believe in eco-friendly tourism that preserves nature for
                future generations.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="bg-white p-6 shadow-md rounded-lg text-center flex justify-stretch  items-center">
            <MdOutlineEmojiNature  className="w-[100px] h-full p-3 text-[#34D399] "/>
            <div>
              <h3 className="text-xl font-semibold">Sustainability</h3>
              <p className="mt-4 text-gray-600">
                We believe in eco-friendly tourism that preserves nature for
                future generations.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="bg-white p-6 shadow-md rounded-lg text-center flex justify-stretch  items-center">
            <MdOutlineEmojiNature  className="w-[100px] h-full p-3 text-[#34D399] "/>
            <div>
              <h3 className="text-xl font-semibold">Sustainability</h3>
              <p className="mt-4 text-gray-600">
                We believe in eco-friendly tourism that preserves nature for
                future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
