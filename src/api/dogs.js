const router = require('express').Router()
const {Dog, User} = require('../db/models/index')
module.exports = router


//get all dogs in db
router.get('/', (req, res, next) => {
  try {
    Dog.findAll().then(dogs => res.json(dogs))
  } catch (err) {
    next(err)
  }
})


//get one dog by id
router.get('/:dogId', (req, res, next) => {
  try {
    Dog.findById(req.params.dogId).then(dog => res.json(dog))
  } catch(err) {
    next(err)
  }
})
