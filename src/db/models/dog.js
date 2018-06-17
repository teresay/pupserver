const Sequelize = require('sequelize')
const db = require('../db')

const Dog = db.define('dog', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  birthday: {
    type: Sequelize.DATE,
    allowNull: false
  },
  breed: {
    type: Sequelize.STRING
  },
  weight: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  fixed: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

module.exports = Dog
