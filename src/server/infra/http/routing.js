const errorTranslator = require('./error-translator')

const defaultStatusCode = 500

module.exports = {
  makeJSONRoute (handler) {
    return (req, res) => {
      Promise.resolve()
        .then(() => handler(req))
        .then(result => res.json({ data: result }))
        .catch(err => {
          const httpErr = errorTranslator(err)

          res.status(httpErr.statusCode || defaultStatusCode)
            .json(
              Object.assign(
                httpErr,
                { stack: undefined }
              )
            )
        })
    }
  }
}
