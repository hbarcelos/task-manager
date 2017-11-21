const serializeError = require('serialize-error')

const defaultStatusCode = 500

module.exports = {
  makeJSONRoute (handler) {
    return (req, res) => {
      Promise.resolve()
        .then(() => handler(req))
        .then(result => res.json({ data: result }))
        .catch(err =>
          res.status(err.statusCode || defaultStatusCode)
          .json(
            Object.assign(
              serializeError(err),
              { stack: undefined }
            )
          ))
    }
  }
}
