import { MdKeyboardArrowDown ,MdOutlineKeyboardArrowUp} from "react-icons/md";
function FaqItem({ question, answer, isActive, onToggle }) {
  return (
    <div className=" w-full h-min text-black">
      <div className="flex justify-between items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#34D399] duration-300"  onClick={onToggle}>
      <button
        className={` p-4  text-start ${
          isActive ? "border-blue-500   " : "border-gray-300"
        }`}
       
      >
        <h3 className="text-xl" onClick={onToggle}>{question}</h3>
      </button>
     <p className="transition ease-in delay-1000 duration-1000"> { isActive ?<MdOutlineKeyboardArrowUp className="text-[25px] font-bold" />: <MdKeyboardArrowDown className="text-[25px] font-bold " />}</p>
      </div>
      {isActive && <p className="p-4  ">{answer}</p>}
    </div>
  );
}

export default FaqItem;
