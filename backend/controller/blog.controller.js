const cloudinary = require("../middleware/cloudinary");
const Blog = require("../model/blog.model");
const Like=require("../model/like.model")
const Comment=require("../model/comment.blog")
const createBlog = async (req, res) => {
  try {
    const { title, subdescription, image, description } = req.body;
    if (image) {
      const cloudinaryResponse = await cloudinary.uploader.upload(image, {
        folder: "blogs",
      });
      req.body.image = cloudinaryResponse.secure_url;
    }
    const blog = await Blog.create({
      title,
      subdescription,
      description,
      image,
      user: req.user._id,
    });
    res.status(201).json(blog);
  } catch (error) {
    console.log("Error in createBlog controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
const getBlogs=async(req,res)=>{
    try {
        const blogs = await Blog.find({}).populate({
            path: "user",
            select: "name pic",
            options: { strictPopulate: false },
          });
    res.status(201).json(blogs)
    } catch (error) {
        console.log("error in getBlogs controller",error.message);
        res.status(500).json({message:"server error",error:error.message})
    }
}
const deleteBlog=async(req,res)=>{
    try {
        const id=req.params.id
        const blog=await Blog.findByIdAndDelete(id)
        if(!blog){
            return res.status(404).json({message:"blog not found"})
        }
        if(blog.image){
            const publicId=blog.image.split("/").pop().split(".")[0];
            try {
                await cloudinary.uploader.destroy(`blogs/${publicId}`);
                console.log("deleted image from cloduinary");
            } catch (error) {
                console.log("error deleting image from cloduinary",error);
            }
        }
        res.json({message:"blog deleted successfully"})
    } catch (error) {
        console.log("error in deleteBlog controller",error.message);
        res.status(500).json({message:"server error",error:error.message})
    }
}
const detailBlog=async(req,res)=>{
    try {
        const id=req.params.id.replace(":","")
        const blog=await Blog.findById(id).populate("user","name");
        if(!blog){
            return res.status(404).json({message:"blog not found"})
        }
        res.status(201).json(blog)
    } catch (error) {
        console.log("error in detailBlog controller",error.message);
        res.status(500).json({message:"server error",error:error.message})
    }
}
const like = async (req, res) => {
    try {
      const { userId, blogId, itemType } = req.body;
  
      const blog = await Blog.findById(blogId);
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
  
     // Check if the user has already liked this blog
     const existingLike = await Like.findOne({ user: userId, blog: blogId });

     if (existingLike) {
       // If already liked, remove the like and decrement the like count
       await Like.findByIdAndDelete(existingLike._id);
 
       blog.likeCount = Math.max(0, blog.likeCount - 1); // Ensure likeCount doesn't go below 0
       await blog.save();
 
       return res.status(200).json({ message: "Blog unliked", likeCount: blog.likeCount });
     } else {
       // If not liked, add a like and increment the like count
       const newLike = await Like.create({
         user: userId,
         blog: blogId,
         itemType: "blog",
       });
 
       blog.likeCount += 1;
       await blog.save();
 
       return res.status(200).json({ message: "Blog liked", likeCount: blog.likeCount });
     }
     
    } catch (error) {
      // Handle errors
      console.error("Error liking the blog:", error);
      res.status(500).json({ message: "Something went wrong", error: error.message });
    }
  };
  const createComment = async (req, res) => {
    try {
      const { content, user, blog } = req.body;
  
      // Create the new comment
      const newComment = await Comment.create({
        content,
        user,
        blog,
      });
  
      // Find the blog associated with the comment
      const blogDoc = await Blog.findById(blog);
      if (!blogDoc) {
        return res.status(404).json({ message: "Blog not found" });
      }
  
      // Increment the comment count for the blog
      blogDoc.commentCount += 1;
      await blogDoc.save();
  
      res.status(201).json({ message: "Comment added", newComment, commentCount: blogDoc.commentCount });
    } catch (error) {
      console.error("Error creating comment:", error);
      res.status(500).json({ message: "Something went wrong", error: error.message });
    }
  };
  
const getComment=async(req,res)=>{
    try {
      const { id } = req.params; 
      const comments = await Comment.find({ blog: id })
        .populate("user", "name pic") // Adjust fields as needed
      res.status(200).json(comments);
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Error fetching comments", error });
    }
  }
  const updateComment=async(req,res)=>{
    try {
      const { id } = req.params;
      const { content } = req.body;
      const updatedComment = await Comment.findByIdAndUpdate(
        id,
        { content },
        { new: true }
      );
      if (!updatedComment) {
        return res.status(404).json({ message: "Comment not found" });
      }
      res.status(200).json(updatedComment);
    } catch (error) {
      res.status(500).json({ message: "Error updating comment", error });
    }
  }
  const deleteComment=async(req,res)=>{
    try {
      const { id } = req.params;
      const deletedComment = await Comment.findByIdAndDelete(id);
      if (!deletedComment) {
        return res.status(404).json({ message: "Comment not found" });
      }
      res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting comment", error });
    }
  }
  const likeComment=async(req,res)=>{
    try {
      const { id } = req.params;
      const { userId } = req.body;
      const comment = await Comment.findById(id);
      if (!comment) {
        return res.status(404).json({ message: "Comment not found" });
      }
      if (!comment.likes.includes(userId)) {
        comment.likes.push(userId);
        comment.likeCount += 1;
        await comment.save();
      }
      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json({ message: "Error liking comment", error });
    }
  }
  const unlikeComment=async(req,res)=>{
    try {
      const { id } = req.params;
      const { userId } = req.body;
      const comment = await Comment.findById(id);
      if (!comment) {
        return res.status(404).json({ message: "Comment not found" });
      }
      if (comment.likes.includes(userId)) {
        comment.likes = comment.likes.filter((like) => like.toString() !== userId);
        comment.likeCount -= 1;
        await comment.save();
      }
      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json({ message: "Error unliking comment", error });
    }
  }
module.exports = { createBlog,deleteBlog,getBlogs,detailBlog,like,createComment,getComment}
