const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {isEmail: true}
  },
  activeFlag: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  homeAddress: {
    type: Sequelize.STRING
  },
  location: { //[latitude, longitude]
    type: Sequelize.STRING
  }
})

module.exports = User
