
import { IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";
import Article from "../components/Article";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";

function Post() {
  return (
    <div className="w-full relative top-0 left-0 mt-[100px] text-black">
     <div className="w-full mx-auto flex gap-5 px-5 ">
       <div className="w-full h-max grid grid-cols-3 gap-x-4 capitalize ">
         <div className="shadow-lg w-[100%] h-min py-5">
           <img
             src="../../assets/addis.jpg"
             alt=""
             className="w-[80%] mx-auto h-[150px] mb-3"
           />
           <div className="w-[80%] mx-auto mb-3">
             <Link to={"/"} className="font-bold mb-3">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
               libero.
             </Link>
             <span className="flex items-center gap-[10px] my-2 ">
               <IoPerson fontSize={20} />
               <span className="text-[17px]">person name</span>
               
             </span>
             <p className="text-gray-400 text-[15px]">
               Published : <span>October 4, 2023</span>
             </p>
             <div className="flex justify-between items-start my-3 ">
               <MdOutlineRemoveRedEye size={20} />
               <FaRegHeart size={20} />
             </div>
           </div>
         </div>
         <div className="shadow-lg w-[100%] h-min py-5">
           <img
             src="../../assets/addis.jpg"
             alt=""
             className="w-[80%] mx-auto h-[150px] mb-3"
           />
           <div className="w-[80%] mx-auto mb-3">
             <Link to={"/"} className="font-bold mb-3">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
               libero.
             </Link>
             <span className="flex items-center gap-[10px] my-2 ">
               <IoPerson fontSize={20} />
               <span className="text-[17px]">person name</span>
               
             </span>
             <p className="text-gray-400 text-[15px]">
               Published : <span>October 4, 2023</span>
             </p>
             <div className="flex justify-between items-start my-3 ">
               <MdOutlineRemoveRedEye size={20} />
               <FaRegHeart size={20} />
             </div>
           </div>
         </div>
         <div className="shadow-lg w-[100%] h-min py-5">
           <img
             src="../../assets/addis.jpg"
             alt=""
             className="w-[80%] mx-auto h-[150px] mb-3"
           />
           <div className="w-[80%] mx-auto mb-3">
             <Link to={"/"} className="font-bold mb-3">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
               libero.
             </Link>
             <span className="flex items-center gap-[10px] my-2 ">
               <IoPerson fontSize={20} />
               <span className="text-[17px]">person name</span>
               
             </span>
             <p className="text-gray-400 text-[15px]">
               Published : <span>October 4, 2023</span>
             </p>
             <div className="flex justify-between items-start my-3 ">
               <MdOutlineRemoveRedEye size={20} />
               <FaRegHeart size={20} />
             </div>
           </div>
         </div>
         <div className="shadow-lg w-[100%] h-min py-5">
           <img
             src="../../assets/addis.jpg"
             alt=""
             className="w-[80%] mx-auto h-[150px] mb-3"
           />
           <div className="w-[80%] mx-auto mb-3">
             <Link to={"/"} className="font-bold mb-3">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
               libero.
             </Link>
             <span className="flex items-center gap-[10px] my-2 ">
               <IoPerson fontSize={20} />
               <span className="text-[17px]">person name</span>
               
             </span>
             <p className="text-gray-400 text-[15px]">
               Published : <span>October 4, 2023</span>
             </p>
             <div className="flex justify-between items-start my-3 ">
               <MdOutlineRemoveRedEye size={20} />
               <FaRegHeart size={20} />
             </div>
           </div>
         </div>
       </div>
       <div className="w-[25%] mx-auto flex">
         <Article />
       </div>
     </div>
   </div>
  );
}

export default Post;
