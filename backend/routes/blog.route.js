const express = require("express");
const router = express.Router();
const {createBlog,getBlogs,deleteBlog,detailBlog,like,createComment,getComment}=require("../controller/blog.controller")
const {protectRoute,adminRoute}=require("../middleware/protect.route")
router.post("/create",protectRoute,adminRoute, createBlog)
router.post("/like/:id",protectRoute, like)
router.get("/getblogs", getBlogs)
router.get("/detail/:id", detailBlog)
router.get("/detail/comment/:id",getComment)
router.post("/detail/create/comment/:id",protectRoute, createComment)
router.delete("/deletpackages/:id",protectRoute,adminRoute, deleteBlog)
module.exports = router;