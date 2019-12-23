require('dotenv').config()

const config = require('./../config/config')

const defaultConfig = config.development;
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];

module.exports = {...defaultConfig, ...environmentConfig} /// sequelize/index.js