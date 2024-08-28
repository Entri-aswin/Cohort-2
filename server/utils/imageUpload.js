const { cloudinaryInstance } = require("../config/cloudinaryConfig");

const handleImageUpload = async(path)=>{
    try {
        const uploadResult = await cloudinaryInstance.uploader.upload(path);
        return uploadResult.url;


    } catch (error) {
        next(error)
        
    }
}

module.exports={handleImageUpload}