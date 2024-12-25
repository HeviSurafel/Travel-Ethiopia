const cloudinary = require("../middleware/cloudinary");
const Package = require("../model/package.model");
const createPackage = async (req, res) => {
  try {
    console.log(req.body);
    const { title, description, price, image, category, highlights, days } =
      req.body;
    var cloudinaryResponse = null;
    if (image) {
      cloudinaryResponse = await cloudinary.uploader.upload(image, {
        folder: "packages",
      });
    }
    const package = await Package.create({
      title,
      description,
      price,
      highlights,
      category,
      days,
      image: cloudinaryResponse?.secure_url
        ? cloudinaryResponse.secure_url
        : "",
    });
    if (package) {
      res.status(201).json(package);
    }
  } catch (error) {
    console.log("error in createPackage controller", error.message);
    res.status(500).json({ message: "server error", error: error.message });
  }
};
const getPackages = async (req, res) => {
  try {
    const packages = await Package.find({});
    res.json(packages);
  } catch (error) {
    console.log("error in getPackages controller", error.message);
    res.status(500).json({ message: "server error", error: error.message });
  }
};
const deletePackage = async (req, res) => {
  try {
    const id = req.params.id;
    const package = await Package.findByIdAndDelete(id);
    if (!package) {
      return res.status(404).json({ message: "package not found" });
    }
    if (package.image) {
      const publicId = package.image.split("/").pop().split(".")[0];
      try {
        await cloudinary.uploader.destroy(`packages/${publicId}`);
        console.log("deleted image from cloduinary");
      } catch (error) {
        console.log("error deleting image from cloduinary", error);
      }
    }
    await Package.findByIdAndDelete(id);
    res.json({ message: "package deleted successfully" });
  } catch (error) {
    console.log("error in deletePackage controller", error.message);
    res.status(500).json({ message: "server error", error: error.message });
  }
};
const detailPackage = async (req, res) => {
  try {
    const id = req.params.id;
    const package = await Package.findById(id);
    if (!package) {
      return res.status(404).json({ message: "package not found" });
    }
    res.json(package);
  } catch (error) {
    console.log("error in detailPackage controller", error.message);
    res.status(500).json({ message: "server error", error: error.message });
  }
};
const searchByCatagory = async (req, res) => {
  try {
    const packages = await Package.find({ category: req.params.category });
    res.json(packages);
  } catch (error) {
    console.log("error in searchByCatagory controller", error.message);
    res.status(500).json({ message: "server error", error: error.message });
  }
};
const getRecommendedPackages = async (req, res) => {
  try {
    const packages = await Package.aggregate([
      {
        $sample: { size: 4 },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          description: 1,
          image: 1,
          price: 1,
        },
      },
    ]);
    res.json(packages);
  } catch (error) {
    console.log("error in getRecommendedPackages controller", error.message);
    res.status(500).json({ message: "server error", error: error.message });
  }
};
module.exports = {
  createPackage,
  getPackages,
  deletePackage,
  detailPackage,
  searchByCatagory,
  getRecommendedPackages,
};
