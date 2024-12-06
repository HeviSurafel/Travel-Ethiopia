import { AiOutlineLike } from "react-icons/ai";
import { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { formatISO9075 } from "date-fns";
import { IoPerson } from "react-icons/io5";
import Loading from "../components/Loading";
import { Link, Navigate,useParams } from "react-router-dom";
import Article from "../components/Article";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Hero from "../components/Hero";
import { format, differenceInMilliseconds } from "date-fns";
import image from "../../assets/faded_gallery-OfdOEdGYiuk-unsplash.jpg";
import axios from "axios";
import TimeDifference from "../components/TimeDifference";
function Blog() {
  const [active, setActive] = useState(0);
  const [timeDifference, setTimeDifference] = useState(null);
  const [data, setData] = useState(null);
  const [likes, setLikes] = useState(0);
  const [user, setUser] = useState(null);
  const mydata = JSON.parse(localStorage.getItem("userinfo"));
  console.log(mydata)
  async function addLike(postId) {
    // Pass postId as an argument
    const res = await fetch("http://localhost:5000/api/posts/like", {
      credentials: "include",
      method: "POST",
      body: JSON.stringify({ userId: mydata.id, postId }), // Include postId in body
      headers: { "Content-Type": "application/json" },
    });
    console.log(res);
  }

  const hevi = ["All Blog", "Popular Blogs", "Hani Arts", "Gallery", "Others"];
  useEffect(() => {
    fetch("http://localhost:5000/api/blog/allblogPost", {
      credentials: "include",
      method: "GET",
    })
      .then((response) => {
        response.json().then((data) => {
          setData(data);
        });
      })
      .catch((error) => console.error("Error fetching data:", error)); // Handle errors
  }, []);
  // Handle case where data is null or undefined
  if (!data) {
    return (
      <div>
        <Loading />
      </div>
    ); // Or some loading indicator
  }
  async function deletePost() {
  //  const result=await axios.delete("http://localhost:5000/api/post/delete/"+id);
  //  if(result.statusText=="OK"){
  //   alert("Success")
  //   location.reload();
  //  }
  }

  return (
    <div className="w-full relative top-0 left-0 mb-[30px]">
      <Hero image={image} heading={"Blog Post"} />
      <div className="w-[90%] mx-auto flex justify-evenly items-center mt-[30px] border-b-2">
        <ul className="list-none flex gap-[20px] text-[20px]  py-2">
          {hevi.map((hevi, index) => {
            return (
              <li
                key={index}
                onClick={() => setActive(index)}
                className={`px-4 py-2  ease-in delay-100 ${
                  active === index
                    ? "border-b-2 border-red-500 text-red-500"
                    : ""
                }`}
              >
                {hevi}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-[75%] mx-auto flex gap-5 mt-[20px]">
        <div className="w-full h-max grid grid-cols-3 gap-x-4 capitalize ">
          {data.map((useInfo) => {
            return (
              <div className="shadow-lg w-full h-min py-5 " key={useInfo._id}>
                <img
                  src={`http://localhost:5000/${useInfo.image}`}
                  className="w-full h-[300px]"
                />
                <div className="w-full px-2  mb-3">
                  <Link
                  
                    to={`/detail/${useInfo._id}`}
                    className="font-bold mb-3 underline"
                   
                  >
                    {useInfo.title}
                  </Link>
                  <span className="flex items-center gap-[5px] my-2  ">
                    <IoPerson fontSize={20} />
                    <span className="text-[20px]">
                      @{useInfo.author.username}
                    </span>
                  </span>
                  <p className="text-gray-600 text-[15px]">
                    <TimeDifference createdAt={useInfo.createdAt} />
                  </p>
                  <div className=" flex justify-between my-3">
                    {useInfo.author._id===mydata?.id ? (
                      <>
                      <h1>{useInfo.author._id}</h1>
                        <MdEdit size={25} />
                        <MdDelete size={25} onClick={deletePost} />
                      </>
                    ): ""}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-[25%] mx-auto flex">
          <Article />
        </div>
      </div>
    </div>
  );
}

export default Blog;
