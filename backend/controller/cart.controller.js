const Order = require("../model/order.model");
const createCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const user = req.user;
    const existingItem = user.packages.find((item) => item.id === productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      user.packages.push(productId);
    }
    await user.save();
    res.json(user.packages);
  } catch (error) {
    console.log("error in createCart controller", error.message);
    res.status(500).json({ message: "server error", error: error.message });
  }
};
const getCartPackages = async (req, res) => {
  try {
    const packages = await Package.find({ _id: { $in: req.user.packages } });
    const packageItem=packages.map((package)=>{
      const item=req.user.packages.find((cartItem)=>cartItem.id===package.id);
      return {...package.toJSON(),quantity:item.quantity};
    })
    res.json(packageItem);
  } catch (error) {
    console.log("error in getCartPackages controller", error.message);
    res.status(500).json({ message: "server error", error: error.message });
  }
};
const removeAllFromCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const user = req.user;
    if (!productId) {
      user.packages = [];
    } else {
      user.packages = user.packages.filter((item) => item.id !== productId);
    }
    await user.save();
    res.json(user.packages);
  } catch (error) {
    console.log("error in removeAllFromCart controller", error.message);
    res.status(500).json({ message: "server error", error: error.message });
  }
};
const updateQuantity = async (req, res) => {
  try {
    const { id: productId } = req.params;
    const { quantity } = req.body;
    const user = req.user;
    const existingItem = user.packages.find((item) => item.id === productId);
    if (existingItem) {
      if (quantity === 0) {
        user.packages = user.packages.filter((item) => item.id !== productId);
        await user.save();
        return res.json(user.packages);
      }
      existingItem.quantity = quantity;
      await user.save();
      res.json(user.packages);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.log("error in updateQuantity controller", error.message);
    res.status(500).json({ message: "server error", error: error.message });
  }
};
module.exports = { createCart,getCartPackages,removeAllFromCart ,updateQuantity};
