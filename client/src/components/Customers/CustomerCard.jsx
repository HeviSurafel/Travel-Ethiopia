import { useState } from "react";

function CustomerCard(props) {
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <div className="shadow-lg max-w-[400px] my-5 mx-[1rem] text-center font-sans">
      <div className=" bg-gradient-to-r from-[#34D399] to-[#3c896d] pt-4 pb-3">
        <img
          className=" w-[50%] h-[10em] mx-auto object-cover rounded-[50%]"
          src={props.url}
          alt="product image"
        />
      </div>
      <div className="bg-white mb-10 py-5">
        <h4 className="text-2xl text-[#20B486] capitalize">@{props.name}</h4>
        <p className="font-serif">
          {" "}
          <q>{props.description}</q>
        </p>
        <p>{currentDate.toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default CustomerCard;
