const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
const redis = require("../config/redis");
const generateToken = async (userId) => {
  const accessToken = jwt.sign({ userId }, process.env.accessTokeSecret, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign({ userId }, process.env.refreshTokenSecret, {
    expiresIn: "7d",
  });
  return { accessToken, refreshToken };
};
const storeRefreshToken = async (userId, refreshToken) => {
  await redis.set(
    `refresh_token : ${userId}`,
    refreshToken,
    "EX",
    7 * 24 * 60 * 60
  );
};
const storeCookies = (res, accessToken, refreshToken) => {
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 15 * 60 * 1000,
  });
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};
const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      res.json({ message: "user already exist" });
    } else {
      const user = await User.create({ name, email, password });
      const { accessToken, refreshToken } = await generateToken(user._id);
      storeCookies(res, accessToken, refreshToken);
      await storeRefreshToken(user._id, refreshToken);
      res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        message: "user created successfully",
      });
    }
  } catch (error) {
    console.log(error + "error in user controller");
    res.status(500).json({ message: "something went wrong" });
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.json({ message: "user not found" });
      return;
    }
    const { accessToken, refreshToken } = await generateToken(user._id);
    storeCookies(res, accessToken, refreshToken);
    await storeRefreshToken(user._id, refreshToken);
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      message: "user logged in successfully",
    });
  } catch (error) {
    console.log(error + "error in user controller");
    res.status(500).json({ message: "something went wrong" });
  }
};
const logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  try {
    if (refreshToken) {
      const decode = jwt.verify(refreshToken, process.env.refreshTokenSecret);

      // Delete refresh token from Redis
      await redis.del(`refresh_token: ${decode.userId}`);
    }

    // Clear cookies
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    // Send response
    return res.status(201).json({ message: "Logout successfully" });
  } catch (error) {
    console.error("Logout Error:", error);
    return res.status(500).json({
      message: "An error occurred during logout.",
      error: error.message,
    });
  }
};
const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookie.refreshToken;
    if (!refreshToken) {
      res.status(401).json({
        message: "no Token found",
      });
    }
    const decoded = jwt.verify(refreshToken, process.env.refreshTokenSecret);
    console.log(decoded);
    const storedToken = await redis.get(`refresh_token : ${decoded.userId}`);
    if (decoded !== storedToken) {
      return res.status(401).json({
        message: "Invalid refresh token",
      });
    }
    const accessToken = jwt.sign(
      { userId: decoded.userId },
      process.env.accessTokeSecret,
      {
        expiresIn: "15m",
      }
    );
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 15 * 60 * 1000,
    });
    res.status(201).json({ message: "refresh token created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
const getProfile = async (req, res) => {
  try {
    res.status(201).json(req.user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
const getAllUser=async(req,res)=>{
  try {
    if(res.user &&  res.user?.role!=='admin'){
      return res.status(501).json({message:"unauthorized user,admin only"});
    }
    console.log("am working")
    const users = await User.find({
      _id: { $ne: req.user._id }, // Exclude the logged-in admin
      role: { $ne: 'admin' } // Exclude other admins
    })
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error on get Alluser", error: error.message });
  }
}
module.exports = { signup, login, logout, refreshToken, getProfile,getAllUser };
