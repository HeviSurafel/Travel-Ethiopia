const {axios} = require("axios");
const { v4: uuidv4 } = require("uuid");
const BASE_URL = "https://api.chapa.co/v1";
const INITIALIZE_PATH = "/transaction/initialize";
const VERIFY_PATH = "/transaction/verify/";
function Chapa( secretKey) {
    this.secretKey = secretKey;
}

Chapa.prototype.validateCustomerInfo=function(customerInfo, options={}){
    const requiredFields=[
        "amount",
        "currency",
        "email",
        "name",
        "callback_url",
    ]; 
    const fieldTypes = {
        amount: "number",
        currency: "string",
        email: "string",
        name: "string",
        callback_url: "string",
        customization: "object",
      };
      const errors = [];

      requiredFields.forEach((field) => {
        if (!(field in customerInfo)) {
          errors.push(`Field '${field}' is required!`);
        } else if (
          fieldTypes[field] &&
          typeof customerInfo[field] !== fieldTypes[field]
        ) {
          errors.push(`Field '${field}' must be of type '${fieldTypes[field]}'.`);
        }
      });
      if (!options.autoRef && !customerInfo.tx_ref) {
        errors.push(
          "Field 'tx_ref' is required! or pass '{autoRef: true}' to the options"
        );
      }
    
      if (errors.length) {
        throw new Error(errors.join("\n"));
      }
}
Chapa.prototype.handleCustomizations = function (customerInfo) {
    if (
      customerInfo.customization &&
      typeof customerInfo.customization === "object"
    ) {
      Object.assign(customerInfo, customerInfo.customization);
      delete customerInfo.customization;
    }
  };
  
  Chapa.prototype.makeApiCall = async function (url, method, body) {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.secret_key,
      },
      body: JSON.stringify(body),
    });
  
    const apiResponse = await response.json();
    if (response.status !== 200) {
      throw new Error(JSON.stringify({ ...apiResponse, tx_ref: body.tx_ref }));
    }
  
    return { ...apiResponse, tx_ref: body.tx_ref };
  };
  Chapa.prototype.initialize = async function (customerInfo, options = {}) {
    try {
      this.validateCustomerInfo(customerInfo, options);
      this.handleCustomizations(customerInfo);
  
      const tx_ref = customerInfo.tx_ref || uuidv4();
      const apiResponse = await this.makeApiCall(
        `${BASE_URL}${INITIALIZE_PATH}`,
        "post",
        { ...customerInfo, tx_ref }
      );
  
      return apiResponse;
    } catch (error) {
      throw error;
    }
  };
  Chapa.prototype.verify = async function (txnRef) {
    try {
      if (!txnRef || typeof txnRef !== "string") {
        throw new Error("Transaction reference must be a non-empty string!");
      }
  
      const apiResponse = await this.makeApiCall(
        `${BASE_URL}${VERIFY_PATH}${txnRef}`,
        "get",
        {}
      );
  
      return apiResponse;
    } catch (error) {
      throw error;
    }
  };
  
  module.exports = Chapa;  