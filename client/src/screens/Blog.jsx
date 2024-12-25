import { useState, useEffect } from "react";
import { Menu, Search, Home, BookOpen, Image } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import useBlogStore from "../store/blog.store.js";
import TimeDifference from "../components/TimeDifference";
import useAuthStore from "../store/store.js";

import Loading from "../components/Loading";
function Blog() {
  function getReadTime(content) {
    // Average reading speed is 200 words per minute
    const wordsPerMinute = 200;
    // Count words in the content
    const wordCount = content.split(/\s+/).length;
    // Calculate read time in minutes
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return readTime;
  }
  const [active, setActive] = useState(0);
  const { user } = useAuthStore();

  const { blog, getAllBlogs } = useBlogStore();
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        await getAllBlogs();
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  // Handle case where data is null or undefined
  if (!blog || blog.length===0 || !Array.isArray(blog)) {
    return (
      <div>
        <Loading />
      </div>
    ); // Or some loading indicator
  }

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold">Blog</h1>
              </div>

              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a className="border-b-2 border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  <Home className="h-4 w-4 mr-2" />
                  Popular
                </a>
                <a className="border-transparent border-b-2 hover:border-gray-300 text-gray-500 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  <BookOpen className="h-4 w-4 mr-2" />
                  All Blogs
                </a>
                <a className="border-transparent border-b-2 hover:border-gray-300 text-gray-500 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  <Image className="h-4 w-4 mr-2" />
                  Gallery
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="hidden md:flex items-center">
                  <div className="relative rounded-md shadow-sm">
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Search"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="ml-3 -mr-2 flex items-center sm:hidden">
                <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blog.map((post, index) => (
            <article
              className="bg-white rounded-lg shadow-sm overflow-hidden"
              key={index}
            >
              <img
                src={`${post.image}`}
                alt="Coding setup"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <Link
                  to={`/detail/${post._id}`}
                  className="text-xl font-semibold mb-2"
                >
                  {post.title}
                </Link>
                <p className="text-gray-600 mb-4">{post.subtitle}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <img
                        src={post.user.pic}
                        alt="user image"
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <span className="text-sm text-gray-600">
                        {post.user.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {getReadTime(post.description)} min read
                    </span>
                  </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Blog;
