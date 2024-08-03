const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MONGODB_URI;

async function dbConnect() {
    try {  
        await mongoose.connect(uri);
        console.log(`Connected to mongodb`);
    } catch (error) {
        console.error(`Connection error: ${error}`);
    }
};

module.exports = { dbConnect }