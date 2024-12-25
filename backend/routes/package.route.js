const express = require("express");
const router = express.Router();
const {createPackage,getPackages,deletePackage,detailPackage,searchByCatagory,getRecommendedPackages}=require("../controller/package.controller")
const {adminRoute,protectRoute}=require("../middleware/protect.route")
router.post("/createpackage",protectRoute,adminRoute, createPackage)
router.get("/recommendedpackage", createPackage)
router.post("/getpackages", createPackage)
router.post("/detail/:id", detailPackage)
router.post("/deletpackages/:id",protectRoute,adminRoute, createPackage)
router.post("/searchbycatagory/:id", searchByCatagory)
module.exports = router;