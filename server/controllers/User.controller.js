const User = require('../models/User.model')

const signUp = async (req, res) => {
    try {
        const user = new User(req.body)
        const resp = await user.save()
        return res.json({
            message: 'User was created successfully',
            detail: resp
        })
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}

const getUsers = async (req, res) => {
    try {
        const resp = await User.find()
        return res.json({
            message: "Users",
            detail: resp
        })
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const newData = req.body
        const resp = await User.findByIdAndUpdate(
            newData.userId,
            { $set: newData },
            { new: true })
        return res.json({
            message: 'User was updated successfully',
            detail: resp
        })

    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const resp = await User.findByIdAndDelete(req.body.userId)

        return res.json({
            message: 'User was deleted successfully',
            detail: resp
        })
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}
module.exports = {
    signUp,
    getUsers,
    updateUser,
    deleteUser
}