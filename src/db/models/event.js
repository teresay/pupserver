const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define('event', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createDate: {
    type: Sequelize.DATE,
    defaultValue:Sequelize.NOW
  },
  eventDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  startTime: {
    type: Sequelize.TIME,
    allowNull: false
  },
  endTime: {
    type: Sequelize.TIME,
    allowNull: false
  },
  access: {
    type: Sequelize.STRING
  }
})

module.exports = Event
