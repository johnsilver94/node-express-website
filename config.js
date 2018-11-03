const dotenv = require('dotenv');
const path = require('path');

const root = path.join.bind(this, __dirname);
dotenv.config({ path: root('.env') });

module.exports = {
  PORT: process.env.PORT || 3000,
  MONGO_URL: process.env.MONGO_URL,
  /*'mongodb://cretuion94:8octombrie081094silver_fang@ds042677.mlab.com:42677/nodeexpress',  'mongodb://@ds042677.mlab.com:42677/nodeexpress',*/
  user: 'cretuion94',
  password: '8octombrie081094silver_fang',
  IS_PRODUCTION: process.env.NODE_ENV === 'production'
};
