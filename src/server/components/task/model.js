const mongoose = require('mongoose')
const db = require('../../infra/db/mongo')
const timestamps = require('mongoose-timestamp')

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  done: {
    type: Boolean,
    required: false,
    default: false
  }
})

schema.plugin(timestamps)

module.exports = db.model('Task', schema)
