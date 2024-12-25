const cloduinary = require("cloudinary").v2;
const dotenv=require("dotenv");
dotenv.config();
cloduinary.config({
    cloud_name: "dol96cs6h",
    api_key: "159794979443512",
    api_secret:"82m_Q6ldbcPGzS-Sd8rAzq0WX54",
    secure: true,
});

module.exports = cloduinary;