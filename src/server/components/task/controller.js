const Task = require('./model')
const NotFoundError = require('../../errors/not-found')
const UnexpectedError = require('../../errors/unexpected')

function create ({ body: { name, description } }) {
  return Task.create({ name, description })
    .catch(e => {
      throw UnexpectedError(e.message)
    })
}

function update ({ params: { id }, body }) {
  return Task.findByIdAndUpdate(
    id,
    { $set: body },
    { new: true }
  )
    .then(returnOrThrowIfNull.bind(null, id))
    .catch(rethrowError)
}

function remove ({ params: { id } }) {
  return Task.findByIdAndRemove(id)
    .then(returnOrThrowIfNull.bind(null, id))
    .catch(rethrowError)
}

function getAll () {
  return Task.find()
    .catch(e => {
      throw UnexpectedError(e.message)
    })
}

function getById ({ params: { id } }) {
  return Task.findById(id)
    .then(returnOrThrowIfNull.bind(null, id))
    .catch(rethrowError)
}

function returnOrThrowIfNull (id, result) {
  if (result === null) {
    throw NotFoundError(`Could not find Task ${id}`)
  }

  return result
}

function rethrowError (e) {
  if (NotFoundError.is(e)) {
    throw e
  }

  throw UnexpectedError(e.message)
}

module.exports = {
  create,
  update,
  remove,
  getAll,
  getById
}
