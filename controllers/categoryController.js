const Category = require("../models/categoryModel")
const bcrypt = require('bcrypt')

// create category
exports.createCategory = async (req, res, next) => {
    const { name } = req.body
    try {
        const category = await Category.create({
            name
        });

        res.status(201).json({
            message: 'Your category is created!',
            category
        })
    } catch (error) {
        res.status(401).json({
            message: "you can't create a category"
        })
    }
}

// get all category 
exports.getCategory = async (req, res, next) => {
    try {
        const category = await Category.find()
        res.status(200).json({
            message: "all category here",
            category
        })
    } catch (error) {

    }
}
