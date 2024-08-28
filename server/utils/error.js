const handleError = async (error, req, res, next) => {
    try {
        const statusCode = error.statusCode || 500;
        const message = error.message || "Something went wrong, please try again";


        res.status(statusCode).json({ message });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

module.exports = { handleError };
