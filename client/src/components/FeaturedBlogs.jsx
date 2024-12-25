
import { CiHeart } from "react-icons/ci";
import { FaRegCommentAlt } from "react-icons/fa";
import useBlogStore from "../store/blog.store";
import { useEffect } from "react";
import {Link} from "react-router-dom"
const FeaturedBlogs = () => {
 const{blog,getAllBlogs}=useBlogStore();
 useEffect(() => {
   getAllBlogs();
 },[])

  return (
    <section className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">Featured Blogs</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5">
      {blog.map((blog) => (
          <Link to={`/detail/${blog._id}`} key={blog._id}>
          <div key={blog.id} className="bg-white rounded shadow-md overflow-hidden">
            <div className="flex justify-between items-center px-1">
            {blog.date} 
            <div className="flex justify-between items-center gap-2 px-2">
                <span className="flex justify-between items-center gap-1"><span>{blog.likeCount}</span> <CiHeart /> </span>
                <span className="flex justify-between items-center gap-1"><span>{blog.commentCount}</span> <FaRegCommentAlt /> </span>  
            </div>
            </div>
           <div>
           <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
           <span className="relative top-[-20px] p-2 bg-white text-[#2FB084]">{blog.category}</span>
           </div>
            <div className="px-2">
              <h3 className="text-xl font-semibold mb-1 ">{blog.title.split(' ').slice(0, 10).join(' ')}...<p className="text-gray-500 text-[14px]">By {blog.user.name}</p></h3>
              <p className="text-[14px] mb-3 font-semibold font-sans text-gray-500">{blog.subdescription}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBlogs;