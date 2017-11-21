module.exports = function ErrorFactory (name, { safe = true } = { safe: true }) {
  return (message, info) => {
    const error = Object.assign(
      Object.create(Error.prototype),
      {
        message,
        name,
        safe
      },
      info
    )

    Error.captureStackTrace(error, ErrorFactory)
    return error
  }
}
