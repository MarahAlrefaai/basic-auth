'use strict'
const bcrypt=require('bcrypt');
const base64 = require('base-64');
const express = require('express');
const { user } = require('../models/seq-index.js');// get the model from the export in index.js
const router = express.Router(); //get method router 

//routs
router.post('/signIn', signIn);

//----------------------------------------------------
async function signIn(req, res) {
  if (req.headers['authorization']) {
    let bhp=req.headers.authorization.split(' ');
    let encoded=bhp.pop();
    let decode=base64.decode(encoded);
    let [name,password]=decode.split(':');
 
  try {
   const user =await user.findOne({where:{name:name}});
   const valid=await bcrypt.compare(password,user.password);
   if(valid){
    res.status(200).json({name:name});
   
   }
   else{
    res.send("invalid password");
   } }
  catch (e) { console.log("problem in create user") }
}
}
module.exports = router;