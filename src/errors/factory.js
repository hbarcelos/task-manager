module.exports = function HighOrderFactory (name, { safe = true } = { safe: true }) {
  return Object.assign((message, info) => {
    const error = Object.assign(
      Object.create(Error.prototype, {
        safe: {
          value: safe
        }
      }),
      {
        message,
        name
      },
      info
    )

    Error.captureStackTrace(error, HighOrderFactory)
    return error
  }, {
    is (err) {
      return err.name === name && err.safe === safe
    }
  })
}
