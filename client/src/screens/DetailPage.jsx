import React, { useState } from "react";

function DetailPage() {
  const [comments, setComments] = useState([
    { user: "User 1", text: "This is an amazing place to visit!" },
    { user: "User 2", text: "I would love to go here someday!" },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([
        ...comments,
        { user: "New User", text: newComment.trim() },
      ]);
      setNewComment(""); // Clear the input field after submission
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Admin Info */}
        <div className="p-6 flex items-center">
          <img
            src="../../assets/admin1.jpg"
            alt="Admin"
            className="w-14 h-14 rounded-full border border-gray-300"
          />
          <div className="ml-4">
            <p className="text-sm font-semibold">John Doe</p>
            <p className="text-xs text-gray-500">
              December 3, 2024 · 3 min ago
            </p>
          </div>
        </div>

        {/* Title and Sub-Description */}
        <div className="px-6">
          <h1 className="text-3xl font-bold mb-2">Discover the Beauty of Paris</h1>
          <p className="text-gray-600 mb-4">
            Explore the city of lights, romance, and iconic landmarks like the
            Eiffel Tower.
          </p>
        </div>

        {/* Main Image */}
        <img
          src="../../assets/pexels-karolina-grabowska-5632381.jpg"
          alt="Paris"
          className="w-full h-80 object-cover"
        />

        {/* Description */}
        <div className="p-6">
          <p className="text-gray-700 mb-4 leading-relaxed">
            Paris, the capital city of France, is known for its rich history,
            culture, art, and architecture. From the grandeur of the Eiffel
            Tower to the charm of Montmartre, Paris offers something for
            everyone. Discover quaint cafes, world-class museums, and the
            romantic Seine River as you explore this iconic city.
          </p>
        </div>

        {/* Social Media and Category */}
        <div className="p-6 flex justify-between items-center border-t border-gray-200">
          {/* Social Media */}
          <div className="flex space-x-4 text-blue-600">
            <a href="#" className="hover:underline">
              Facebook
            </a>
            <a href="#" className="hover:underline">
              Instagram
            </a>
            <a href="#" className="hover:underline">
              Copy Link
            </a>
          </div>

          {/* Category */}
          <div className="text-sm text-gray-500">
            <span className="font-medium">Category:</span> Travel
          </div>
        </div>

        {/* Engagement Section */}
        <div className="p-6 flex justify-between items-center border-t border-gray-200">
          <button className="text-blue-600 hover:text-blue-800">
            Like (120)
          </button>
          <button className="text-blue-600 hover:text-blue-800">
            Comments (24)
          </button>
        </div>
      </div>

      {/* Recent Posts and Comment Input Section */}
      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Posts Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, idx) => (
              <div
                key={idx}
                className="flex items-start bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={`../../assets/recent-${idx + 1}.jpg`}
                  alt="Recent Post"
                  className="w-24 h-24 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold">
                    Exploring the Wonders of Bali
                  </h3>
                  <p className="text-xs text-gray-500">
                    Discover the stunning beaches and cultural landmarks.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comments Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Comments</h2>
          <div className="space-y-4 bg-white shadow-md rounded-lg p-4">
            {[...comments].map((comment, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <img
                  src={`../../assets/commenter-${idx + 1}.jpg`}
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">{comment.user}</p>
                  <p className="text-xs text-gray-500">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Comment Input */}
          <div className="mt-6 bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Leave a Comment</h3>
            <form onSubmit={handleCommentSubmit}>
              <textarea
                value={newComment}
                onChange={handleCommentChange}
                placeholder="Add a comment..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                rows="4"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
