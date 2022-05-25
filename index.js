
const dotenv = require('dotenv');
const connectToDataBase = require('./src/databse/connect')

dotenv.config();

require('./modules/express');



connectToDataBase();
