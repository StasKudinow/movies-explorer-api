const { ERROR_SERVER, MESSAGE_SERVER } = require('../utils/constants');

module.exports.errorsHandler = (err, req, res, next) => {
  const { statusCode = ERROR_SERVER, message } = err;
  res
    .status(statusCode)
    .send({
      message: statusCode === ERROR_SERVER
        ? MESSAGE_SERVER
        : message,
    });
  next();
};
