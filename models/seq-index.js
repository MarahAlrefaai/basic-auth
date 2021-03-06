'use strict'

const {Sequelize,DataTypes}=require('sequelize');
const dotenv=require('dotenv');
dotenv.config();
const DATABASE_URL= process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;
const user = require('./user-signUp');
//----------------------------------------------------------------
//you must add production and NODE_ENV in the heroku (sittings) FIRST
let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
} : {};
//----------------------------------------------------------------
let sequelize = new Sequelize(DATABASE_URL,sequelizeOptions);



module.exports = {
  
  db: sequelize, //for real connection and will use it in index.js
  user: user(sequelize,DataTypes),// for creating the table and will use it in our routes
  
}