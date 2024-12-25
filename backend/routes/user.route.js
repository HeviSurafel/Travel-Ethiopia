const express = require("express");
const router = express.Router();
const {protectRoute,adminRoute}=require("../middleware/protect.route")
const { signup,login,logout,refreshToken, getProfile,getAllUser } = require("../controller/user.controller");
router.post("/signup",signup);
router.post("/login", login);
router.post("/logout",protectRoute,logout);
router.post("/refresh-token", refreshToken);
router.get("/profile", protectRoute, getProfile);
router.get("/alluser",protectRoute,adminRoute,getAllUser);
module.exports = router;