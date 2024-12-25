const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const cors = require("cors");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({limit: '50mb'}));
app.use(express.json());
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const authRoute=require("./routes/user.route")
const blogRoute=require("./routes/blog.route")
const eventRoute=require("./routes/event.route")
const packageRoute=require("./routes/package.route")
app.use(cors({
  origin: "http://localhost:5173", // Allow only this origin
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  credentials: true, // Allow cookies to be sent
}));
const port = process.env.PORT || 5001;
const connectDB = require("./config/databaseConnection");
app.use("/api/auth",authRoute);
app.use("/api/blog",blogRoute);
app.use("/api/event",eventRoute);
app.use("/api/package",packageRoute);
// const Chapa=require("./config/chapa")
app.listen(port, () => {
  // const chapa=new Chapa(process.env.TEST_SECRET_KEY)
  connectDB(),
  console.log(`Server is running on port ${port}`);
});
