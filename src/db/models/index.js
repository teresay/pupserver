const User = require('./user')
const Dog = require('./dog')
const Event = require('./event')
const Location = require('./location')
const db = require('../db')

//add associations


module.exports = {
  User,
  Dog,
  Event,
  Location,
  db
}
