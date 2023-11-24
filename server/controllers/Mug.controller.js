const Mug = require('../models/Mug.model')

const createMug = async (req, res) => {
    try {
        const mug = new Mug (req.body)
        const resp = await mug.save()
        return res.json({
            message: 'Mug was created successfully',
            detail: resp
        })
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}

const getMugs = async (req, res) => {
    try {
        const resp = await Mug.find()
        return res.json({
            message: "Mugs",
            detail: resp
        })
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}

module.exports = { createMug, getMugs }