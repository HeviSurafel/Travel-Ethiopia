import Hero from "../components/Hero";
import Customer from "../components/Customers/Customer";
import Faq from "../components/Faq/faqs";
import OurServices from "../components/OurServices";
import Cta from "../components/Cta";
import heroImg from "../../assets/faded_gallery-OfdOEdGYiuk-unsplash.jpg";
import AboutUs from "../components/AboutUs";
import Places from "../components/Places";
import FeaturedBlogs from "../components/FeaturedBlogs";
import TopReviewedDestinations from "../components/TopReviewedDestinations";
import TourPackages from "../components/TourPackages";
// import  { useContext } from 'react';
// import ThemeContext from '../components/Theme/ThemeContext';
function homepage() {
  // const { theme } = useContext(ThemeContext);

  // const styles = {
  //   backgroundColor: theme === 'light' ? 'white' : 'black',
  //   color: theme === 'light' ? 'black' : 'white',
  // };
  return (
    <div>
      <Hero title="Explore the World of Travel"/>
      <AboutUs />
      <FeaturedBlogs />
      <TourPackages />
      <TopReviewedDestinations />
      <Cta />
      <Faq />
      <Customer />
    </div>
  );
}

export default homepage;
