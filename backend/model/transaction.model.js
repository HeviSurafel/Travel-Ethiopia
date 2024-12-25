const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  tx_ref: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true, default: "ETB" },
  status: { type: String, enum: ["pending", "success", "failed"], default: "pending" },
},{
    timestamps: true
});

module.exports = mongoose.model("Transaction", transactionSchema);
