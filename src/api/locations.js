const router = require('express').Router()
const {Location} = require('../db/models/index')
module.exports = router


//get all locations in db
router.get('/', (req, res, next) => {
  try {
    Location.findAll().then(locations => res.json(locations))
  } catch (err) {
    next(err)
  }
})


//get one location by id
router.get('/:locationId', (req, res, next) => {
  try {
    Location.findById(req.params.locationId).then(location => res.json(location))
  } catch(err) {
    next(err)
  }
})
