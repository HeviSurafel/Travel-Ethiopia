import {
  Menu,
  Search,
  User,
  Home,
  BookOpen,
  Image,
  Heart,
  Reply,
  ThumbsUp,
} from "lucide-react";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";

import useBlogStore from "../store/blog.store";
import { useParams } from "react-router-dom";
import useAuthStore from "../store/store";
import Loading from "../components/Loading";

function Detail() {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [newComment, setNewComment] = useState("");
  const [replyContent, setReplyContent] = useState({});
  const { id } = useParams();
  const { blog, comment, getSingleBlog, likeBlog, createComment, getComment } = useBlogStore();
  const { user } = useAuthStore();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        await getSingleBlog(id);
        await getComment(id);
      } catch (error) {
        console.error("Failed to fetch single blogs or comments:", error);
      }
    };
    fetchBlogs();
  }, [id]);

  useEffect(() => {
    if (blog) {
      setLikes(blog.likeCount || 0);
      const userHasLiked = blog.likes?.some((like) => like.user === user?._id);
      setIsLiked(userHasLiked);
    }
  }, [blog, user]);

  const handleLike = async () => {
    if (!user) {
      toast.error("Please login to like and comment on blogs", { id: "login" });
      return;
    }
    try {
      setIsLiked(!isLiked);
      const updatedLikes = isLiked ? likes - 1 : likes + 1;
      setLikes(updatedLikes);
      await likeBlog(user.id, blog._id);
    } catch (error) {
      console.error("Failed to update like:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleAddComment = async () => {
    if (!user) {
      toast.error("Please login to add comments", { id: "login" });
      return;
    }
    console.log(comment)

    try {
      await createComment(newComment, blog._id, user._id);
      setNewComment(""); // Clear the input field
      toast.success("Comment added successfully");
    } catch (error) {
      toast.error("Failed to add comment. Please try again.");
    }
  };

  const handleReply = async (commentId) => {
    if (!user) {
      toast.error("Please login to reply to comments", { id: "login" });
      return;
    }

    try {
      const replyText = replyContent[commentId];
      if (!replyText) {
        toast.error("Reply cannot be empty.");
        return;
      }

      await createComment(replyText, blog._id, user._id, commentId); // Assuming API supports parent comment ID
      setReplyContent((prev) => ({ ...prev, [commentId]: "" })); // Clear reply input for this comment
      toast.success("Reply added successfully");
      await getComment(id); // Refresh comments and replies
    } catch (error) {
      toast.error("Failed to add reply. Please try again.");
    }
  };

  if (!blog || blog.length === 0 || blog === undefined) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-72 object-cover rounded-lg mb-8"
        />
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <div className="flex items-center text-gray-600">
            <img
              src={blog.image}
              alt="Author Avatar"
              className="h-12 w-12 rounded-full mr-4"
            />
            <div>
              <div className="text-sm">
                <span className="mx-2">•</span>
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center space-x-4">
          <button
            onClick={handleLike}
            className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors"
          >
            <Heart
              className={`h-6 w-6 ${
                isLiked ? "fill-red-500 text-red-500" : ""
              }`}
            />
            <span className="font-medium">{likes} likes</span>
          </button>
        </div>

        {/* Comments Section */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-6">Comments</h3>

          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            rows="3"
            placeholder="Add a comment..."
          />
          <button
            className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            onClick={handleAddComment}
          >
            Post Comment
          </button>

          <div className="space-y-6 mt-6">
            {!Array.isArray(comment) && comment.length ===0 ? (
              <p className="text-gray-600">No comments yet.</p>
            ) : (
              comment.map((comment, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={comment.user.pic}
                      alt="user image"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <h4 className="font-medium">{comment.user.name}</h4>
                      <p className="mt-1 text-gray-600">{comment.content}</p>
                    </div>
                  </div>
                  <textarea
                    value={replyContent[comment._id] || ""}
                    onChange={(e) =>
                      setReplyContent((prev) => ({
                        ...prev,
                        [comment._id]: e.target.value,
                      }))
                    }
                    className="mt-4 w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    rows="2"
                    placeholder="Reply to this comment..."
                  />
                  <button
                    className="mt-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                    onClick={() => handleReply(comment._id)}
                  >
                    Reply
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Detail;
