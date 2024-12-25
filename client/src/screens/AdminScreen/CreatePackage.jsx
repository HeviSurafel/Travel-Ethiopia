import { X, Plus } from "lucide-react";
import { useState } from "react";
import useAuthStore from "../../store/store";
import usePackageStore from "../../store/package.store";
import toast from "react-hot-toast";
function CreatePackage() {
  const { user } = useAuthStore();
  const { createPackage } = usePackageStore();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    highlights: [],
    days: "",
    category: "",
    image: null,
    user: user._id || {},
  });
  const [newHighlight, setNewHighlight] = useState("");
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Access the first selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file); // Convert file to Base64 string
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPackage(formData);
      setFormData({
        title: "",
        description: "",
        price: "",
        highlights: [],
        days: "",
        category: "",
        image: null,
        user: user._id || {},
      })
    } catch (error) {
      console.log("error creating a product");
    }
  };
  const handleAddHighlight = () => {
    if (newHighlight.trim()) {
      setFormData({
        ...formData,
        highlights: [...formData.highlights, newHighlight.trim()],
      });
      setNewHighlight("");
    }
  };
  const handleRemoveHighlight = (index) => {
    const updatedHighlights = formData.highlights.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      highlights: updatedHighlights,
    });
  };
  return (
    <main className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Create New Package</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Package Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.title}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: e.target.value,
                })
              }
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium mb-2">
              Package Image
            </label>
            <div className="space-y-2">
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  description: e.target.value,
                })
              }
              rows={4}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium mb-2">
              Price
            </label>
            <input
              type="number"
              id="price"
              value={formData.price}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  price: e.target.value,
                })
              }
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="duration"
              className="block text-sm font-medium mb-2"
            >
              Duration (in days)
            </label>
            <input
              type="number"
              id="duration"
              value={formData.days}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  days: e.target.value,
                })
              }
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-2">
              Package Type
            </label>
            <select
              id="category"
              value={formData.category}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  category: e.target.value,
                })
              }
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select package type</option>
              <option value="vip">VIP</option>
              <option value="family">Family</option>
              <option value="single">Single</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Package Highlights
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={newHighlight}
                onChange={(e) => setNewHighlight(e.target.value)}
                placeholder="Add a highlight"
                className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={handleAddHighlight}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2"
              >
                <Plus size={16} />
                Add
              </button>
            </div>

            <div className="space-y-2">
              {formData.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-50 p-2 rounded-md"
                >
                  <span className="flex-1">{highlight}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveHighlight(index)}
                    className="text-gray-500 hover:text-red-500 focus:outline-none"
                    aria-label={`Remove highlight: ${highlight}`}
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Package
          </button>
        </form>
      </div>
    </main>
  );
}
export default CreatePackage;
