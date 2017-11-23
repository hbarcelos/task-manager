const httpStatusCodeForErrors = {
  ENOTFOUND: 404,
  EVALIDATION: 400,
  EUNEXPECTED: 500
}

module.exports = function translate (error) {
  return Object.assign(
    {},
    error,
    { statusCode: httpStatusCodeForErrors[error.name] || 500 }
  )
}
