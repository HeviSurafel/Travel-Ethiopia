const Event = require("../model/event.model");
const cloudinary = require("../middleware/cloudinary");
const createEvent = async (req, res) => {
  try {
    const { title, date, time, location, description, image, user } = req.body;
    var cloudinaryResponse = null;
    if (image) {
      cloudinaryResponse = await cloudinary.uploader.upload(image, {
        folder: "events",
      });
    }
    const event = await Event.create({
      title,
      date:date.split('T')[0],
      time,
      location,
      description,
      image: cloudinaryResponse?.secure_url
        ? cloudinaryResponse.secure_url
        : "",
      user,
    });
    if (event) {
      res.status(201).json(event);
    }
  } catch (error) {
    console.log("error in createEvent controller", error.message);
    res.status(500).json({ message: "server error", error: error.message });
  }
};
const getEvent = async (req, res) => {
  try {
    const latestEvent = await Event.findOne()
      .sort({ date: 1}) // Sort by date (newest first), then time
      .exec(); // Execute the query
    res.status(201).json(latestEvent);
  } catch (error) {
    console.log("error in getevent controller", error.message);
    res.status(500).json({ message: "server error", error: error.message });
  }
};
const upcommingEvent=async(req,res)=>{
  try {
    const upcomingEvents = await Event.find().sort({ date: 1}).skip(1).limit(4).exec();
    res.status(201).json(upcomingEvents);
  } catch (error) {
    console.log("Error in getEvent controller:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}
const detailEvent=async(req,res)=>{
  try {
    const id=req.params.id.replace(":","")
    const event = await Event.findById(id);
    res.status(201).json(event);
  } catch (error) {
    console.log("Error in getEvent controller:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}
module.exports = { createEvent,getEvent,upcommingEvent,detailEvent };
