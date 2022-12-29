const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await
            mongoose.set("strictQuery", false);
        mongoose.connect(process.env.DATABASE_URI);
        console.log("Database connection success!")
    } catch (error) {
        console.log("Database Connection Field")
    }
}

module.exports = connectDB