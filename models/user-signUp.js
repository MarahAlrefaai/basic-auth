'use strict'
const user = (sequelize, DataTypes) => sequelize.define('user', {

  //name -->column 
   name: {
     
        type: DataTypes.STRING,
        allowNull: false

    },
    
  //password -->second culomn 
    password: {
      
        type: DataTypes.STRING,
        allowNull: false,
       


    }
})

module.exports = user;