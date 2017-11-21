const Task = require('./model')
const NotFoundError = require('../../errors/not-found')

function create ({ body: { name, description } }) {
  return Task.create({ name, description })
}

function update ({ params: { id }, body: { name, description, done } }) {
  return Task.findByIdAndUpdate(
    id,
    { $set: { name, description, done } },
    { new: true }
  )
}

function remove ({ params: { id } }) {
  return Task.findByIdAndRemove(id)
}

function getAll () {
  return Task.find()
}

function getById ({ params: { id } }) {
  return Task.findById(id)
    .then(result => {
      if (result === null) {
        throw NotFoundError(`Could not find Task ${id}`)
      }

      return result
    })
}

module.exports = {
  create,
  update,
  remove,
  getAll,
  getById
}
