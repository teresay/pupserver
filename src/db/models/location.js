const Sequelize = require('sequelize')
const db = require('../db')

const Location = db.define('location', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  town: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zip: {
    type: Sequelize.STRING,
    allowNull: false
  },
  xcoordStart: {
    type: Sequelize.INTEGER
  },
  xcoordEnd: {
    type: Sequelize.INTEGER
  },
  ycoordStart: {
    type: Sequelize.INTEGER
  },
  ycoordEnd: {
    type: Sequelize.INTEGER
  }
})

module.exports = Location
