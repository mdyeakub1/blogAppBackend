const User = require("../models/userModel")
const bcrypt = require('bcrypt')

// get all user 
exports.getAllUser = async (req, res, next) => {
    try {
        const user = await User.find();
        res.status(200).json(user)
    } catch (error) {
        res.status(401).json({
            message: "somthing went wrong!"
        })
    }
}

// update user 
exports.updateUser = async (req, res, next) => {
    const userId = req.params.userId
    try {
        const user = await User.findById(userId)
        if (!user) {
            return res.status(400).json({
                message: "wrong cradential!"
            })
        }
        req.body.password = await bcrypt.hash(req.body.password, 11)

        const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true })

        res.status(200).json({
            message: "Profile updated successfully",
            updatedUser
        })
    } catch (error) {
        res.status(401).json({
            message: "You can't change the profile!",
            error
        })
    }
}

// delete user 
exports.deleteUser = async (req, res, next) => {
    const userId = req.params.userId
    try {
        const user = await User.findById(userId)

        if (!user) {
            return res.status(400).json({
                message: "wrong user!"
            })
        }
        const deletedUser = await User.findByIdAndDelete(userId)
        res.status(200).json({
            message: "user deleted succesfull!",
            deletedUser
        })
    } catch (error) {
        res.status(401).json({
            message: "you can't delete the account!"
        })
    }
}