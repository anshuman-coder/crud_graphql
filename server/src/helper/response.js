exports.errorName = {
  UNAUTHORIZED: `UNAUTHORIZED`,
  SERVER_ERROR: `SERVER_ERROR`,
  VALIDATION_ERROR: `VALIDATION_ERROR`,
  NOT_FOUND: `NOT_FOUND`,
  USER_EXIST: `USER_EXIST`
}

exports.errorType = {
  UNAUTHORIZED: {
    message: "autheFailed",
    statusCode: 401
  },
  SERVER_ERROR: {
    message: "serverFailed",
    statusCode: 500
  },
  VALIDATION_ERROR: {
    message: "validationFailed",
    statusCode: 400
  },
  NOT_FOUND: {
    message: "dataNotFound",
    statusCode: 404
  },
  USER_EXIST: {
    message: "User already exists!",
    statusCode: 409
  }
}

exports.getError = (name) => {
  return JSON.stringify(this.errorType[name]);
}