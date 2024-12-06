
import { CiHeart } from "react-icons/ci";
import { FaRegCommentAlt } from "react-icons/fa";
const FeaturedBlogs = () => {
  // Sample data for blogs (this could come from an API or database)
  const blogs = [
    {
      id: 1,
      type:"Arbaminch Blog",
      title: 'Unveiling the Secrets Beyond the Tourist Trails',
      date: '30 February 2024',
      readTime: '8 mins read',
      author: 'Seraphina Isabella',
      category: 'Culture',
      image: '../../assets/Arba-Minch-edited.jpg',
    },
    {
      id: 2,
      type:"Arbaminch Blog",
      title: 'A Fashionista’s Guide to Wanderlust',
      date: '29 March 2024',
      readTime: '5 mins read',
      author: 'Maximilian Bartholomew',
      category: 'Lifestyle',
      image: '../../assets/Arba-Minch-edited.jpg',
    },
    {
      id: 3,
      type:"Arbaminch Blog",
      title: '5 Apps and Gadgets That Will Transform Your Journeys',
      date: '25 May 2024',
      readTime: '6 mins read',
      author: 'Anastasia Evangeline',
      category: 'Tech & Travel',
      image: '../../assets/Arba-Minch-edited.jpg',
    },
    {
      id: 4,
      type:"Arbaminch Blog",
      title: 'Unveiling the Secrets Beyond the Tourist Trails',
      date: '30 Jan 2024',
      readTime: '8 mins read',
      author: 'Seraphina Isabella',
      category: 'Culture',
      image: '../../assets/Arba-Minch-edited.jpg',
    },
    {
      id: 5,
      type:"Arbaminch Blog",
      title: 'A Fashionista’s Guide to Wanderlust',
      date: '29 Jan 2024',
      readTime: '5 mins read',
      author: 'Maximilian Bartholomew',
      category: 'Lifestyle',
      image: '../../assets/Arba-Minch-edited.jpg',
    },
    {
      id: 6,
      type:"Arbaminch Blog",
      title: '5 Apps and Gadgets That Will Transform Your Journeys',
      date: '25 Jan 2024',
      readTime: '6 mins read',
      author: 'Anastasia Evangeline',
      category: 'Tech & Travel',
      image: '../../assets/Arba-Minch-edited.jpg',
    },
  ];

  return (
    <section className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">Featured Blogs</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5">
      {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded shadow-md overflow-hidden">
            <div className="flex justify-between items-center px-1">
            {blog.date} 
            <div className="flex justify-between items-center gap-2 px-2">
                <span className="flex justify-between items-center gap-1"><span>28</span> <CiHeart /> </span>
                <span className="flex justify-between items-center gap-1"><span>28</span> <FaRegCommentAlt /> </span>  
            </div>
            </div>
           <div>
           <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
           <span className="relative top-[-20px] p-2 bg-white text-[#2FB084]">{blog.category}</span>
           </div>
            <div className="px-2">
              <h3 className="text-xl font-semibold mb-1 ">{blog.title} <p className="text-gray-500 text-[14px]">By {blog.author}</p></h3>
              <p className="text-[14px] mb-3 font-semibold font-sans text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sed, officia voluptas fuga maiores esse similique.....</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBlogs;