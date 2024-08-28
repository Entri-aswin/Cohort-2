const { v2 } = require("cloudinary");

// Configuration
v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET, // Click 'View Credentials' below to copy your API secret
});

const cloudinaryInstance = v2;

module.exports = { cloudinaryInstance };
