import { IoMdHappy } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomerCard from "./CustomerCard";
import { productData, responsive } from "./data";
function Customer() {
  const product = productData.map((item) => (
    <CustomerCard key={item.id}
      url={item.imageurl}
      name={item.name}
    description={item.description}
    />
  ));

  return (
    <div className="container h-min mx-auto">
      <h1 className="text-center text-4xl py-4 mb-3 text flex justify-center items-center capitalize"> what our client  think about us </h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  )
}

export default Customer