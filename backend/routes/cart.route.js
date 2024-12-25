const express = require("express");
const router = express.Router();
const {createCart,getCartPackages,removeAllFromCart ,updateQuantity}=require("../controller/cart.controller")
const {protectRoute,adminRoute}=require("../middleware/protect.route")
router.post("/create",protectRoute, createCart)
router.post("/getcart",protectRoute, getCart)
router.post("/removeall",protectRoute, createCart)
router.post("/update",protectRoute, getCart)
module.exports = router;