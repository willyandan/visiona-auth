const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const Sequelize = require('sequelize');
const debug = require('debug')('auth-sakaue:dabatase');
const indexRouter = require('./routes/index');

const app = express();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres'
},{
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

if(process.env.NODE_ENV === 'development'){
  sequelize
  .authenticate()
  .then(() => {
    debug('Connection has been established successfully.');
  })
  .catch(err => {
    debug('Unable to connect to the database:', err);
  });
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

module.exports = app;
