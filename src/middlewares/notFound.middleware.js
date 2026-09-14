const AppError = require("../utils/AppError");

function notFound(req, res, next) {
  // Abaikan request otomatis untuk favicon agar tidak memicu error 404/500 di log
  if (req.originalUrl === '/favicon.ico') {
    return res.status(204).end();
  }
  next(new AppError(`Route ${req.method} ${req.originalUrl} not found`, 404));
}

module.exports = notFound;