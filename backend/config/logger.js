const { createLogger, format, transports } = require('winston');

// Configure Winston logger
const logger = createLogger({
  level: 'debug', // Default log level
  format: format.combine(
    format.timestamp(), // Adds timestamps to logs
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`; // Log format
    })
  ),
  transports: [
    new transports.Console(), // Log to console
    new transports.File({ filename: 'logs/app.log' }) // Log to a file
  ],
});

module.exports = logger; // Export logger instance
