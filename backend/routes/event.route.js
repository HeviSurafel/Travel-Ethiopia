const express=require("express");
const router=express.Router();
const {createEvent,getEvent,upcommingEvent,detailEvent}=require("../controller/event.controller")
const {protectRoute,adminRoute}=require("../middleware/protect.route")
router.post("/create",protectRoute,adminRoute, createEvent)
router.get("/getevent", getEvent)
router.get("/upcommingevent", upcommingEvent)
router.get("/detail/:id", detailEvent)
// router.delete("/deletpackages/:id",protectRoute,adminRoute, deleteEvent)
module.exports = router;