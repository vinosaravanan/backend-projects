const mongoose = require('mongoose');

const dbConnection = async () => {    
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`mongoDb Connected ${conn.connection.host}`);
        
    } catch (error) {
        console.error(`Error connecting Mongodb: ${error.message}`)
    }
}
module.exports = dbConnection;