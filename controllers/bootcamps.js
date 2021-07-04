const Bootcamps = require('../models/Bootcamps')
const Bootcamp = require('../models/Bootcamps')

// @desc   Get all Bootcamps
// @route  Get /api/v1/bootcamps
// @access Public
exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find()
        res.status(200).json({ "success": true, data: bootcamps })

    } catch (error) {
        res.status(400).json({ "success": true, msg: err.message })

    }
}


// @desc   Get a single
// @route  Get /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id)
        res.status(200).json({ "success": true, data: bootcamp })

    } catch (error) {
        res.status(400).json({ "success": true, msg: error.message })

    }
    

}

// @desc   Create a bootcamp
// @route  Post /api/v1/bootcamps/:id
// @access Public
exports.createBootcamp = async (req, res, next) => {
    // console.log(req.body)
    try {
        const bootcamp = await Bootcamp.create(req.body)
        res.status(200).json({ "success": true, msg: "Create a bootcamp", data: bootcamp })
    } catch (err) {
        res.status(400).json({ "success": true, msg: err.message })

    }

}



// @desc   Update a bootcamp
// @route  Put /api/v1/bootcamps/:id
// @access Public
exports.updateBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        })
        res.status(200).json({ "success": true, data: bootcamp })

    } catch (error) {
        res.status(400).json({ "success": true, msg: error.message })

    }
}


// @desc   Delete a bootcamp
// @route  Delete /api/v1/bootcamps/:id
// @access Public
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)
        res.status(200).json({ "success": true, message:"Bootcamp deleted"})

    } catch (error) {
        res.status(400).json({ "success": true, msg: error.message })

    }
}