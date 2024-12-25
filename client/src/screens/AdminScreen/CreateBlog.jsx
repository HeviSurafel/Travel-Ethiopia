import { Save } from "lucide-react";
import { useState } from "react";
import useBlogStore from "../../store/blog.store";
import useAuthStore from "../../store/store";

function CreateBlog() {
  const { createBlog } = useBlogStore();
  const{user}=useAuthStore();
  const [formdata, setFormdata] = useState({
    title: "",
    description: "",
    subdescription: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBlog(formdata,user._id);
      setFormdata({ title: "", subdescription: "", description: "", imageUrl: "" });
    } catch {
      console.log("error creating a product");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormdata({ ...formdata, image: reader.result });
      };

      reader.readAsDataURL(file); // base64
    }
  };
  const [errors, setErrors] = useState({});

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Create New Blog Post
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formdata.title}
            onChange={(e) =>
              setFormdata({ ...formdata, title: e.target.value })
            }
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your blog title"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-500">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sub Description
          </label>
          <input
            type="text"
            name="subtitle"
            value={formdata.subdescription}
            onChange={(e) =>
              setFormdata({ ...formdata, subdescription: e.target.value })
            }
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.subtitle ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter a subtitle for your blog"
          />
          {errors.subtitle && (
            <p className="mt-1 text-sm text-red-500">{errors.subdescription}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formdata.description}
            onChange={(e) =>
              setFormdata({ ...formdata, description: e.target.value })
            }
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.description ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your blog description"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Featured Image URL
          </label>
          <input
            type="file"
            name="imageUrl"
            value={formdata.imageUrl}
            onChange={handleImageChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image URL"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
          >
            <Save className="h-5 w-5" />
            Publish Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateBlog;
