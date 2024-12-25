const express = require("express");
const router = express.Router();
const { initializePayment, verifyPayement, callBack } = require("../controller/chapa.controller");
const {protectRoute}=require("../middleware/protect.route")
router.post("/initialize",protectRoute, initializePayment);
router.post("/verify",protectRoute, verifyPayement);
router.post("/call_back",protectRoute, callBack);
module.exports = router;