import Hero from "../components/Hero"
import image from "../../assets/faded_gallery-OfdOEdGYiuk-unsplash.jpg";
function Service() {
  return (
    <div className="relative top-0 left-0 w-full bg-[#F3F4F6]">
       <Hero image={image} heading={"Service Page"} />
      <div className="max-w-[600px] mx-auto py-5 ">
        <h5 className="text-red-500 text-[25px] text-center">Our service</h5>
        <h2 className="text-[40px] text-center">What we Offer</h2>
        <p className="text-[20px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit alias
          numquam sed fugiat deserunt cumque.
        </p>
      </div>
      <div className="w-[80%] h-max mx-auto flex gap-[20px] my-[50px] ">
        <div className="shadow-lg p-5">
          <img
            src="../../assets/undraw_profile_re_4a55.svg"
            alt=""
            className="w-[450px] shadow-md p-3"
          />
          <div>
            <h2 className="text-[30px] pt-4">Who we are</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              accusantium culpa ratione et quos ipsum saepe quidem aliquid, ad
              quod consequatur minus repudiandae esse enim at exercitationem
              nulla sed ea!
            </p>
          </div>
        </div>
        <div className="shadow-lg p-5">
          <img
            src="../../assets/undraw_profile_re_4a55.svg"
            alt=""
            className="w-[450px] shadow-md p-3"
          />
          <div>
            <h2 className="text-[30px] pt-4">Why we Care</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              accusantium culpa ratione et quos ipsum saepe quidem aliquid, ad
              quod consequatur minus repudiandae esse enim at exercitationem
              nulla sed ea!
            </p>
          </div>
        </div>

        <div className="shadow-lg p-5">
          <img
            src="../../assets/undraw_profile_re_4a55.svg"
            alt=""
            className="w-[450px] shadow-md p-3"
          />
          <div>
            <h2 className="text-[30px] pt-4">What we Got</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              accusantium culpa ratione et quos ipsum saepe quidem aliquid, ad
              quod consequatur minus repudiandae esse enim at exercitationem
              nulla sed ea!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
