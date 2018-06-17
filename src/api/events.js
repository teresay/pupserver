const router = require('express').Router()
const {Event} = require('../db/models/index')
module.exports = router


//get all events in db
router.get('/', (req, res, next) => {
  try {
    Event.findAll().then(events => res.json(events))
  } catch (err) {
    next(err)
  }
})


//get one event by id
router.get('/:eventId', (req, res, next) => {
  try {
    Event.findById(req.params.eventId).then(event => res.json(event))
  } catch(err) {
    next(err)
  }
})
