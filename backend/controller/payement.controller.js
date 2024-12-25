const Transaction = require("../model/transaction.model");
const chapa = require("../config/chapa");
const initializePayment = async (req, res) => {
    try {
        const { amount, email, first_name, last_name, callback_url } = req.body;
        const customerInfo = {
            amount,
            currency: "ETB",
            email,
            first_name,
            last_name,
            callback_url,
          };
          const response = await chapa.initialize(customerInfo, { autoRef: true });
          // Save the transaction to the database
          const transaction = new Transaction({
            tx_ref: response.data.tx_ref,
            email,
            amount,
            currency: "ETB",
            status: "pending",
          });
          await transaction.save();
      
          res.json({
            success: true,
            message: "Payment initialized successfully",
            data: response.data,
          });
    } catch (error) {
        console.log("error in initializePayment controller", error.message);
        res.status(500).json({ message: "server error", error: error.message });
    }
}
const verifyPayement=async(req,res)=>{
    const { tx_ref } = req.params;

  try {
    // Verify the transaction
    const response = await chapa.verify(tx_ref);

    // Update the transaction status
    const transaction = await Transaction.findOne({ tx_ref });
    if (!transaction) {
      return res.status(404).json({ success: false, message: "Transaction not found" });
    }

    transaction.status = response.data.status; // Update status (e.g., "success" or "failed")
    await transaction.save();

    res.json({
      success: true,
      message: "Payment verified successfully",
      data: response.data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
}
const callBack=async(req,res)=>{
  const { tx_ref, status } = req.body;

  try {
    const transaction = await Transaction.findOne({ tx_ref });
    if (transaction) {
      transaction.status = status;
      await transaction.save();
    }
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
module.exports={initializePayment,verifyPayement,callBack}