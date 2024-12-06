import { Link, useParams } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Loading from "./Loading";

function Article() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/api/blog/latestBlog", {
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
  if (!data) {
    return (
      <div>
        <Loading />
      </div>
    ); // Or some loading indicator
  }
  return (
    <div className="w-full">
      <h1 className="text-[25px] font-bold py-3">Latest blogs</h1>
      <ul>
        <li className="border-b-2 py-3">
          {data.map((info) => {
            return (
              <Link
                key={info._id}
                to={`/detail/${info._id}`}
                className="text-[15px] font-semibold"
              >
                {info.title}
                <br />
                <p className="flex justify-start items-center gap-2 py-2">
                  ReadMore
                  <FaArrowRightLong />{" "}
                </p>
              </Link>
            );
          })}
        </li>
      </ul>
      <div className="mt-[30px]">
        <h1 className="text-[25px] font-bold py-3">Popular Articles</h1>
        <ul>
          <li className="border-b-2 py-3">
            <Link to={""} className="text-[15px] font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              tenetur quam libero repellat possimus officiis cumque et eum
              officia incidunt.
              <br />
              <p className="flex justify-start items-center gap-2 py-2">
                ReadMore
                <FaArrowRightLong />{" "}
              </p>
            </Link>
          </li>

          <li className="border-b-2 py-3">
            <Link to={""} className="text-[15px] font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              tenetur quam libero repellat possimus officiis cumque et eum
              officia incidunt.
              <br />
              <p className="flex justify-start items-center gap-2 py-2">
                ReadMore
                <FaArrowRightLong />{" "}
              </p>
            </Link>
          </li>
          <li className="border-b-2 py-3">
            <Link to={""} className="text-[15px] font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              tenetur quam libero repellat possimus officiis cumque et eum
              officia incidunt.
              <br />
              <p className="flex justify-start items-center gap-2 py-2">
                ReadMore
                <FaArrowRightLong />{" "}
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Article;
