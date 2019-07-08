const Sequelize = require('sequelize')
const db = require('./db')

const Messages = db.define(
    'messages', {
        text: Sequelize.STRING
    }
)

module.exports = Messages