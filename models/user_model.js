const Sequelize = require('sequelize');
const sequelize = require('../data/database');

const User = sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:Sequelize.STRING,
    contact:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    email:{
       type:Sequelize.STRING,
       allowNull:false,
       unique:true
    }
});
module.exports=User;