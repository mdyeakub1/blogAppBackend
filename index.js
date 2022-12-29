const express = require('express')
const app = express()
const connectDB = require('./config/connectDB');
const authRouter = require('./routes/auth/authRouter');
const categoryRoute = require('./routes/categoryRoute');
const postRoute = require('./routes/postRoute');
const userRoute = require('./routes/userRoute');

require('dotenv').config();
app.use(express.json())

//auth routes
app.use('/api/auth', authRouter);
app.use("/api/users", userRoute);

// post routes
app.use("/api/posts", postRoute)

// category routes
app.use('/api/category', categoryRoute)

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    connectDB()
})