import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import Comment from "../components/Comment";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
function Detail() {
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const dataStorage = JSON.parse(localStorage.getItem("userinfo"));
  useEffect(() => {
    fetch("http://localhost:5000/api/blog/post/" + id, {
      credentials: "include",
      method: "GET",
    })
      .then((response) => {
        response.json().then((data) => {
          setData(data);
        });
      })
      .catch((error) => console.error("Error fetching data:", error)); // Handle errors
  }, [id]);
 
  useEffect(() => {
    fetch("http://localhost:5000/api/comments/post/" +id, {
      credentials: "include",
      method: "GET",
    }).then((mycomment) => {
      mycomment.json().then((commentdata) => {
        setComments(commentdata);
      });
    });
  }, [id]);
  if (!data) {
    return (
      <div>
        <Loading />
      </div>
    ); // Or some loading indicator
  }

  const handleDeletePost = async () => {
    try {
      // const res = await axios.delete(URL + "/api/posts/" + postId, {withCredentials:true})
      // // console.log(res.data)
      // navigate("/")
    } catch (err) {
      console.log(err);
    }
  };
  const postComment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/comments/create",
        {
          content: comment,
          author: data.author.username,
          postId: id,
          userId: data.author._id,
        },
        { withCredentials: true }
      );
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(comments)

  return (
    <div>
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            {data.title}{" "}
          </h1>
          {data.author?._id === dataStorage.userInfo?.id && (
            <div className="flex items-center justify-center space-x-2">
              <p className="cursor-pointer">
                <BiEdit
                  onClick={() => {
                    navigate("/edit/" + id);
                  }}
                />
              </p>
              <p className="cursor-pointer" onClick={handleDeletePost}>
                <MdDelete />
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@{data.author.username}</p>
          <div className="flex space-x-2">
            <p>{new Date(data.updatedAt).toString().slice(0, 15)}</p>
            <p>{new Date(data.updatedAt).toString().slice(16, 24)}</p>
          </div>
        </div>

        <img
          src={`http://localhost:5000/${data.image}`}
          alt=""
          className="w-[600px] h-[400px] object-fill mt-8"
        />
        <p className="mx-auto mt-8">{data.description}</p>

        {/* <div className="flex items-center mt-8 space-x-4 font-semibold">
                <p>Categories:</p>
                <div className="flex justify-center items-center space-x-2">
                    {data.catagory?.map((c, i) => (
                        <>
                            <div key={i} className="bg-gray-300 rounded-lg px-3 py-1">{c}</div>
                        </>
                    ))}
                </div>
            </div> */}

        {/* <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
          {comments?.map((c) => (
            <Comment key={c._id} c={c} />
          ))}
        </div> */}

        {/* Write a comment */}
        <div className="w-full flex flex-col mt-4 md:flex-row">
          <input
            onChange={(e) => setComment(e.target.value)}
            type="text"
            placeholder="Write a comment"
            className="md:w-[80%] outline-none px-4 py-2 mt-4 md:mt-0"
          />
          <button
            onClick={postComment}
            className="text-white bg-black px-2 py-2 md:w-[20%] mt-4 md:mt-0"
          >
            Add comment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
