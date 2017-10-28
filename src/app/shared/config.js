const convict = require('convict');
const dotenv = require('dotenv');

dotenv.config();

// Define a schema
const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  mongoDb: {
    url: {
      doc: 'MongoDB url',
      format: '*',
      default: 'mongodb://localhost/tic-tac-toe',
      env: 'MONGODB_URL',
    },
  },
});

// Perform validation
config.validate({allowed: 'strict'});

module.exports = config;
