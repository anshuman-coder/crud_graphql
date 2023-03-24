exports.successResponse = (req, res, data, code = 200) => { 
  res.status(code).json({
    error: false,
    success: true,
    data
  });
}

exports.failResponse = (req, res, message, code = 400) => { 
  return res.status(code).json({
    error: false,
    success: false,
    data: message
  });
}

exports.errorResponse = (req, res, error, code = 500) => {
  res.status(code).json({
    error: true,
    success: false,
    data: error
  });
}