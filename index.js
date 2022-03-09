'use strict'

const express =require('express');
require('dotenv').config();
const {db}=require('./models/seq-index.js');
const errorHandler = require('./error-handler/500.js')
const app =express();
const userSignUpRouter = require('./routs/user-signUpRout.js');//get routes 
const userSignInRouter = require('./routs/user-signIn.js');//get routes 
//-------------------------------------------------------------
app.use(express.json());//fot pasing the body 
app.use(userSignUpRouter);
app.use(userSignInRouter);

app.get('/',(req,res)=>{//this is a rout
  //res.json({method : req.reqType, });
  res.send('home route');
})
const PORT =process.env.PORT;
app.use(errorHandler);
db.sync().then(()=>{
  app.listen(PORT||3000,()=>{
    console.log("server is listening ")
  })
})

module.exports=app;