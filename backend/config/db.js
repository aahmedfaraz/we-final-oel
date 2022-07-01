const mongoose = require('mongoose');

const mongoDbURI = "mongodb+srv://ahmed-faraz:pass12345@cluster0.89ah1.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(mongoDbURI, {
            useNewUrlParser: true,
        });
        console.log('MongoDB is connected');
    } catch(err) {
        console.error(err.message);
        process.exit(1);
    };
};

module.exports = connectDB;