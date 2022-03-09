'use strict'

const {Sequelize,DataTypes}=require('sequelize');
const dotenv=require('dotenv');
dotenv.config();
const POSTGRES_URI= process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;
const user = require('./user-signUp');
//----------------------------------------------------------------

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
} : {};
//----------------------------------------------------------------
let sequelize = new Sequelize(POSTGRES_URI,sequelizeOptions);



module.exports = {
  
  db: sequelize, //for real connection and will use it in index.js
  user: user(sequelize,DataTypes),// for creating the table and will use it in our routes
  
}