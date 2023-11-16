const express = require('express'),
router = express.Router(),
userRouter = require('..routes/User.router'),
mugRouter = require('..routes/Mug.router')

router.use('/user', userRouter)
router.use('/mug', mugRouter)

module.exports = router