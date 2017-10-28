const mongoose = require('mongoose');
const config = require('./shared/config');
const logger = require('./shared/logger');

mongoose.connect(config.get('mongoDb').url);

const db = mongoose.connection;
db.on('error', (error) => {
  logger.error('Connection error', error);
});
db.once('open', function() {
  logger.info('Connected to MongoDB');
});

module.exports = mongoose;
