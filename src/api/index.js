const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/dogs', require('./dogs'))
router.use('/events', require('./events'))
router.use('/locations', require('./locations'))
